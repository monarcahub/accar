import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../constants";
import { Settings2, ShieldCheck, Wind, Anchor, Zap, Cpu, ChevronRight, X } from "lucide-react";

const iconMap: Record<string, any> = {
  Settings2,
  ShieldCheck,
  Wind,
  Anchor,
  Zap,
  Cpu,
};

export default function ServicesPage() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      {/* Promotion Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] w-[280px] md:w-[350px] shadow-2xl rounded-2xl overflow-hidden border-2 border-bosch-cyan/30 bg-white group"
          >
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-dark/40 text-white rounded-full hover:bg-bosch-blue transition-all z-20 backdrop-blur-sm"
              aria-label="Fechar promoção"
            >
              <X size={18} strokeWidth={3} />
            </button>
            <div className="relative">
              <img 
                src="https://i.ibb.co/cKRdWjbZ/troca-de-disco-de-freios-e-fluido-e-ganha-a-limpeza-e-regulagem-do-freio-traseiro-min-1.png" 
                alt="Ganhe 15% na troca de freios" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
          <span className="text-bosch-cyan font-bold uppercase tracking-widest text-sm mb-4 block">Especialidades Técnicas</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-tight">
            Nossos <span className="text-bosch-blue">Serviços</span>
          </h1>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            Combinamos diagnóstico de computadorizado de última geração com a experiência de décadas em mecânica de precisão.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Settings2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-bosch-blue/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-bosch-blue transition-colors duration-500">
                  <Icon className="text-bosch-blue group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display text-dark group-hover:text-bosch-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light mb-8 italic">
                   {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-bosch-cyan uppercase tracking-widest hover:gap-4 transition-all">
                  Ver Detalhes
                  <ChevronRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 bg-dark rounded-[40px] p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-bosch-blue/30 rounded-full blur-[100px]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Seu carro merece a tecnologia Bosch.</h2>
              <p className="text-gray-400">Agende sua revisão completa e sinta a diferença de um serviço com padrão internacional.</p>
            </div>
            <a href="#" className="bg-bosch-blue text-white px-10 py-5 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
