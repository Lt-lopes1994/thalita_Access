export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      age: 34,
      location: "São Paulo, SP",
      text: "As sessões com a Thalita transformaram minha vida. Há meses sofria com ansiedade e stress do trabalho. Após algumas sessões de Barras de Access, sinto uma leveza que não experimentava há anos. Durmo melhor e tenho mais clareza nas decisões.",
      service: "Barras de Access",
      rating: 5,
    },
    {
      name: "João Santos",
      age: 28,
      location: "Rio de Janeiro, RJ",
      text: "Estava passando por um momento difícil de transição na carreira. A Thalita me ajudou não só com as Barras de Access, mas também com orientações que me deram coragem para seguir meus sonhos. Hoje sou empreendedor e mais feliz.",
      service: "Terapia Holística",
      rating: 5,
    },
    {
      name: "Ana Oliveira",
      age: 45,
      location: "Belo Horizonte, MG",
      text: "Como mãe de três filhos, estava sempre esgotada. As sessões me trouxeram uma energia renovada e paciência que eu não sabia que podia ter. Recomendo para todas as mães que se sentem sobrecarregadas.",
      service: "Consulta de Bem-estar",
      rating: 5,
    },
    {
      name: "Pedro Costa",
      age: 52,
      location: "Brasília, DF",
      text: "Executivo há 20 anos, nunca havia experimentado terapias alternativas. A Thalita me mostrou um mundo novo. As Barras de Access me ajudaram a ter mais foco no trabalho e mais presença com a família.",
      service: "Barras de Access",
      rating: 5,
    },
    {
      name: "Carla Rodrigues",
      age: 31,
      location: "Porto Alegre, RS",
      text: "Estava com bloqueios criativos no meu trabalho como designer. Após as sessões, minha criatividade fluiu de uma forma incrível. Consegui fazer projetos que nem imaginava ser capaz. Gratidão eterna!",
      service: "Terapia Holística",
      rating: 5,
    },
    {
      name: "Ricardo Lima",
      age: 39,
      location: "Salvador, BA",
      text: "Tinha dificuldades de relacionamento e autoestima baixa. A Thalita, com sua abordagem amorosa, me ajudou a me reconectar comigo mesmo. Hoje tenho relacionamentos mais saudáveis e me valorizo mais.",
      service: "Consulta de Bem-estar",
      rating: 5,
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              O que dizem sobre
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                nosso trabalho
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Histórias reais de transformação e bem-estar das pessoas que
              confiaram no poder das Barras de Access e terapias holísticas.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-600 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Service Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Author Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}, {testimonial.age}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Pessoas Atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">3+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  24h
                </div>
                <div className="text-gray-600">Suporte Pós-Sessão</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronta para sua transformação?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Junte-se a centenas de pessoas que já descobriram o poder
                transformador das Barras de Access e terapias holísticas.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Agendar Minha Primeira Sessão
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
    </section>
  );
}
