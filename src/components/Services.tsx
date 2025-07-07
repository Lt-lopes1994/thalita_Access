export default function Services() {
  const services = [
    {
      title: "Barras de Access",
      description:
        "Técnica que libera limitações através de 32 pontos na cabeça",
      duration: "60 minutos",
      benefits: [
        "Redução do stress e ansiedade",
        "Maior clareza mental",
        "Liberação de crenças limitantes",
        "Relaxamento profundo",
      ],
      color: "purple",
    },
    {
      title: "Terapia Holística",
      description:
        "Abordagem integrativa para bem-estar físico, mental e emocional",
      duration: "90 minutos",
      benefits: [
        "Equilíbrio energético",
        "Harmonização dos chakras",
        "Alívio de tensões corporais",
        "Desenvolvimento pessoal",
      ],
      color: "blue",
    },
    {
      title: "Consulta de Bem-estar",
      description:
        "Orientação personalizada para sua jornada de autoconhecimento",
      duration: "45 minutos",
      benefits: [
        "Orientação personalizada",
        "Plano de bem-estar individual",
        "Técnicas de mindfulness",
        "Suporte emocional",
      ],
      color: "pink",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: "from-purple-500 to-purple-600",
        icon: "bg-purple-100 text-purple-600",
        border: "border-purple-200",
      },
      blue: {
        bg: "from-blue-500 to-blue-600",
        icon: "bg-blue-100 text-blue-600",
        border: "border-blue-200",
      },
      pink: {
        bg: "from-pink-500 to-pink-600",
        icon: "bg-pink-100 text-pink-600",
        border: "border-pink-200",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meus
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Serviços
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofereço diferentes modalidades terapêuticas para atender suas
              necessidades específicas de bem-estar e desenvolvimento pessoal.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl border ${colorClasses.border} overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${colorClasses.bg} p-6 text-white`}
                  >
                    <div
                      className={`w-12 h-12 ${colorClasses.icon} rounded-full flex items-center justify-center mb-4`}
                    >
                      <svg
                        className="w-6 h-6"
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
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Duration */}
                    <div className="flex items-center mb-6">
                      <svg
                        className="w-5 h-5 text-gray-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Duração: {service.duration}
                      </span>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Benefícios:
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <a
                      href="#contato"
                      className={`block w-full text-center bg-gradient-to-r ${colorClasses.bg} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Agendar Sessão
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Não sabe qual serviço escolher?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Vamos conversar! Posso ajudá-la a escolher a melhor abordagem
                terapêutica para suas necessidades específicas.
              </p>
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
