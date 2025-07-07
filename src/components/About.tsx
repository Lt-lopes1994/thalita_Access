import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for Thalita's photo */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">T</span>
                    </div>
                    <p>Foto da Thalita</p>
                    <p className="text-sm">
                      (Substitua esta área com uma foto profissional)
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    Certificada
                  </div>
                  <div className="text-gray-600 text-sm">
                    Access Bars Practitioner
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Conheça a
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                    Thalita
                  </span>
                </h2>

                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Olá! Sou terapeuta holística especializada em{" "}
                    <strong>Barras de Access</strong>, uma técnica
                    revolucionária que ajuda a liberar limitações mentais e
                    emocionais acumuladas ao longo da vida.
                  </p>

                  <p>
                    Minha jornada começou quando descobri o poder transformador
                    das terapias energéticas. Desde então, dedico-me a ajudar
                    pessoas a encontrarem mais leveza, clareza e possibilidades
                    em suas vidas.
                  </p>

                  <p>
                    Acredito que todos merecem viver com mais paz interior,
                    menos ansiedade e maior conexão com seu verdadeiro
                    potencial. É isso que busco proporcionar em cada sessão.
                  </p>
                </div>
              </div>

              {/* Qualifications */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Formação e Certificações
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Certified Access Bars Practitioner
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Formação em Terapias Holísticas
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Especialização em Bem-estar Emocional
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Estudos em Consciência e Mindfulness
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="#contato"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Conversar com a Thalita
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
        </div>
      </div>
    </section>
  );
}
