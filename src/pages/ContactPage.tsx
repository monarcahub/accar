import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-bosch-cyan font-bold uppercase tracking-widest text-sm mb-4 block">Fale Conosco</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-8">
            Estamos Prontos para <span className="text-bosch-blue">Ajudar</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-xl font-display font-bold text-dark mb-6 flex items-center gap-3">
                <Phone className="text-bosch-cyan" /> Telefones
              </h3>
              <p className="text-gray-600 text-lg">{APP_CONFIG.phone1}</p>
              <p className="text-gray-600 text-lg">{APP_CONFIG.phone2}</p>
            </div>

            <div>
              <h3 className="text-xl font-display font-bold text-dark mb-6 flex items-center gap-3">
                <Mail className="text-bosch-cyan" /> E-mail
              </h3>
              <p className="text-gray-600 text-lg break-all">{APP_CONFIG.email}</p>
            </div>

            <div>
              <h3 className="text-xl font-display font-bold text-dark mb-6 flex items-center gap-3">
                <Clock className="text-bosch-cyan" /> Horário
              </h3>
              <p className="text-gray-600 text-lg">{APP_CONFIG.hours}</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-100 rounded-[40px] p-8 md:p-12">
               <h3 className="text-2xl font-display font-bold text-dark mb-8">Como chegar</h3>
               <div className="flex items-start gap-4 mb-8">
                 <MapPin className="text-bosch-cyan flex-shrink-0 mt-1" />
                 <p className="text-gray-600 text-lg">{APP_CONFIG.address}</p>
               </div>
               <div className="rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-[300px]">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.512613532729!2d-46.529888923759325!3d-23.65751897873322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42e0a2939335%3A0xc39f28d8ed692cc3!2sAv.%20Estados%20Unidos%2C%20936%20-%20Parque%20das%20Na%C3%A7%C3%B5es%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009210-300!5e0!3m2!1spt-BR!2sbr!4v1713750000000!5m2!1spt-BR!2sbr" 
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
               </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
           <a 
            href={`https://wa.me/${APP_CONFIG.whatsapp}`}
            className="flex items-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform"
           >
             <MessageSquare fill="currentColor" />
             Iniciar Atendimento via WhatsApp
           </a>
        </div>
      </div>
    </div>
  );
}
