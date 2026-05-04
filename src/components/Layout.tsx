import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen relative font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
