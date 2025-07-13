#!/bin/bash

# Script para inicializar o banco de dados no Vercel

echo "🚀 Iniciando setup do banco de dados..."

# Gera o cliente Prisma
echo "📦 Gerando cliente Prisma..."
npx prisma generate

# Aplica as migrações
echo "🗃️ Aplicando migrações..."
npx prisma db push

# Cria o usuário admin
echo "👤 Criando usuário admin..."
npx ts-node scripts/create-admin.ts

# Popula o conteúdo inicial
echo "📝 Populando conteúdo inicial..."
npx ts-node scripts/seed-content.ts

echo "✅ Setup concluído!"
echo "🔐 Acesse: https://your-domain.vercel.app/admin"
echo "📧 Email: thalita@exemplo.com"
echo "🔑 Senha: ThalitaAdmin2025!"
echo ""
echo "⚠️  IMPORTANTE: Altere a senha após o primeiro login!"
