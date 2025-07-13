"use client";

import { useState, useEffect } from "react";

interface EditableContentProps {
  section: string;
  field: string;
  children: React.ReactNode;
  className?: string;
}

export default function EditableContent({
  section,
  field,
  children,
  className = "",
}: EditableContentProps) {
  const [isAdminMode, setIsAdminMode] = useState(false);

  useEffect(() => {
    // Detecta se está sendo visualizado dentro de um iframe (modo preview)
    setIsAdminMode(window !== window.parent);
  }, []);

  const handleEdit = () => {
    // Enviar mensagem para o parent (painel admin) para editar este conteúdo
    if (window.parent) {
      window.parent.postMessage(
        {
          type: "EDIT_CONTENT",
          section,
          field,
        },
        "*"
      );
    }
  };

  if (!isAdminMode) {
    return <>{children}</>;
  }

  return (
    <div className={`relative group ${className}`}>
      {children}

      {/* Indicador de conteúdo editável - sutil e não intrusivo */}
      <div
        className="absolute inset-0 border-2 border-dashed border-blue-400 border-opacity-0 group-hover:border-opacity-60 transition-all duration-300 cursor-pointer rounded-md pointer-events-none"
        onClick={handleEdit}
      >
        {/* Badge de edição com alto contraste */}
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full shadow-xl border-2 border-white pointer-events-auto flex items-center gap-1 font-medium">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.828-2.828z" />
          </svg>
          <span>Editar</span>
        </div>
      </div>
    </div>
  );
}
