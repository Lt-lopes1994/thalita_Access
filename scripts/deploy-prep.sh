#!/bin/bash

# Script para preparar o projeto para deploy na Vercel

echo "🚀 Preparando projeto para deploy na Vercel..."

# 1. Instalar dependências
echo "📦 Instalando dependências..."
npm install

# 2. Gerar cliente Prisma
echo "🗄️ Gerando cliente Prisma..."
npx prisma generate

# 3. Build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

# 4. Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo ""
    echo "📋 Próximos passos para deploy:"
    echo "1. Configure DATABASE_URL no Vercel (Vercel Postgres)"
    echo "2. Configure JWT_SECRET no Vercel (use: openssl rand -base64 32)"
    echo "3. Configure NEXTAUTH_SECRET no Vercel"
    echo "4. Após deploy, execute os comandos de setup do banco"
    echo ""
    echo "🌐 Seu projeto está pronto para deploy!"
else
    echo "❌ Erro no build. Verifique os logs acima."
    exit 1
fi
