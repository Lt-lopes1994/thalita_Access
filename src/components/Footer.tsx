import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-semibold">Thalita Terapias</span>
              </Link>

              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Especialista em Barras de Access e terapias holísticas. Ajudo
                pessoas a encontrarem mais leveza, clareza e bem-estar em suas
                vidas através de técnicas comprovadas e acolhimento genuíno.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>

                <a
                  href="mailto:thalita@exemplo.com"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>

                <a
                  href="https://instagram.com/thalita_terapias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988 6.62 0 11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.295C3.95 14.81 3.017 13.45 3.017 11.987c0-2.909 2.379-5.263 5.305-5.263 1.297 0 2.448.49 3.323 1.295 1.176.883 2.109 2.243 2.109 3.706 0 2.909-2.379 5.263-5.305 5.263zm11.27-2.509c-.883 1.176-2.243 2.109-3.706 2.109-2.909 0-5.263-2.379-5.263-5.305 0-1.297.49-2.448 1.295-3.323.883-1.176 2.243-2.109 3.706-2.109 2.909 0 5.263 2.379 5.263 5.305 0 1.297-.49 2.448-1.295 3.323z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#sobre"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sobre a Thalita
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicos"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="#barras-access"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Barras de Access
                  </Link>
                </li>
                <li>
                  <Link
                    href="#depoimentos"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Barras de Access</li>
                <li className="text-gray-400">Terapia Holística</li>
                <li className="text-gray-400">Consulta de Bem-estar</li>
                <li className="text-gray-400">Atendimento Online</li>
                <li className="text-gray-400">Sessões Presenciais</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Thalita Terapias. Todos os direitos reservados.
            </div>

            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacidade"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong>Importante:</strong> As terapias holísticas e Barras de
              Access não substituem tratamentos médicos convencionais. Sempre
              consulte um médico para questões de saúde. Os resultados podem
              variar de pessoa para pessoa. Este site foi criado apenas para
              fins educacionais e informativos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
