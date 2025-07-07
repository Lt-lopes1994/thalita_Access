import Link from "next/link";

export const metadata = {
  title: "Termos de Uso - Thalita Terapias",
  description: "Termos e condições de uso dos serviços da Thalita Terapias",
};

export default function TermsOfService() {
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
            Termos de Uso
          </h1>
          <p className="text-gray-600">
            Última atualização: 7 de julho de 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ao utilizar os serviços da Thalita Terapias, você concorda em
              cumprir estes Termos de Uso. Se não concordar com qualquer parte
              destes termos, não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Descrição dos Serviços
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                A Thalita Terapias oferece serviços de terapias holísticas,
                incluindo:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Barras de Access</li>
                <li>Terapias holísticas complementares</li>
                <li>Consultas de bem-estar</li>
                <li>Orientação para desenvolvimento pessoal</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Importante:</strong> Nossos serviços são
                  complementares e não substituem tratamentos médicos
                  convencionais. Sempre consulte um médico para questões de
                  saúde.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Agendamento e Cancelamento
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3.1 Agendamento
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Agendamentos devem ser feitos com antecedência mínima de 24
                    horas
                  </li>
                  <li>Confirmação será enviada por WhatsApp ou email</li>
                  <li>
                    Pontualidade é essencial para o aproveitamento total da
                    sessão
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3.2 Cancelamento
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Cancelamentos devem ser feitos com 24 horas de antecedência
                  </li>
                  <li>
                    Cancelamentos com menos de 24 horas podem estar sujeitos a
                    cobrança
                  </li>
                  <li>Em caso de emergência, entre em contato imediatamente</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Pagamento
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pagamento deve ser realizado no dia da sessão</li>
              <li>Aceitamos dinheiro, PIX e cartões</li>
              <li>Valores são confirmados no momento do agendamento</li>
              <li>Não há reembolso para sessões já realizadas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Responsabilidades do Cliente
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fornecer informações precisas sobre seu estado de saúde</li>
              <li>Comunicar qualquer desconforto durante a sessão</li>
              <li>
                Informar sobre medicações ou tratamentos médicos em andamento
              </li>
              <li>Seguir as orientações dadas durante e após as sessões</li>
              <li>Manter confidencialidade sobre outros clientes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Contraindicações
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Informe se você possui alguma das seguintes condições:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Gravidez</li>
              <li>Problemas cardíacos graves</li>
              <li>Transtornos psiquiátricos em tratamento</li>
              <li>Uso de medicações psiquiátricas</li>
              <li>Histórico de convulsões</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Confidencialidade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Todas as informações compartilhadas durante as sessões são
              estritamente confidenciais e protegidas pelo sigilo profissional.
              Não divulgamos informações pessoais sem autorização expressa,
              exceto quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Limitação de Responsabilidade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As terapias oferecidas visam promover bem-estar e relaxamento. Os
              resultados podem variar entre indivíduos. A Thalita Terapias não
              se responsabiliza por resultados específicos ou por reações
              adversas não comunicadas previamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Uso do Site
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>O conteúdo do site é apenas para fins informativos</li>
              <li>É proibido usar o site para fins ilegais ou prejudiciais</li>
              <li>
                Respeitamos todos os direitos autorais e marcas registradas
              </li>
              <li>
                Reservamo-nos o direito de modificar o site a qualquer momento
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Modificações dos Termos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Estes termos podem ser atualizados periodicamente. Mudanças
              significativas serão comunicadas através do site ou por contato
              direto. O uso continuado dos serviços após mudanças constitui
              aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Lei Aplicável
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Estes termos são regidos pela legislação brasileira. Qualquer
              disputa será resolvida nos tribunais competentes do Brasil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para dúvidas sobre estes termos ou nossos serviços:
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p>
                <strong>Email:</strong> thalita@exemplo.com
              </p>
              <p>
                <strong>WhatsApp:</strong> (11) 99999-9999
              </p>
              <p>
                <strong>Atendimento:</strong> Segunda a Sexta, 9h às 18h
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
