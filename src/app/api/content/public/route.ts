import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET - Obter conteúdo público (sem autenticação)
export async function GET(request: NextRequest) {
  try {
    const content = await prisma.siteContent.findMany({
      select: {
        id: true,
        section: true,
        field: true,
        value: true,
        type: true,
      },
      orderBy: [{ section: "asc" }, { field: "asc" }],
    });

    return NextResponse.json({
      success: true,
      content,
    });
  } catch (error) {
    console.error("Erro ao buscar conteúdo público:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
