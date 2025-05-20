import Header from "@/components/header"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16 px-6 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Combatendo a Xanthomonas Phaseolii</h1>
            <p className="text-lg mb-8">
              Desenvolvemos soluções tecnológicas para auxiliar produtores de mandioca no combate eficiente à
              Xanthomonas Phaseolii, protegendo suas plantações e garantindo maior produtividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cadastro"
                className="bg-black text-white px-6 py-3 rounded-md font-medium text-center hover:bg-gray-800 transition-colors"
              >
                Cadastre-se
              </Link>
              <Link
                href="/sobre"
                className="bg-white text-black px-6 py-3 rounded-md font-medium text-center hover:bg-gray-100 transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
          {/* iframe da pagina */}
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
              src="https://greenleafaxis.vercel.app/"
              title="Preview do Projeto"
              className="w-full h-full"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
            {/* fim do iframe */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Nosso Aplicativo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-dark p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Diagnóstico Rápido</h3>
              <p className="text-center">
                Identifique rapidamente os sinais da doença através de nossa tecnologia de reconhecimento de imagem.
              </p>
            </div>
            <div className="bg-dark p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Recomendações Personalizadas</h3>
              <p className="text-center">
                Receba orientações específicas para o tratamento baseadas nas condições da sua plantação.
              </p>
            </div>
            <div className="bg-dark p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Monitoramento Contínuo</h3>
              <p className="text-center">
                Acompanhe a evolução da sua plantação e a eficácia dos tratamentos aplicados ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 px-6 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-lg mb-8">
            Junte-se a outros produtores que já estão utilizando nossa tecnologia para proteger suas plantações.
          </p>
          <Link
            href="/cadastro"
            className="bg-black text-white px-8 py-3 rounded-md font-medium inline-block hover:bg-gray-800 transition-colors"
          >
            Cadastre-se Gratuitamente
          </Link>
        </div>
      </section>

      <footer className="bg-primary py-4 px-6 text-black text-center">
        <p>&copy; {new Date().getFullYear()} Axis Team - Todos os direitos reservados</p>
      </footer>
    </main>
  )
}
