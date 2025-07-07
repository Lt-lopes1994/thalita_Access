"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  mimeType?: string;
  size: number;
  url: string;
  path?: string;
  createdAt: string;
}

interface ApiMediaFile {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  path: string;
  createdAt: string;
}

export default function AdminDashboardPreview() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("content");
  const [content, setContent] = useState<SiteContent[]>([]);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingContent, setEditingContent] = useState<SiteContent | null>(
    null
  );
  const [uploadingFile, setUploadingFile] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [previewDevice, setPreviewDevice] = useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    checkAuth();
    loadContent();
    loadMediaFiles();

    // Escutar mensagens do iframe para edição de conteúdo
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "EDIT_CONTENT") {
        const { section, field } = event.data;

        // Procurar o conteúdo correspondente
        const contentItem = content.find(
          (item) => item.section === section && item.field === field
        );

        if (contentItem) {
          setEditingContent(contentItem);
        } else {
          // Criar novo conteúdo
          setEditingContent({
            id: "",
            section,
            field,
            value: "",
            type: "text",
          });
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const refreshPreview = () => {
    if (previewRef.current) {
      previewRef.current.src = previewRef.current.src;
    }
  };

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
        const transformedFiles = (data.media || []).map(
          (file: ApiMediaFile) => ({
            id: file.id,
            filename: file.filename,
            originalName: file.originalName,
            mimetype: file.mimeType || "image/jpeg",
            size: file.size || 0,
            url: file.path,
            createdAt: file.createdAt,
          })
        );
        setMediaFiles(transformedFiles);
      }
    } catch (error) {
      console.error("Erro ao carregar arquivos:", error);
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
        await loadContent();
        setEditingContent(null);
        toast.success("Conteúdo salvo com sucesso!");
        // Refresh preview after save
        setTimeout(() => refreshPreview(), 500);
      } else {
        throw new Error("Erro ao salvar");
      }
    } catch (error) {
      console.error("Erro ao salvar conteúdo:", error);
      toast.error("Erro ao salvar conteúdo");
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
        setTimeout(() => refreshPreview(), 500);
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

  const getPreviewDimensions = () => {
    switch (previewDevice) {
      case "mobile":
        return { width: "375px", height: "100%" };
      case "tablet":
        return { width: "768px", height: "100%" };
      default:
        return { width: "100%", height: "100%" };
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b flex-shrink-0">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-xl font-semibold text-gray-900">
                    Painel Administrativo
                  </h1>
                  {editingContent && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                      ✏️ Editando
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">Thalita Terapias</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Preview Toggle */}
              <button
                onClick={() => setShowPreview(!showPreview)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  showPreview
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {showPreview ? "👁️ Ocultar Preview" : "👁️ Mostrar Preview"}
              </button>

              {/* Device Selector */}
              {showPreview && (
                <select
                  value={previewDevice}
                  onChange={(e) =>
                    setPreviewDevice(
                      e.target.value as "desktop" | "tablet" | "mobile"
                    )
                  }
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="desktop">🖥️ Desktop</option>
                  <option value="tablet">📱 Tablet</option>
                  <option value="mobile">📱 Mobile</option>
                </select>
              )}

              <span className="text-sm text-gray-600">Olá, {user?.name}</span>
              
              <a 
                href="/admin/dashboard"
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                🏠 Dashboard
              </a>
              
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                🚪 Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={`flex-1 flex overflow-hidden transition-all duration-300 ${
        editingContent ? 'ml-96' : 'ml-0'
      }`}>
        {/* Admin Panel */}
        <div
          className={`${
            showPreview ? "w-1/2" : "w-full"
          } flex flex-col bg-white border-r border-gray-200 transition-all duration-300`}
        >
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6 py-4">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("content")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "content"
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                📝 Conteúdo do Site
              </button>
              <button
                onClick={() => setActiveTab("media")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "media"
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                🖼️ Imagens
              </button>
              <button
                onClick={() => setActiveTab("colors")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "colors"
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                🎨 Cores & Estilo
              </button>
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Content Management */}
            {activeTab === "content" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    Gerenciar Conteúdo
                  </h2>
                  <p className="text-sm text-gray-600">
                    Edite textos, títulos e descrições do site. As mudanças
                    aparecerão no preview →
                  </p>
                </div>

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
                        className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors"
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
                            className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            ✏️ Editar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Media Management */}
            {activeTab === "media" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    Gerenciar Imagens
                  </h2>
                  <p className="text-sm text-gray-600">
                    Upload e organização de imagens do site
                  </p>
                </div>

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
                          📸 Clique para fazer upload de uma imagem
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
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {mediaFiles.map((file) => (
                      <div
                        key={file.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                          {file.mimetype.startsWith("image/") ? (
                            <Image
                              src={file.url}
                              alt={file.originalName}
                              width={200}
                              height={200}
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
                              toast.success("URL copiada!");
                            }}
                            className="mt-2 text-xs text-purple-600 hover:text-purple-800 font-medium"
                          >
                            📋 Copiar URL
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      Nenhuma imagem enviada ainda
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Colors & Style */}
            {activeTab === "colors" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    Cores e Estilo
                  </h2>
                  <p className="text-sm text-gray-600">
                    Personalize as cores e estilos do site
                  </p>
                </div>

                <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
                  <p className="text-gray-500 mb-4">
                    🎨 Personalizador de cores em breve
                  </p>
                  <p className="text-sm text-gray-400">
                    Aqui você poderá alterar as cores principais do site
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview Panel */}
        {showPreview && (
          <div className="w-1/2 bg-gray-100 flex flex-col">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 text-sm flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>🔄 Preview Ao Vivo</span>
                </span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                  Clique nos elementos para editar
                </span>
              </div>
              <button
                onClick={refreshPreview}
                className="text-white hover:text-gray-300 text-xs px-3 py-1 rounded bg-white/20 hover:bg-white/30 transition-colors"
              >
                🔄 Atualizar
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <div
                className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200"
                style={getPreviewDimensions()}
              >
                <iframe
                  ref={previewRef}
                  src="/"
                  className="w-full h-full border-0"
                  title="Preview do Site"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Content Modal */}
      {/* Editor Lateral - não sobrepõe o preview */}
      {editingContent && (
        <div className="fixed inset-y-0 left-0 w-96 bg-white shadow-2xl z-50 border-r border-gray-200">
          <div className="flex flex-col h-full">
            <div className="px-6 py-4 border-b border-gray-200 bg-purple-50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingContent.id ? "✏️ Editar Conteúdo" : "➕ Novo Conteúdo"}
                </h3>
                <button
                  onClick={() => setEditingContent(null)}
                  className="text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveContent(editingContent);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📂 Seção
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="ex: hero, about, services"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🏷️ Campo
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="ex: title, description"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📝 Conteúdo
                  </label>
                  <textarea
                    value={editingContent.value}
                    onChange={(e) =>
                      setEditingContent({
                        ...editingContent,
                        value: e.target.value,
                      })
                    }
                    rows={10}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    placeholder="Digite o conteúdo aqui..."
                    required
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {editingContent.value.length} caracteres
                  </div>
                </div>

                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setEditingContent(null)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    ❌ Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    💾 Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Overlay sutil para indicar modo de edição */}
      {editingContent && (
        <div 
          className="fixed inset-0 bg-purple-900 bg-opacity-5 z-40 pointer-events-none"
        />
      )}

      {/* Toast Container */}
      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
    </div>
  );
}
