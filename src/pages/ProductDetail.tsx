import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/hooks";

export default function ProductDetailPage() {
  const { id, productName } = useParams();

  const { data: product, isLoading, error } = useProduct(id);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Card container */}
      <article className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden border">
        {/* Image section */}
        <div className="md:w-1/2 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {product.name}
            </h2>
            <p className="text-gray-700 text-lg mb-2">
              Categoria:{" "}
              <span className="text-gray-900">{product.category}</span>
            </p>
            <p className="text-xl text-green-600 font-semibold mb-4">
              Kz {product.price.toLocaleString("pt-ao")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action button */}
          <div className="mt-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition duration-200">
              <span className="material-icons">Comprar</span>

            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
