import { motion } from "motion/react";
import { ChevronRight, Settings } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-dark">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[110vw] h-[110vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110"
          src="https://www.youtube.com/embed/sODCywgWzek?autoplay=1&mute=1&loop=1&playlist=sODCywgWzek&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&enablejsapi=1"
          title="Background Video"
          allow="autoplay; encrypted-media"
          style={{ opacity: 0.5 }}
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-[2px] bg-bosch-cyan" />
              <span className="text-bosch-cyan font-bold tracking-[0.2em] text-xs uppercase italic">
                Qualidade Bosch Car Service
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-8">
              SUA OFICINA DE <br />
              <span className="text-white">CONFIANÇA</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
              Você não precisa mais ir a várias oficinas para todos os serviços que o seu carro necessita. 
              Procure o Bosch Car Service para uma manutenção completa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#servicos"
                className="bg-bosch-blue text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group transition-all"
              >
                NOSSOS SERVIÇOS
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#sobre"
                className="border border-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                SOBRE A. C. CAR
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-1 h-8 border border-white/20 rounded-full flex justify-center p-1">
          <motion.div className="w-full h-1 bg-bosch-cyan rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
