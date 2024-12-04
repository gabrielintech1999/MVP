import { Link } from "react-router-dom";
import { useProducts } from "../hooks/hooks";
import { Product } from "../types/type";

export default function HomePage() {
  const { data: products, isLoading, error } = useProducts();


  console.log(products);

  const urlBannerImage =
    "https://media.istockphoto.com/id/1413950709/photo/young-afro-woman-using-mobile-phone-at-coffee-shop.jpg?s=1024x1024&w=is&k=20&c=bTYbxmyfRtOt8ZXen5jDw835fi1YCWh6OziUtNFivLI=";

  // Placeholder para produtos
  if (isLoading) {
    return (
      <div>
        <div>
          <img
            src={urlBannerImage}
            alt="banner-home"
            className="w-full h-[100%] object-cover"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-100 animate-pulse flex flex-col"
            >
              {/* Placeholder da imagem */}
              <div className="w-full h-40 bg-gray-300"></div>
              {/* Placeholder do conteúdo */}
              <div className="p-4">
                <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-center">
          <p className="text-3xl text-red-600 font-semibold">😢</p>
          <p className="mt-2 text-lg text-gray-700">
            Não conseguimos carregar os produtos.
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Tente novamente clicando no botão abaixo.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <img
          src={urlBannerImage}
          alt="banner-home"
          className="w-full h-[100%] object-cover"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product: Product) => (
          <article
            key={product.id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white flex flex-col"
          >
            {/* Imagem do Produto */}
            <Link
              className="block flex-grow"
              to={`/${product.id}/${product.name}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
              />
            </Link>

            {/* Informações do Produto */}
            <div className="p-4">
              <h2 className="text-sm font-medium text-gray-900 truncate">
                {product.name}
              </h2>
              <p className="text-gray-700 text-sm mt-1">Kz {product.price}</p>

              {/* Botão de Adicionar à Sacola */}
              <button
                className="mt-3 flex items-center justify-center gap-2 bg-[#007782] text-white py-1 px-3 rounded-md text-sm hover:bg-green-600 transition-colors"
              >
                Comprar
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
