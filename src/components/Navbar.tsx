import { Link, NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const avatar = "https://avatars.githubusercontent.com/u/179443756?v=4";
  return (
    <>
      {/* <div className="bg-black text-red-600 text-center p-1 font-bold">Seja bem vindo ao Casa</div>
       */}

      <header className="bb-gray-300 px-4 pt-5 border  shadow-md fixed top-0 left-0 right-0 z-50 w-full bg-white">
        <div className="flex justify-between items-center mb-2">
          <div className="logo">
            <Link to="/">
              <img
                src={avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full border "
              />
            </Link>
          </div>
          <div>
            <Link to="/">
              <h1 className="font-bold text-4xl uppercase text-[#007782]">
                loja
              </h1>
            </Link>
          </div>
          <div className="relative">
            <Link to="/carinho-de-compras">
              <ShoppingBagIcon className="size-10 text-gray-700" />
            </Link>

            <NavLink
              to="/sacola-de-compras"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#007782]   rounded-full text-white text-center font-bold w-6 h-6 text-[10px]    absolute top-0 -right-2 flex justify-center items-center"
                  : " bg-red-600 rounded-full text-white text-center font-bold w-6 h-6 text-[10px]    absolute top-0 -right-2 flex justify-center items-center"
              }
            >
              15
            </NavLink>
          </div>
        </div>

        <form>
          <input
            type="search"
            name="pesquisa"
            id="pesquisa"
            placeholder="Buscar por produtos..."
            className="bg-[#F2F2F2] border-none  "
          />
        </form>

        <nav>
          <ul className="border-b-gray-300 flex gap-4">
            <li className="py-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#007782]"
                    : "text-gray-700 inline-block"
                }
              >
                Produtos
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="/facturacao"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#007782]"
                    : "text-gray-700 inline-block"
                }
              >
                Facturação
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="/sobre-nos"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#007782]"
                    : "text-gray-700 inline-block"
                }
              >
                Sobre Nós
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
