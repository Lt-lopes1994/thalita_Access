import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// Função para inicializar o banco de dados
async function initializeDatabase() {
  try {
    console.log("🚀 Iniciando configuração do banco de dados...");

    // Aplicar schema do banco
    console.log("📋 Aplicando schema do banco...");

    // Criar usuário admin se não existir
    console.log("👤 Verificando usuário admin...");

    const existingAdmin = await prisma.user.findUnique({
      where: { email: "thalita@exemplo.com" },
    });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("ThalitaAdmin2025!", 12);

      await prisma.user.create({
        data: {
          email: "thalita@exemplo.com",
          password: hashedPassword,
          name: "Thalita Admin",
          role: "ADMIN",
        },
      });
      console.log("✅ Usuário admin criado!");
    } else {
      console.log("✅ Usuário admin já existe!");
    }

    // Verificar e criar conteúdo padrão se não existir
    console.log("📝 Verificando conteúdo do site...");

    const existingContent = await prisma.siteContent.findFirst();

    if (!existingContent) {
      const defaultContent = [
        {
          section: "hero",
          field: "title",
          value: "Bem-vinda ao seu espaço de cura e transformação",
        },
        {
          section: "hero",
          field: "subtitle",
          value:
            "Descubra o poder transformador das Barras de Access e reconecte-se com sua essência através de terapias holísticas personalizadas.",
        },
        { section: "about", field: "title", value: "Sobre Thalita" },
        {
          section: "about",
          field: "content",
          value:
            "Sou Thalita, terapeuta especializada em Barras de Access e práticas holísticas. Com anos de experiência, dedico-me a ajudar pessoas a liberarem bloqueios emocionais e mentais, promovendo bem-estar e autoconhecimento através de técnicas transformadoras.",
        },
        { section: "services", field: "title", value: "Serviços" },
        { section: "contact", field: "title", value: "Entre em Contato" },
        {
          section: "contact",
          field: "subtitle",
          value: "Pronta para iniciar sua jornada de transformação?",
        },
        { section: "contact", field: "whatsappNumber", value: "5511999999999" },
        {
          section: "contact",
          field: "whatsappMessage",
          value: "Olá! Gostaria de agendar uma sessão de Barras de Access.",
        },
        {
          section: "footer",
          field: "text",
          value: "Thalita - Barras de Access & Terapias Holísticas",
        },
      ];

      for (const content of defaultContent) {
        await prisma.siteContent.create({
          data: content,
        });
      }
      console.log("✅ Conteúdo padrão criado!");
    } else {
      console.log("✅ Conteúdo do site já existe!");
    }

    console.log("🎉 Banco de dados configurado com sucesso!");
    return { success: true };
  } catch (error) {
    console.error("❌ Erro ao inicializar banco:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar se é o primeiro setup (opcional - pode adicionar uma verificação de token)
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    // Token simples para segurança inicial (pode ser removido após o setup)
    if (token !== "init-db-2025") {
      return NextResponse.json({ error: "Token inválido" }, { status: 401 });
    }

    await initializeDatabase();

    return NextResponse.json({
      success: true,
      message: "Banco de dados inicializado com sucesso!",
      admin: {
        email: "thalita@exemplo.com",
        password: "ThalitaAdmin2025!",
        url: "/admin",
      },
    });
  } catch (error) {
    console.error("Erro ao inicializar banco:", error);
    return NextResponse.json(
      { error: "Erro ao inicializar banco de dados" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Use POST para inicializar o banco de dados",
    usage: "POST /api/init-db?token=init-db-2025",
  });
}
