import { useState, useEffect } from "react";

interface SiteContent {
  id: string;
  section: string;
  field: string;
  value: string;
  type: string;
}

interface ContentMap {
  [section: string]: {
    [field: string]: string;
  };
}

export function useSiteContent() {
  const [content, setContent] = useState<ContentMap>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch("/api/content/public");

      if (response.ok) {
        const data = await response.json();

        // Converter array em objeto aninhado para fácil acesso
        const contentMap: ContentMap = {};

        data.content.forEach((item: SiteContent) => {
          if (!contentMap[item.section]) {
            contentMap[item.section] = {};
          }
          contentMap[item.section][item.field] = item.value;
        });

        setContent(contentMap);
      }
    } catch (error) {
      console.error("Erro ao carregar conteúdo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Função helper para obter conteúdo com fallback
  const getContent = (
    section: string,
    field: string,
    fallback: string = ""
  ) => {
    return content[section]?.[field] || fallback;
  };

  return {
    content,
    isLoading,
    getContent,
    refresh: loadContent,
  };
}
