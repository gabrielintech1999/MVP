import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="container mx-auto">
        {/* Direitos reservados */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MeuEcommerce. Todos os direitos reservados.
        </p>

        {/* Links de navegação */}
        <nav className="flex justify-center gap-4 mt-2 text-sm">
          <Link
            to="/sobre-nos"
            className="hover:text-gray-300 transition-colors"
          >
            Sobre Nós
          </Link>
          <Link
            to="/sobre-nos"
            className="hover:text-gray-300 transition-colors"
          >
            Termos e Condições
          </Link>
          <Link
            to="/sobre-nos"
            className="hover:text-gray-300 transition-colors"
          >
            Contactos
          </Link>
        </nav>

        {/* Redes Sociais */}
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

