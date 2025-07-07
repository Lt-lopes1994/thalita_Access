import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

async function createAdminUser() {
  try {
    // Verificar se já existe um admin
    const existingAdmin = await prisma.user.findFirst({
      where: { role: "admin" },
    });

    if (existingAdmin) {
      console.log("👤 Usuário admin já existe:", existingAdmin.email);
      return;
    }

    // Dados do admin (ALTERE ESTES DADOS!)
    const adminEmail = "thalita@exemplo.com";
    const adminPassword = "ThalitaAdmin2025!"; // MUDE ESTA SENHA!
    const adminName = "Thalita";

    // Hash da senha
    const hashedPassword = await hashPassword(adminPassword);

    // Criar usuário admin
    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: adminName,
        role: "admin",
      },
    });

    console.log("✅ Usuário admin criado com sucesso!");
    console.log("📧 Email:", admin.email);
    console.log("🔑 Senha:", adminPassword);
    console.log("");
    console.log("⚠️  IMPORTANTE: Altere a senha após o primeiro login!");
    console.log("🔐 Acesse: http://localhost:3000/admin");
  } catch (error) {
    console.error("❌ Erro ao criar usuário admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();
