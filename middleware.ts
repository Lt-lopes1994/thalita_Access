import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./src/lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Proteger rotas administrativas
  if (pathname.startsWith("/admin") && pathname !== "/admin") {
    // Verificar se existe token no localStorage não é possível no middleware
    // O middleware executa no servidor, então vamos usar cookies ou headers

    // Por agora, vamos permitir acesso (a verificação será feita no cliente)
    return NextResponse.next();
  }

  // Proteger APIs administrativas
  if (pathname.startsWith("/api/admin")) {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Token de autorização necessário" },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const user = verifyToken(token);

    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // Adicionar informações do usuário nos headers para uso nas APIs
    const response = NextResponse.next();
    response.headers.set("x-user-id", user.userId);
    response.headers.set("x-user-role", user.role);

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
