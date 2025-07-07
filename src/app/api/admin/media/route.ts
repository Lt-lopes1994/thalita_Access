import { NextRequest, NextResponse } from "next/server";
import { mkdir } from "fs/promises";
import { join } from "path";
import { verifyAuth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import sharp from "sharp";

// POST - Upload de imagens
export async function POST(request: NextRequest) {
  try {
    const user = verifyAuth(request);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;
    const alt = (formData.get("alt") as string) || "";

    if (!file) {
      return NextResponse.json(
        { error: "Arquivo é obrigatório" },
        { status: 400 }
      );
    }

    // Validar tipo de arquivo
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Tipo de arquivo não permitido. Use JPEG, PNG ou WebP" },
        { status: 400 }
      );
    }

    // Validar tamanho (máximo 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "Arquivo muito grande. Máximo 5MB" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Criar diretório se não existir
    const uploadDir = join(process.cwd(), "public", "uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch {
      // Diretório já existe
    }

    // Gerar nome único
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filename = `${timestamp}_${originalName}`;
    const filepath = join(uploadDir, filename);

    // Otimizar imagem com Sharp
    await sharp(buffer)
      .resize(1200, 1200, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 85,
        progressive: true,
      })
      .toFile(filepath);

    // Salvar informações no banco
    const media = await prisma.media.create({
      data: {
        filename,
        originalName: file.name,
        path: `/uploads/${filename}`,
        size: file.size,
        mimeType: file.type,
        alt,
      },
    });

    return NextResponse.json({
      success: true,
      media: {
        id: media.id,
        filename: media.filename,
        originalName: media.originalName,
        path: media.path,
        size: media.size,
        mimeType: media.mimeType,
        alt: media.alt,
        createdAt: media.createdAt,
      },
    });
  } catch (error) {
    console.error("Erro no upload:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// GET - Listar imagens
export async function GET(request: NextRequest) {
  try {
    const user = verifyAuth(request);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const media = await prisma.media.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        filename: true,
        originalName: true,
        path: true,
        size: true,
        mimeType: true,
        alt: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ success: true, media });
  } catch (error) {
    console.error("Erro ao listar mídia:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
