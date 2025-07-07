import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialContent = [
  // Hero Section
  {
    section: "hero",
    field: "title",
    value: "Desperte seu Potencial Interior",
    type: "text",
  },
  {
    section: "hero",
    field: "subtitle",
    value:
      "Sou Thalita, terapeuta especializada em Barras de Access. Ajudo você a liberar limitações, reduzir stress e criar uma vida mais leve e consciente.",
    type: "text",
  },
  {
    section: "hero",
    field: "cta_primary",
    value: "Agendar Primeira Sessão",
    type: "text",
  },
  {
    section: "hero",
    field: "cta_secondary",
    value: "Conhecer Barras de Access",
    type: "text",
  },

  // About Section
  { section: "about", field: "title_part1", value: "Conheça a", type: "text" },
  { section: "about", field: "title_part2", value: "Thalita", type: "text" },
  {
    section: "about",
    field: "intro",
    value:
      "Olá! Sou terapeuta holística especializada em Barras de Access, uma técnica revolucionária que ajuda a liberar limitações mentais e emocionais acumuladas ao longo da vida.",
    type: "text",
  },
  {
    section: "about",
    field: "journey",
    value:
      "Minha jornada começou quando descobri o poder transformador das terapias energéticas. Desde então, dedico-me a ajudar pessoas a encontrarem mais leveza, clareza e possibilidades em suas vidas.",
    type: "text",
  },
  {
    section: "about",
    field: "mission",
    value:
      "Acredito que todos merecem viver com mais paz interior, menos ansiedade e maior conexão com seu verdadeiro potencial. É isso que busco proporcionar em cada sessão.",
    type: "text",
  },
  {
    section: "about",
    field: "certification_title",
    value: "Certificada",
    type: "text",
  },
  {
    section: "about",
    field: "certification_subtitle",
    value: "Access Bars Practitioner",
    type: "text",
  },
  {
    section: "about",
    field: "qualifications_title",
    value: "Formação e Certificações",
    type: "text",
  },
  {
    section: "about",
    field: "qual_1",
    value: "Certified Access Bars Practitioner",
    type: "text",
  },
  {
    section: "about",
    field: "qual_2",
    value: "Formação em Terapias Holísticas",
    type: "text",
  },
  {
    section: "about",
    field: "qual_3",
    value: "Especialização em Bem-estar Emocional",
    type: "text",
  },
  {
    section: "about",
    field: "qual_4",
    value: "Estudos em Consciência e Mindfulness",
    type: "text",
  },
  {
    section: "about",
    field: "cta_text",
    value: "Conversar com a Thalita",
    type: "text",
  },

  // Services Section
  { section: "services", field: "title", value: "Meus Serviços", type: "text" },
  {
    section: "services",
    field: "subtitle",
    value:
      "Ofereço diferentes modalidades terapêuticas para atender suas necessidades específicas de bem-estar e desenvolvimento pessoal.",
    type: "text",
  },

  // Access Bars Section
  {
    section: "barras_access",
    field: "title",
    value: "O que são as Barras de Access?",
    type: "text",
  },
  {
    section: "barras_access",
    field: "subtitle",
    value:
      "Uma técnica suave que libera limitações mentais e emocionais através de toques específicos em 32 pontos na cabeça, promovendo relaxamento profundo e expansão da consciência.",
    type: "text",
  },

  // Contact Section
  {
    section: "contact",
    field: "title_part1",
    value: "Vamos Conversar",
    type: "text",
  },
  {
    section: "contact",
    field: "title_part2",
    value: "sobre Você",
    type: "text",
  },
  {
    section: "contact",
    field: "subtitle",
    value:
      "Estou aqui para ajudá-la em sua jornada de bem-estar. Entre em contato e vamos agendar sua primeira sessão.",
    type: "text",
  },
  {
    section: "contact",
    field: "form_title",
    value: "Agendar Consulta",
    type: "text",
  },
  {
    section: "contact",
    field: "form_submit",
    value: "Enviar via WhatsApp",
    type: "text",
  },
  {
    section: "contact",
    field: "therapist_name",
    value: "Thalita",
    type: "text",
  },
  {
    section: "contact",
    field: "whatsapp_number",
    value: "5511999999999",
    type: "text",
  },
  {
    section: "contact",
    field: "whatsapp_display",
    value: "(11) 99999-9999",
    type: "text",
  },
  {
    section: "contact",
    field: "email",
    value: "thalita@exemplo.com",
    type: "text",
  },
  {
    section: "contact",
    field: "location",
    value: "São Paulo, SP",
    type: "text",
  },
  {
    section: "contact",
    field: "direct_contact_title",
    value: "Contato Direto",
    type: "text",
  },
  {
    section: "contact",
    field: "hours_title",
    value: "Horários de Atendimento",
    type: "text",
  },
  {
    section: "contact",
    field: "weekdays_hours",
    value: "9h às 18h",
    type: "text",
  },
  {
    section: "contact",
    field: "saturday_hours",
    value: "9h às 14h",
    type: "text",
  },
  { section: "contact", field: "sunday_hours", value: "Fechado", type: "text" },
  {
    section: "contact",
    field: "appointment_note",
    value: "Atendimento apenas com agendamento prévio.",
    type: "text",
  },

  // Colors
  { section: "colors", field: "primary", value: "#3B82F6", type: "color" },
  { section: "colors", field: "secondary", value: "#9333EA", type: "color" },
  { section: "colors", field: "accent", value: "#EC4899", type: "color" },
];

async function seedContent() {
  try {
    console.log("🌱 Iniciando população do banco com conteúdo inicial...");

    for (const content of initialContent) {
      await prisma.siteContent.upsert({
        where: {
          section_field: {
            section: content.section,
            field: content.field,
          },
        },
        update: {
          value: content.value,
          type: content.type,
          updatedAt: new Date(),
        },
        create: {
          section: content.section,
          field: content.field,
          value: content.value,
          type: content.type,
        },
      });
    }

    console.log("✅ Conteúdo inicial populado com sucesso!");
    console.log(
      `📝 ${initialContent.length} itens de conteúdo adicionados/atualizados`
    );
  } catch (error) {
    console.error("❌ Erro ao popular conteúdo:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedContent();
