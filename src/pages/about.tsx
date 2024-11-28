export default function AboutUsPage() {
    return (
      <div className="p-6 bg-gray-100 text-gray-900">
        {/* Cabeçalho */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600">Sobre Nós</h1>
          <p className="text-sm text-gray-700 mt-2">
            Conheça mais sobre nossa missão e o que nos motiva.
          </p>
        </header>
  
        {/* Conteúdo Principal */}
        <section className="max-w-3xl mx-auto space-y-6">
          {/* Missão */}
          <div>
            <h2 className="text-xl font-semibold">Nossa Missão</h2>
            <p className="mt-2 text-gray-700">
              Nosso objetivo é oferecer produtos de alta qualidade com preços
              acessíveis, proporcionando uma experiência de compra simples e
              eficiente. Trabalhamos para atender às necessidades de nossos
              clientes em Angola, com foco na excelência e no compromisso.
            </p>
          </div>
  
          {/* Valores */}
          <div>
            <h2 className="text-xl font-semibold">Nossos Valores</h2>
            <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
              <li>Transparência em tudo o que fazemos.</li>
              <li>Respeito pelos nossos clientes e comunidade.</li>
              <li>Compromisso com a qualidade e inovação.</li>
            </ul>
          </div>
  
          {/* História */}
          <div>
            <h2 className="text-xl font-semibold">Nossa História</h2>
            <p className="mt-2 text-gray-700">
              Fundado em 2024, nosso e-commerce nasceu com a visão de transformar
              o mercado online em Angola. Acreditamos no poder da tecnologia para
              conectar pessoas aos produtos que elas precisam, e estamos
              empenhados em crescer junto com nossa comunidade.
            </p>
          </div>
        </section>
  
        {/* Chamada à ação */}
        <div className="mt-10 text-center">
          <p className="text-gray-700">
            Quer saber mais? Entre em contato conosco pelo{" "}
            <a href="/contact" className="text-blue-500 hover:underline">
              formulário de contato
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
  