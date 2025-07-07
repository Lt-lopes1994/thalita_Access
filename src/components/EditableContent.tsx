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
    <div className={`relative group ${className}`} onClick={handleEdit}>
      {children}

      {/* Overlay para indicar conteúdo editável */}
      <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 cursor-pointer rounded">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-purple-600 text-white text-xs px-2 py-1 rounded shadow-lg">
          ✏️ {section}.{field}
        </div>
      </div>
    </div>
  );
}
