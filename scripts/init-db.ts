import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function initializeDatabase() {
  try {
    console.log("🚀 Inicializando banco de dados...");

    // Verifica se já existe um admin
    const existingAdmin = await prisma.user.findFirst({
      where: { role: "admin" },
    });

    if (!existingAdmin) {
      console.log("👤 Criando usuário admin...");

      const hashedPassword = await bcrypt.hash("ThalitaAdmin2025!", 12);

      await prisma.user.create({
        data: {
          email: "thalita@exemplo.com",
          password: hashedPassword,
          name: "Thalita",
          role: "admin",
        },
      });

      console.log("✅ Usuário admin criado!");
    } else {
      console.log("👤 Usuário admin já existe");
    }

    // Verifica se já existe conteúdo
    const existingContent = await prisma.siteContent.findFirst();

    if (!existingContent) {
      console.log("📝 Criando conteúdo inicial...");

      const initialContent = [
        // Hero Section
        {
          section: "hero",
          field: "title",
          value: "Thalita - Terapia de Barras de Access",
        },
        {
          section: "hero",
          field: "subtitle",
          value: "Desperte seu potencial com a terapia das Barras de Access",
        },
        {
          section: "hero",
          field: "description",
          value:
            "Técnica suave e transformadora que promove relaxamento profundo e liberação de limitações.",
        },

        // About Section
        { section: "about", field: "title", value: "Sobre Thalita" },
        {
          section: "about",
          field: "description",
          value:
            "Terapeuta especializada em Barras de Access, dedicada a ajudar pessoas a descobrirem seu potencial e bem-estar.",
        },

        // Services Section
        { section: "services", field: "title", value: "Serviços" },
        {
          section: "services",
          field: "description",
          value:
            "Terapias personalizadas para seu bem-estar e desenvolvimento pessoal.",
        },

        // Contact Section
        { section: "contact", field: "title", value: "Contato" },
        { section: "contact", field: "phone", value: "(11) 99999-9999" },
        { section: "contact", field: "email", value: "thalita@exemplo.com" },
        { section: "contact", field: "address", value: "São Paulo, SP" },
      ];

      for (const content of initialContent) {
        await prisma.siteContent.create({
          data: content,
        });
      }

      console.log("✅ Conteúdo inicial criado!");
    } else {
      console.log("📝 Conteúdo já existe");
    }

    console.log("🎉 Banco de dados inicializado com sucesso!");
    console.log("🔐 Acesse: /admin");
    console.log("📧 Email: thalita@exemplo.com");
    console.log("🔑 Senha: ThalitaAdmin2025!");
    console.log("⚠️  IMPORTANTE: Altere a senha após o primeiro login!");
  } catch (error) {
    console.error("❌ Erro ao inicializar banco de dados:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executa apenas se chamado diretamente
if (require.main === module) {
  initializeDatabase().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

export default initializeDatabase;
