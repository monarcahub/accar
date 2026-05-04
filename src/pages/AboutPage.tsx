import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  History, 
  Award, 
  ShieldCheck, 
  Heart, 
  Target, 
  Wrench, 
  Cpu, 
  ChevronRight, 
  GraduationCap 
} from "lucide-react";
import FleetLogos from "../components/FleetLogos";
import Stats from "../components/Stats";
import { APP_CONFIG } from "../constants";

export default function AboutPage() {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 1985;

  const milestones = [
    { 
      year: "1985", 
      title: "Fundação", 
      description: "Início das atividades com foco em transparência e qualidade técnica em Santo André.",
      icon: History 
    },
    { 
      year: "2000", 
      title: "Parceria Bosch", 
      description: "Integração à rede mundial Bosch Car Service, elevando os padrões de tecnologia e serviço.",
      icon: Award 
    },
    { 
      year: currentYear.toString(), 
      title: "Referência no ABC", 
      description: "Consolidação como a oficina de confiança para motoristas e frotas em toda a região.",
      icon: Target 
    }
  ];

  const values = [
    { 
      icon: ShieldCheck, 
      title: "Honestidade", 
      description: "Transparência total em todos os diagnósticos e orçamentos." 
    },
    { 
      icon: Wrench, 
      title: "Precisão Técnica", 
      description: "Serviços executados com rigor técnico e equipamentos de ponta." 
    },
    { 
      icon: Heart, 
      title: "Atendimento Familiar", 
      description: "Um acolhimento próximo e humano, cuidando de cada cliente como parte da família." 
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/HLFxsQTb/banner-EMPRESA-ACCAR.png" 
            alt="Oficina A.C. CAR" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/50 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bosch-cyan font-bold uppercase tracking-[0.3em] text-sm mb-4 block italic">
              Nossa Trajetória
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6">
              NOSSA <span className="text-bosch-cyan italic">HISTÓRIA</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-8">Sobre a Empresa</h2>
             <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed italic font-light">
                <p>
                  A A. C. CAR, oficina autorizada Bosch de Santo André, São Paulo está no mercado desde 1985 e possui um conceito inovador, oferecendo diversas vantagens para você e seu carro. Você conta com o melhor atendimento, conforto e conveniência com a qualidade de serviços executados por profissionais treinados pela Bosch.
                </p>
                <p>
                  A A. C. CAR de Santo André, São Paulo conta com serviços e diagnósticos rápidos e precisos, equipamentos de última geração, profissionais treinados e a garantia de peças originais.
                </p>
             </div>
          </div>

          {/* Timeline */}
          <div className="relative mt-24">
            {/* Center Line (Hidden on mobile) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-24">
              {milestones.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-right w-full">
                    <div className={`flex flex-col ${idx % 2 === 1 ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="text-bosch-blue font-display font-black text-6xl mb-2">{item.year}</span>
                      <h3 className="text-2xl font-bold text-dark mb-4">{item.title}</h3>
                      <p className="text-gray-500 max-w-sm ml-auto mr-auto md:ml-0 md:mr-0">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-16 h-16 bg-bosch-blue rounded-full flex items-center justify-center text-white shadow-xl shadow-bosch-blue/30 border-4 border-white">
                    <item.icon size={28} />
                  </div>
                  
                  <div className="flex-1 w-full hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bosch Excellence Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[60px] p-12 md:p-20 shadow-2xl overflow-hidden relative">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-bosch-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-bosch-blue/10 text-bosch-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <Award size={14} /> Bosch Excellence
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-8 leading-tight">
                  Compromisso com a <br /> <span className="text-bosch-blue italic">Perfeição Técnica</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 italic">
                  A A. C. CAR faz parte do programa Bosch Excellence, um programa que garante a entrega da melhor qualidade em serviços do mercado, resultando no melhor atendimento ao cliente.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-bosch-cyan/10 flex items-center justify-center text-bosch-cyan flex-shrink-0">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Tecnologia</h4>
                      <p className="text-xs text-gray-500">Última geração Bosch.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-bosch-cyan/10 flex items-center justify-center text-bosch-cyan flex-shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Treinamento</h4>
                      <p className="text-xs text-gray-500">Equipe certificada.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-bosch-cyan/10 flex items-center justify-center text-bosch-cyan flex-shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Peças Originais</h4>
                      <p className="text-xs text-gray-500">Garantia de fábrica.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl">
                   <img 
                    src="https://am.boschcarservice.com/br/media/images/home/bosch_aa_8392_24_banner_1_870x490px_image_640w_360h.webp" 
                    alt="Padrão Bosch" 
                    className="w-full h-full object-cover"
                   />
                </div>
                {/* Float tag */}
                <div className="absolute -bottom-6 -left-6 bg-bosch-blue text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                  <p className="text-4xl font-display font-black italic mb-1">Padrão</p>
                  <p className="text-bosch-cyan uppercase font-bold tracking-widest text-xs">Mundial de Qualidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats 
        customStats={[
          { label: "Clientes Atendidos", value: 8500, suffix: "+" },
          { label: "Anos de Experiência", value: yearsOfExperience, suffix: "" },
          { label: "Satisfação", value: 99, suffix: "%" },
        ]} 
      />

      {/* Mission & Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-bosch-cyan font-bold uppercase tracking-widest text-sm mb-4 block">No que acreditamos</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-16">Nossa Missão e Valores</h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {values.map((val) => (
              <motion.div
                key={val.title}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-bosch-blue/5 rounded-2xl flex items-center justify-center text-bosch-blue mb-8 mx-auto group-hover:bg-bosch-blue group-hover:text-white transition-colors duration-500">
                  <val.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{val.title}</h3>
                <p className="text-gray-500 font-light italic">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-bosch-cyan font-bold uppercase tracking-widest text-sm mb-4 block">Foco em Resultados</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark">Especialidades em Destaque</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Regulagem de Motores", icon: Cpu },
              { title: "Produtos Bosch", icon: ShieldCheck },
              { title: "Ar Condicionado", icon: Wrench },
            ].map((s) => (
              <div key={s.title} className="flex flex-col items-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-bosch-cyan transition-colors">
                <s.icon className="text-bosch-blue mb-4" size={40} />
                <h4 className="text-xl font-bold text-dark text-center">{s.title}</h4>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link 
              to="/servicos" 
              className="inline-flex items-center gap-2 text-bosch-blue font-bold uppercase tracking-widest text-sm hover:text-bosch-cyan transition-colors group"
            >
              ver todos os serviços
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tour 360 */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 italic">Tour 360 pela Oficina</h2>
            <p className="text-gray-400 max-w-2xl mx-auto italic">Conheça nossa estrutura completa sem sair de casa. Transparência começa na organização do ambiente de trabalho.</p>
          </div>
          
          <div className="rounded-[60px] overflow-hidden aspect-video shadow-2xl border-4 border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!4v1713750000000!6m8!1m7!1sCIHM0ogKEICAgIC-z7HwBQ!2m2!1d-23.6317831!2d-46.5294069!3f89.28!4f67.72!5f100" 
               className="w-full h-full border-0"
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="https://www.google.com/maps/@-23.6317831,-46.5294069,3a,82.2y,89.28h,67.72t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIC-z7HwBQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FABJJf53BiRL6jm2I5ZIZwqRNHEiLGfCJz_2PCG2b3KhXbnGjmgTW6BCYlQ_Tv4jo9lFJ0H_ONkLs6fkhM_NkOXmQLr-W7BQxiem1tvv4I1zMPr1M72U-HhWH5-6-ie7XqcgVGL70lhRt%3Dw900-h600-k-no-pi22.28-ya89.28-ro0-fo100!7i7776!8i3888"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              Visualizar no Google Maps <ChevronRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Fleet Logos */}
      <FleetLogos />

      {/* Bottom CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-bosch-blue rounded-[60px] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-bosch-cyan/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-black leading-tight mb-6 italic">PRONTO PARA O PRÓXIMO NÍVEL?</h2>
              <p className="text-bosch-cyan text-lg md:text-xl font-bold uppercase tracking-widest">Sua oficina de confiança em Santo André.</p>
            </div>
            
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${APP_CONFIG.whatsapp}`}
                className="bg-white text-bosch-blue px-12 py-6 rounded-full font-black uppercase tracking-widest text-lg shadow-2xl relative z-10 flex items-center gap-4"
              >
                Falar com a Equipe <ChevronRight />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
