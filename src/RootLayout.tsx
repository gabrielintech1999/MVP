import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="min-h-screen pt-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
