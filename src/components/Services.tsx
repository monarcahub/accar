import { motion } from "motion/react";
import { ChevronRight, Settings2, ShieldCheck, Wind, Anchor, Zap, Cpu } from "lucide-react";
import { SERVICES } from "../constants";

const iconMap: Record<string, any> = {
  Settings2,
  ShieldCheck,
  Wind,
  Anchor,
  Zap,
  Cpu,
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bosch-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-bosch-cyan/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-bosch-cyan font-bold uppercase tracking-widest text-sm mb-4 block">Especialidades</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Nossos Serviços
            </h2>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-bosch-cyan font-bold hover:text-white transition-colors group"
          >
            VER TODOS OS SERVIÇOS
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Settings2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Hover effect light */}
                <div className="absolute -inset-1 bg-gradient-to-r from-bosch-blue to-bosch-cyan rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-bosch-blue to-bosch-blue/50 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-bosch-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                  <div className="w-full h-[1px] bg-white/5 group-hover:bg-bosch-cyan/30 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
