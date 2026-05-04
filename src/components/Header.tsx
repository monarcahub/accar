import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/", anchor: "#" },
    { name: "Empresa", href: "/empresa", anchor: "#sobre" },
    { name: "Serviços", href: "/servicos", anchor: "#servicos" },
    { name: "Blog", href: "/blog", anchor: "#blog" },
    { name: "Contato", href: "/contato", anchor: "#contato" },
  ].filter(link => {
    if (pathname === "/" && link.name === "Contato") return false;
    return true;
  });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, anchor: string) => {
    if (pathname === "/" && anchor.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(anchor.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  const isDarkText = isScrolled || pathname !== "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={(e) => handleLinkClick(e, "/", "#")} className="flex items-center gap-2">
          <img 
            src={isDarkText ? "https://i.ibb.co/b5sDJvD7/logo-accar-site-fundo-branco.png" : "https://i.ibb.co/NdScRMt6/logo-accar-site-fundo-escuro.png"} 
            alt="A. C. CAR Logo" 
            className="h-12 md:h-16 w-auto transition-all duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.anchor)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-bosch-cyan ${
                isDarkText ? "text-dark" : "text-white"
              } ${pathname === link.href ? "text-bosch-cyan" : ""}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-bosch-cyan ${
               isDarkText ? "text-dark" : "text-white"
            }`}
            href={APP_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${APP_CONFIG.whatsapp}`}
            className="bg-bosch-blue text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-bosch-blue/20 flex items-center gap-2"
          >
            <Phone size={14} />
            Orçar
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${isDarkText ? "text-dark" : "text-white"}`}
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
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.anchor)}
                  className={`text-dark text-lg font-bold py-2 border-b border-gray-100 ${pathname === link.href ? "text-bosch-cyan" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={APP_CONFIG.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark text-lg font-bold py-2 border-b border-gray-100"
              >
                Agendar
              </a>
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
