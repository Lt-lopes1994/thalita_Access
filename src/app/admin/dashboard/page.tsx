"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, useToast } from "@/components/Toast";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface SiteContent {
  id: string;
  section: string;
  field: string;
  value: string;
  type: string;
}

interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  mimetype: string;
  size: number;
  url: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("content");
  const [content, setContent] = useState<SiteContent[]>([]);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingContent, setEditingContent] = useState<SiteContent | null>(
    null
  );
  const [uploadingFile, setUploadingFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    checkAuth();
    loadContent();
    loadMediaFiles();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem("admin_token");
    const userData = localStorage.getItem("admin_user");

    if (!token || !userData) {
      router.push("/admin");
      return;
    }

    try {
      const response = await fetch("/api/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Token inválido");
      }

      setUser(JSON.parse(userData));
    } catch (error) {
      console.error("Erro na autenticação:", error);
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_user");
      router.push("/admin");
    }
  };

  const loadContent = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await fetch("/api/admin/content", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setContent(data.content);
      }
    } catch (error) {
      console.error("Erro ao carregar conteúdo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMediaFiles = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await fetch("/api/admin/media", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Transformar os dados para o formato esperado
        const transformedFiles = (data.media || []).map((file: any) => ({
          id: file.id,
          filename: file.filename,
          originalName: file.originalName,
          mimetype: file.mimeType || "image/jpeg",
          size: file.size || 0,
          url: file.path,
          createdAt: file.createdAt,
        }));
        setMediaFiles(transformedFiles);
      }
    } catch (error) {
      console.error("Erro ao carregar arquivos:", error);
    }
  };

  const handleFileUpload = async (file: File) => {
    setUploadingFile(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const token = localStorage.getItem("admin_token");
      const response = await fetch("/api/admin/media", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        await loadMediaFiles();
        toast.success("Imagem enviada com sucesso!");
      } else {
        throw new Error("Erro no upload");
      }
    } catch (error) {
      console.error("Erro no upload:", error);
      toast.error("Erro ao enviar imagem");
    } finally {
      setUploadingFile(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    router.push("/admin");
  };

  const handleSaveContent = async (contentData: Partial<SiteContent>) => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await fetch("/api/admin/content", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contentData),
      });

      if (response.ok) {
        await loadContent(); // Recarregar conteúdo
        setEditingContent(null);
        toast.success("Conteúdo salvo com sucesso!");
      } else {
        throw new Error("Erro ao salvar");
      }
    } catch (error) {
      console.error("Erro ao salvar conteúdo:", error);
      toast.error("Erro ao salvar conteúdo");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Painel Administrativo
                </h1>
                <p className="text-sm text-gray-500">Thalita Terapias</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="/admin/preview"
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2"
              >
                <span>👁️</span>
                <span>Modo Preview</span>
              </a>
              <span className="text-sm text-gray-600">Olá, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("content")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "content"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Conteúdo do Site
            </button>
            <button
              onClick={() => setActiveTab("media")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "media"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Imagens
            </button>
            <button
              onClick={() => setActiveTab("colors")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "colors"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Cores & Estilo
            </button>
          </nav>
        </div>

        {/* Content Management */}
        {activeTab === "content" && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Gerenciar Conteúdo
              </h2>
              <p className="text-sm text-gray-600">
                Edite textos, títulos e descrições do site
              </p>
            </div>

            <div className="p-6">
              {content.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Nenhum conteúdo encontrado</p>
                  <button
                    onClick={() =>
                      setEditingContent({
                        id: "",
                        section: "",
                        field: "",
                        value: "",
                        type: "text",
                      })
                    }
                    className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                  >
                    Adicionar Conteúdo
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {content.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {item.section}
                            </span>
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                              {item.field}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-2">
                            {item.value}
                          </p>
                        </div>
                        <button
                          onClick={() => setEditingContent(item)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm"
                        >
                          Editar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Media Management */}
        {activeTab === "media" && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Gerenciar Imagens
              </h2>
              <p className="text-sm text-gray-600">
                Upload e organização de imagens do site
              </p>
            </div>

            <div className="p-6">
              {/* Upload Area */}
              <div className="mb-8">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(file);
                  }}
                  className="hidden"
                />

                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 cursor-pointer transition-colors"
                >
                  {uploadingFile ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-2"></div>
                      <p className="text-sm text-gray-600">Enviando...</p>
                    </div>
                  ) : (
                    <>
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600">
                        Clique para fazer upload de uma imagem
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, WEBP até 5MB
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Images Grid */}
              {mediaFiles.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {mediaFiles.map((file) => (
                    <div
                      key={file.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <div className="aspect-square bg-gray-100 flex items-center justify-center">
                        {file.mimetype.startsWith("image/") ? (
                          <img
                            src={file.url}
                            alt={file.originalName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                          </svg>
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {file.originalName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(file.url);
                            toast.success(
                              "URL copiada para a área de transferência!"
                            );
                          }}
                          className="mt-2 text-xs text-purple-600 hover:text-purple-800"
                        >
                          Copiar URL
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Nenhuma imagem enviada ainda</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Colors & Style */}
        {activeTab === "colors" && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Cores e Estilo
              </h2>
              <p className="text-sm text-gray-600">
                Personalize as cores e estilos do site
              </p>
            </div>

            <div className="p-6">
              <div className="text-center py-12">
                <p className="text-gray-500">
                  Personalizador de cores em breve
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Content Modal */}
      {editingContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                {editingContent.id ? "Editar Conteúdo" : "Novo Conteúdo"}
              </h3>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveContent(editingContent);
              }}
              className="p-6 space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seção
                  </label>
                  <input
                    type="text"
                    value={editingContent.section}
                    onChange={(e) =>
                      setEditingContent({
                        ...editingContent,
                        section: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="ex: hero, about, services"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campo
                  </label>
                  <input
                    type="text"
                    value={editingContent.field}
                    onChange={(e) =>
                      setEditingContent({
                        ...editingContent,
                        field: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="ex: title, description"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Valor
                </label>
                <textarea
                  value={editingContent.value}
                  onChange={(e) =>
                    setEditingContent({
                      ...editingContent,
                      value: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Conteúdo..."
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setEditingContent(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
    </div>
  );
}
