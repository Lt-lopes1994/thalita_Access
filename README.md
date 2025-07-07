# Thalita Terapias - Site Oficial

Um site moderno e responsivo para a terapeuta Thalita, especializada em Barras de Access e terapias holísticas, com painel administrativo integrado.

## 🌟 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance Otimizada**: Built com Next.js 15 e Turbopack para máxima velocidade
- **SEO Friendly**: Otimizado para mecanismos de busca
- **Acessibilidade**: Desenvolvido seguindo boas práticas de a11y
- **UI Moderna**: Interface limpa e profissional usando Tailwind CSS
- **Painel Administrativo**: Sistema seguro para edição de conteúdo
- **Upload de Imagens**: Gerenciamento fácil de mídia
- **Conteúdo Dinâmico**: Edição em tempo real via interface admin

## 🛠️ Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Estilização utilitária moderna
- **React 19** - Biblioteca de componentes
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados para desenvolvimento
- **JWT** - Autenticação segura
- **bcryptjs** - Criptografia de senhas
- **Sharp** - Otimização de imagens
- **Turbopack** - Bundler ultra-rápido para desenvolvimento

## 🎨 Seções do Site

- **Hero Section** - Apresentação impactante com call-to-action (✅ Dinâmico)
- **Sobre a Thalita** - Apresentação pessoal e qualificações (✅ Dinâmico)
- **Serviços** - Descrição detalhada dos serviços oferecidos
- **Barras de Access** - Explicação educativa sobre a técnica
- **Depoimentos** - Feedback real de clientes
- **Contato** - Formulário e informações de contato (✅ Dinâmico)
- **Footer** - Links úteis e informações adicionais

## � Painel Administrativo

### Recursos Disponíveis

- **Gerenciamento de Conteúdo**: Edição de textos, títulos e descrições
- **Upload de Imagens**: Interface drag-and-drop para mídia
- **Sistema de Notificações**: Feedback em tempo real com toasts
- **Autenticação Segura**: JWT + bcrypt para proteção
- **Interface Intuitiva**: Design limpo e fácil de usar

### Como Acessar

1. Acesse `/admin` no seu navegador
2. Faça login com suas credenciais
3. Use o painel para editar conteúdo e fazer upload de imagens

### Credenciais Padrão

- **Email**: thalita@exemplo.com
- **Senha**: admin123

⚠️ **Importante**: Altere a senha padrão em produção!

## �🚀 Como Executar

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Configurar banco de dados:**

   ```bash
   npm run db:push
   npm run content:seed
   npm run admin:create
   ```

