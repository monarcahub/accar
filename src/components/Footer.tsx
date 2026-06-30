import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_CONFIG } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-16">
          {/* Logo & Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <img 
                src="https://i.ibb.co/NdScRMt6/logo-accar-site-fundo-escuro.png" 
                alt="A. C. CAR Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 font-light mb-8 leading-relaxed">
              Sua oficina especializada Bosch em Santo André. Precisão técnica e confiança desde 1985.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-bosch-blue transition-colors group">
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-bosch-blue transition-colors group">
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-bosch-blue transition-colors group">
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-bosch-cyan">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <Phone className="text-bosch-cyan flex-shrink-0 mt-1" size={20} />
                <a href={`tel:${APP_CONFIG.phone1}`} className="text-gray-400 group-hover:text-white transition-colors">
                  {APP_CONFIG.phone1} <br /> {APP_CONFIG.phone2}
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <svg className="text-bosch-cyan flex-shrink-0 mt-1 w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.945 9.945 0 0 0 4.881 1.28c5.505 0 9.988-4.478 9.989-9.984a9.979 9.979 0 0 0-9.988-9.949zm5.836 14.193c-.24.675-1.385 1.287-1.905 1.36-.47.066-.94.12-2.734-.621-2.29-.949-3.766-3.284-3.88-3.434-.114-.15-1.01-1.347-1.01-2.567 0-1.22.637-1.819.865-2.051.228-.232.496-.29.662-.29.165 0 .331.001.475.006.148.006.347-.057.545.415.2.483.682 1.66.742 1.777.06.119.099.256.02.415-.08.158-.12.257-.24.397-.12.139-.25.312-.357.417-.119.119-.243.25-.104.487.139.237.615 1.012 1.317 1.637.904.803 1.66 1.053 1.892 1.171.232.119.367.101.505-.058.139-.158.595-.694.754-.933.158-.238.317-.198.535-.119.218.079 1.385.653 1.624.772.238.119.396.178.455.277.06.1.06.574-.18 1.248z"/>
                </svg>
                <a href={`https://wa.me/5511998345447`} target="_blank" rel="noopener noreferrer" className="text-gray-400 group-hover:text-white transition-colors">
                  WhatsApp: (11) 99834-5447
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <Mail className="text-bosch-cyan flex-shrink-0 mt-1" size={20} />
                <a href={`mailto:${APP_CONFIG.email}`} className="text-gray-400 group-hover:text-white transition-colors break-all">
                  {APP_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="text-bosch-cyan flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">{APP_CONFIG.hours}</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-bosch-cyan flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">{APP_CONFIG.address}</span>
              </li>
            </ul>
          </div>

          {/* Shortcuts */}
          <div className="col-span-1 lg:col-span-1">
             <h3 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-bosch-cyan">Atalhos</h3>
             <ul className="space-y-4">
                {[
                  { name: 'Empresa', href: '/empresa' },
                  { name: 'Serviços', href: '/servicos' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Contato', href: '/contato' },
                  { name: 'Agendar', href: APP_CONFIG.bookingUrl, external: true }
                ].map(item => (
                  <li key={item.name}>
                    {item.external ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors"
                      >
                        <ChevronRight size={14} className="text-bosch-cyan group-hover:translate-x-1 transition-transform" />
                        {item.name}
                      </a>
                    ) : (
                      <Link to={item.href} className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                        <ChevronRight size={14} className="text-bosch-cyan group-hover:translate-x-1 transition-transform" />
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
             </ul>
          </div>

          {/* Map */}
          <div className="col-span-1 lg:col-span-1">
            <div className="w-full h-full min-h-[200px] bg-white/5 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 p-1">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.512613532729!2d-46.529888923759325!3d-23.65751897873322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42e0a2939335%3A0xc39f28d8ed692cc3!2sAv.%20Estados%20Unidos%2C%20936%20-%20Parque%20das%20Na%C3%A7%C3%B5es%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009210-300!5e0!3m2!1spt-BR!2sbr!4v1713750000000!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0 rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} A. C. CAR Automecânica. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">
            <span>Políticas de Privacidade</span>
            <span>
              Desenvolvido por{" "}
              <a 
                href="https://monarcahub.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-bosch-cyan transition-colors"
              >
                MonarcaHub
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
