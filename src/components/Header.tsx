import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Empresa", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Blog", href: "#blog" },
    { name: "Agendar", href: APP_CONFIG.bookingUrl, external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={isScrolled ? "https://i.ibb.co/b5sDJvD7/logo-accar-site-fundo-branco.png" : "https://i.ibb.co/NdScRMt6/logo-accar-site-fundo-escuro.png"} 
            alt="A. C. CAR Logo" 
            className="h-12 md:h-16 w-auto transition-all duration-500"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`text-sm font-medium transition-colors hover:text-bosch-cyan ${
                isScrolled ? "text-dark" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${APP_CONFIG.whatsapp}`}
            className="bg-bosch-blue text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-bosch-blue/20 flex items-center gap-2"
          >
            <Phone size={16} />
            Orçar
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-dark" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-dark text-lg font-medium py-2 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`https://wa.me/${APP_CONFIG.whatsapp}`}
                className="bg-bosch-blue text-white text-center py-4 rounded-xl font-bold mt-4"
              >
                Orçar agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