3. **Executar em modo desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Abrir no navegador:**
   Acesse [http://localhost:3000](http://localhost:3000)

## 📊 Scripts Disponíveis

- `npm run dev` - Executar em desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Executar versão de produção
- `npm run db:generate` - Gerar cliente Prisma
- `npm run db:push` - Aplicar mudanças no banco
- `npm run db:studio` - Abrir Prisma Studio
- `npm run admin:create` - Criar usuário administrador
- `npm run content:seed` - Popular banco com conteúdo inicial

## 📱 Responsividade

O site foi desenvolvido com abordagem **mobile-first** mas otimizado para web:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Paleta de Cores

- **Primária**: Gradientes de azul e roxo (#3B82F6 → #9333EA)
- **Secundária**: Rosa e verde para acentos
- **Neutra**: Escala de cinza para texto e fundos
- **Tons suaves** para transmitir tranquilidade e profissionalismo

## 📧 Funcionalidades de Contato

- **Formulário integrado** com WhatsApp
- **Links diretos** para email e telefone
- **Horários de atendimento** claramente definidos
- **FAQ** com perguntas frequentes

## 🔧 Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm run start

# Verificar código (linting)
npm run lint
```

## 📂 Estrutura do Projeto

```
src/
├── app/                 # App Router do Next.js
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes React
│   ├── Header.tsx      # Cabeçalho/navegação
│   ├── Hero.tsx        # Seção hero
│   ├── About.tsx       # Sobre a Thalita
│   ├── Services.tsx    # Serviços oferecidos
│   ├── AccessBars.tsx  # Informações sobre Barras de Access
│   ├── Testimonials.tsx # Depoimentos de clientes
│   ├── Contact.tsx     # Formulário de contato
│   └── Footer.tsx      # Rodapé
└── ...
```

## 🔒 **Sistema Administrativo Seguro**

O site inclui um **painel administrativo completo** para a Thalita gerenciar todo o conteúdo:

### 🛡️ **Segurança Implementada**

- **Autenticação JWT** com tokens seguros
- **Criptografia bcrypt** para senhas (12 rounds)
- **Banco de dados SQLite** local (fácil de fazer backup)
- **Validação de permissões** em todas as rotas
- **Headers de segurança** implementados

### 👩‍💼 **Funcionalidades Admin**

- **Editar textos** - Títulos, descrições, botões
- **Gerenciar imagens** - Upload otimizado com Sharp
- **Personalizar cores** - Sistema de temas dinâmico
- **Controle total** do conteúdo sem código

### 🚀 **Acesso Administrativo**

**URL:** `http://localhost:3000/admin`

**Credenciais padrão:**

- **Email:** thalita@exemplo.com
- **Senha:** ThalitaAdmin2025!

> ⚠️ **IMPORTANTE:** Altere a senha após primeiro login!

### 📊 **Banco de Dados**

- **Usuários** - Sistema de autenticação
- **Conteúdo** - Textos dinâmicos do site
- **Mídia** - Imagens e arquivos

## 🎯 **Próximos Passos**

Para personalizar ainda mais o site:

1. **Substituir placeholders** de imagens por fotos reais
2. **Atualizar informações** de contato (telefone, email, endereço)
3. **Adicionar fotos** da Thalita e do ambiente de atendimento
4. **Integrar** com serviços de email marketing (opcional)
5. **Configurar** analytics para acompanhar visitantes

## 🤝 Suporte

Para dúvidas ou modificações no site, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para promover bem-estar e terapias holísticas**

## 🚀 Deploy na Vercel

### Preparação para Produção

1. **Configure o banco PostgreSQL:**

   ```bash
   # Na Vercel, adicione o Vercel Postgres ao seu projeto
   # Isso fornecerá automaticamente a DATABASE_URL
   ```

2. **Configure as variáveis de ambiente:**

   ```bash
   # No dashboard da Vercel, adicione:
   DATABASE_URL=postgresql://... (fornecida pelo Vercel Postgres)
   JWT_SECRET=sua-chave-jwt-super-secreta-aqui
   NEXTAUTH_SECRET=sua-chave-nextauth-aqui
   ```

3. **Gere chaves seguras:**
   ```bash
   # Para JWT_SECRET e NEXTAUTH_SECRET, use:
   openssl rand -base64 32
   ```

### Deploy Automático

1. **Conecte seu repositório à Vercel:**

   - Acesse [vercel.com](https://vercel.com)
   - Importe seu repositório GitHub
   - Configure as variáveis de ambiente

2. **Após o primeiro deploy:**

   ```bash
   # Execute os comandos de setup do banco:
   npx prisma db push
   npx prisma generate

   # Crie o usuário admin:
   npm run admin:create

   # Popule o conteúdo inicial:
   npm run content:seed
   ```

### Características do Deploy

- ✅ **Zero Configuração**: Next.js como fullstack
- ✅ **Banco PostgreSQL**: Vercel Postgres integrado
- ✅ **Upload de Imagens**: Funciona automaticamente
- ✅ **APIs Seguras**: JWT + bcrypt para autenticação
- ✅ **CDN Global**: Vercel Edge Network
- ✅ **HTTPS**: SSL automático
