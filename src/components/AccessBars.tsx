export default function AccessBars() {
  return (
    <section
      id="barras-access"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              O que são as
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Barras de Access?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma técnica suave que libera limitações mentais e emocionais
              através de toques específicos em 32 pontos na cabeça, promovendo
              relaxamento profundo e expansão da consciência.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Illustration */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  {/* Head illustration placeholder */}
                  <div className="text-center text-gray-500">
                    <div className="w-48 h-48 mx-auto mb-4 relative">
                      {/* Simple head outline */}
                      <div className="w-full h-full border-4 border-purple-300 rounded-full relative">
                        {/* Points representing the bars */}
                        <div className="absolute top-4 left-1/2 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
                        <div className="absolute top-8 left-6 w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="absolute top-8 right-6 w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="absolute top-16 left-4 w-3 h-3 bg-pink-500 rounded-full"></div>
                        <div className="absolute top-16 right-4 w-3 h-3 bg-pink-500 rounded-full"></div>
                        <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2"></div>
                      </div>
                    </div>
                    <p className="text-sm">32 Pontos de Access Bars</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Como Funciona a Terapia?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Durante a sessão, toco suavemente pontos específicos na sua
                  cabeça que correspondem a diferentes áreas da vida como
                  dinheiro, controle, criatividade, corpo, sexualidade, alegria
                  e tristeza.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Relaxamento Profundo
                    </h4>
                    <p className="text-gray-600">
                      O toque libera cargas elétricas armazenadas nos pontos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Liberação de Limitações
                    </h4>
                    <p className="text-gray-600">
                      Crenças limitantes e padrões mentais são dissolvidos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Expansão da Consciência
                    </h4>
                    <p className="text-gray-600">
                      Maior clareza e possibilidades surgem naturalmente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Benefícios das Barras de Access
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Redução do Stress
                </h4>
                <p className="text-gray-600 text-sm">
                  Diminui ansiedade e tensões acumuladas
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Maior Clareza Mental
                </h4>
                <p className="text-gray-600 text-sm">
                  Pensamentos mais organizados e focados
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Bem-estar Emocional
                </h4>
                <p className="text-gray-600 text-sm">
                  Equilíbrio emocional e paz interior
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Mais Energia
                </h4>
                <p className="text-gray-600 text-sm">
                  Vitalidade e disposição renovadas
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Criatividade
                </h4>
                <p className="text-gray-600 text-sm">
                  Desbloqueio do potencial criativo
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m12 6h-1a3 3 0 000-6h-1m-5-4v20"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Melhor Sono
                </h4>
                <p className="text-gray-600 text-sm">
                  Qualidade do sono significativamente melhor
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="#contato"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Experimentar uma Sessão
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
