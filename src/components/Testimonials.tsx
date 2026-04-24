import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ricardo Santos",
    text: "Melhor oficina de Santo André. Atendimento transparente e preço justo. Meu carro está perfeito.",
    rating: 5
  },
  {
    name: "Cláudio Ferreira",
    text: "Especialistas de verdade. Levei meu carro com um problema de injeção que ninguém resolvia, e eles mataram na hora.",
    rating: 5
  },
  {
    name: "Juliana Mendes",
    text: "Ambiente limpo, organizado e profissionais educados. Recomendo o Bosch Car Service da AC Car para todos.",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8 text-bosch-cyan">
          <Quote size={48} fill="currentColor" className="opacity-20" />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-16">
          O que nossos clientes dizem
        </h2>

        <div className="max-w-4xl mx-auto relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(TESTIMONIALS[index].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-light italic text-gray-700 leading-relaxed mb-8">
                "{TESTIMONIALS[index].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bosch-blue rounded-full flex items-center justify-center text-white font-bold">
                  {TESTIMONIALS[index].name[0]}
                </div>
                <div className="text-left">
                  <p className="font-bold text-dark">{TESTIMONIALS[index].name}</p>
                  <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Cliente Google</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-bosch-blue w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
