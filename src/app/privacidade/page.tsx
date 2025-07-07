import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade - Thalita Terapias",
  description:
    "Política de privacidade e proteção de dados pessoais da Thalita Terapias",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar ao site
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-gray-600">
            Última atualização: 7 de julho de 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Informações Gerais
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidade descreve como a Thalita Terapias
              coleta, usa e protege suas informações pessoais quando você
              utiliza nosso site ou serviços terapêuticos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Informações que Coletamos
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2.1 Informações Fornecidas por Você
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nome completo</li>
                  <li>Endereço de email</li>
                  <li>Número de telefone</li>
                  <li>Informações de saúde relevantes para o tratamento</li>
                  <li>Histórico de sessões e progresso terapêutico</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2.2 Informações Coletadas Automaticamente
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Dados de navegação no site</li>
                  <li>Endereço IP</li>
                  <li>Tipo de dispositivo e navegador</li>
                  <li>Cookies essenciais para funcionamento do site</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Como Usamos suas Informações
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fornecer e personalizar nossos serviços terapêuticos</li>
              <li>Agendar e confirmar consultas</li>
              <li>Manter registros de tratamento seguros</li>
              <li>Comunicar sobre seus agendamentos e cuidados</li>
              <li>Melhorar nossos serviços e site</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Compartilhamento de Informações
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais
              com terceiros, exceto nas seguintes situações:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Com seu consentimento explícito</li>
              <li>Para cumprir obrigações legais</li>
              <li>Em situações de emergência de saúde</li>
              <li>
                Com profissionais de saúde envolvidos em seu cuidado (com
                autorização)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Segurança dos Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para
              proteger suas informações pessoais contra acesso não autorizado,
              alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Seus Direitos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De acordo com a LGPD, você tem os seguintes direitos:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de dados</li>
              <li>Revogar consentimento</li>
              <li>Portabilidade dos dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Retenção de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mantemos suas informações pelo tempo necessário para fornecer
              nossos serviços e cumprir obrigações legais. Registros de
              tratamento são mantidos conforme exigido pelos conselhos
              profissionais de saúde.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para questões sobre esta política ou seus dados pessoais, entre em
              contato:
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p>
                <strong>Email:</strong> thalita@exemplo.com
              </p>
              <p>
                <strong>WhatsApp:</strong> (11) 99999-9999
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Alterações na Política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Esta política pode ser atualizada periodicamente. Notificaremos
              sobre mudanças significativas através do site ou por email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
