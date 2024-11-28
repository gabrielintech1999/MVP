import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import RootLayout from "./RootLayout";
import ProductDetail from "./pages/ProductDetail";
import AboutUsPage from "./pages/about";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/sobre-nos" element={<AboutUsPage />} />
          <Route path="/:id/:productName" element={<ProductDetail />} />
          <Route path="/carinho-de-compras" element={<CartPage />} />
          <Route path="/facturacao" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// <li><Link to="/">Home</Link></li>
// <li><Link to="/carinho-de-compras">Carinho de compras </Link></li>
// <li><Link to="/facturacao">facturação</Link></li>
