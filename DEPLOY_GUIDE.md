# Documentação de Deploy - Vercel

## 🚀 Passos para Deploy no Vercel

### 1. Configuração das Variáveis de Ambiente

No painel do Vercel, adicione as seguintes variáveis:

```
NODE_ENV=production
JWT_SECRET=SUA_CHAVE_SECRETA_SUPER_FORTE_AQUI
NEXTAUTH_SECRET=SUA_CHAVE_NEXTAUTH_SUPER_FORTE_AQUI
NEXTAUTH_URL=https://seudominio.vercel.app
DATABASE_URL=postgresql://usuario:senha@host:porta/database
```

### 2. Banco de Dados

Para produção, recomendamos usar PostgreSQL:
- Use o Vercel Postgres (recomendado)
- Ou configure um PostgreSQL externo (Railway, Supabase, etc.)

### 3. Build Settings

O Vercel detectará automaticamente que é um projeto Next.js.

**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm install`

### 4. Após o Deploy

1. Acesse o painel admin: `https://seudominio.vercel.app/admin`
2. Use as credenciais padrão para primeiro acesso
3. Altere a senha imediatamente
4. Configure o conteúdo do site

### 5. Comandos Úteis

Para popular o banco após deploy:
```bash
# Executar scripts via Vercel CLI (se necessário)
vercel env pull .env.local
npm run db:push
npm run admin:create
npm run content:seed
```

### 📝 Checklist Pré-Deploy

- ✅ Build local funcionando (`npm run build`)
- ✅ Variáveis de ambiente configuradas
- ✅ Banco de dados configurado
- ✅ vercel.json simplificado
- ✅ next.config.js atualizado

### 🔧 Solução de Problemas

Se o build falhar:
1. Verifique se todas as dependências estão instaladas
2. Confirme que o DATABASE_URL está correto
3. Verifique se não há erros de TypeScript
4. Teste o build local primeiro

### 🎯 URLs Importantes

- Site principal: `https://seudominio.vercel.app`
- Painel admin: `https://seudominio.vercel.app/admin`
- Preview: `https://seudominio.vercel.app/admin/preview`
