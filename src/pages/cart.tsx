import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function CartPage() {
  const image =
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between gap-4 p-4">
        <h1 className="text-2xl font-bold">Sacola de compras</h1>
        <p className="text-xl font-bold">5 Itens</p>
      </div>
      <div className=" flex flex-col gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <article
            className="flex gap-8 p-4 items-center bg-[#F9FAFB]"
            key={index}
          >
            <div className="flex gap-4 items-center ">
              <div className="border rounded w-20 h-28 overflow-hidden">
                <img src={image} alt="Batom Matte Longa Duração" />
              </div>
              <div>
                <h2>Batom Matte</h2>
                <p>
                  <span>
                    <b className="inline-block">Kz 1500,00</b>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-4 font-bold text-xl w-1/3">
              <button>-</button>
              <button>1</button>
              <button>+</button>
              <button className=" text-white p-2 rounded-md font-bold">
                <TrashIcon className="size-6 text-red-700" />
              </button>
            </div>
          </article>
        ))}

        <div className="mt-20">
          <h1>
            Valor Total da compra: <b>R$ 14.900,00</b>
          </h1>
          <Link
            to="/facturacao"
            className="bg-blue-500 text-white p-2 rounded-md inline-block w-full text-center"
          >
            Finalizar a compra
          </Link>
        </div>
      </div>
    </div>
  );
}
