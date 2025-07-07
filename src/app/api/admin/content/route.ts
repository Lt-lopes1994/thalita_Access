import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAuth } from "@/lib/auth";

// GET - Obter todo o conteúdo ou por seção
export async function GET(request: NextRequest) {
  try {
    const user = verifyAuth(request);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const section = searchParams.get("section");

    const whereClause = section ? { section } : {};

    const content = await prisma.siteContent.findMany({
      where: whereClause,
      orderBy: [{ section: "asc" }, { field: "asc" }],
    });

    return NextResponse.json({ success: true, content });
  } catch (error) {
    console.error("Erro ao buscar conteúdo:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// POST - Criar ou atualizar conteúdo
export async function POST(request: NextRequest) {
  try {
    const user = verifyAuth(request);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const { section, field, value, type = "text" } = await request.json();

    if (!section || !field || value === undefined) {
      return NextResponse.json(
        { error: "Seção, campo e valor são obrigatórios" },
        { status: 400 }
      );
    }

    // Usar upsert para criar ou atualizar
    const content = await prisma.siteContent.upsert({
      where: {
        section_field: {
          section,
          field,
        },
      },
      update: {
        value,
        type,
        updatedAt: new Date(),
      },
      create: {
        section,
        field,
        value,
        type,
      },
    });

    return NextResponse.json({ success: true, content });
  } catch (error) {
    console.error("Erro ao salvar conteúdo:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// DELETE - Deletar conteúdo específico
export async function DELETE(request: NextRequest) {
  try {
    const user = verifyAuth(request);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const section = searchParams.get("section");
    const field = searchParams.get("field");

    if (!section || !field) {
      return NextResponse.json(
        { error: "Seção e campo são obrigatórios" },
        { status: 400 }
      );
    }

    await prisma.siteContent.delete({
      where: {
        section_field: {
          section,
          field,
        },
      },
    });

    return NextResponse.json({ success: true, message: "Conteúdo removido" });
  } catch (error) {
    console.error("Erro ao deletar conteúdo:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
