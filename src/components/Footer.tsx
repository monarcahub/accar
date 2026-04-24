import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube, ChevronRight } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-16">
          {/* Logo & Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-bosch-blue flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h2 className="font-display font-bold text-xl">A. C. CAR</h2>
            </div>
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
                {['Empresa', 'Serviços', 'Agendar', 'Blog', 'Localização'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                      <ChevronRight size={14} className="text-bosch-cyan group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
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
            <span>Desenvolvido com Paixão</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
