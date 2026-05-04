import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden">
              <img 
                src="https://i.ibb.co/KxmWy8Gb/seu-accar.jpg" 
                alt="A. C. CAR Automecânica" 
                className="w-full h-auto max-h-[600px] object-contain bg-gray-100"
              />
            </div>
            {/* Design elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bosch-blue/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-bosch-cyan/10 rounded-full blur-3xl z-0" />
            
            <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block border border-gray-100">
               <div className="flex items-center gap-4">
                  <img src="https://i.ibb.co/HLxJmCN5/bosch-logo.png" alt="Bosch Logo" className="w-12 h-auto" />
                  <div>
                    <p className="text-dark font-bold text-lg">Qualidade Bosch</p>
                    <p className="text-gray-500 text-sm italic">Sempre a melhor escolha</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bosch-cyan font-bold uppercase tracking-widest text-sm mb-4 block">História & Tradição</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-8 leading-tight">
              Sobre a A. C. CAR
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                A <strong>A. C. CAR</strong>, oficina autorizada Bosch em Santo André - SP, está no mercado desde {APP_CONFIG.since} e possui um conceito inovador, oferecendo diversas vantagens para você e seu carro.
              </p>
              <p>
                Você conta com o melhor atendimento, conforto e conveniência com a qualidade de serviços executados por profissionais treinados pela Bosch. Nosso foco é a precisão técnica aliada a um atendimento humanizado e transparente.
              </p>
              <p>
                Utilizamos equipamentos de diagnóstico de última geração e peças genuínas para garantir que seu veículo rande com a máxima segurança e performance original.
              </p>
              <div className="pt-4">
                <Link 
                  to="/empresa" 
                  className="text-bosch-cyan font-bold flex items-center gap-2 hover:gap-4 transition-all group"
                >
                  Saber mais
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-200 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-display font-black text-bosch-blue">1985</p>
                <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Fundação</p>
              </div>
              <div>
                <p className="text-3xl font-display font-black text-bosch-cyan">Santo André</p>
                <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Localização</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
