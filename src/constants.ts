export const APP_CONFIG = {
  name: "A. C. CAR Automecânica",
   BoschService: "Bosch Car Service",
  since: 1985,
  phone1: "(11) 4996-3772",
  phone2: "(11) 4996-0952",
  email: "a.c.car@outlook.com",
  address: "Av. Estados Unidos, 936 - 09120-300 - Parque das Nações, Santo André - São Paulo",
  hours: "Seg à Sex: 08:00 às 17:30",
  bookingUrl: "https://wa.me/5511998345447",
  whatsapp: "5511998345447",
};

export const SERVICES = [
  {
    title: "Regulagem de Motores",
    description: "Diagnóstico computadorizado e ajuste preciso para máxima eficiência e performance.",
    icon: "Settings2",
  },
  {
    title: "Produtos Bosch",
    description: "Peças originais Bosch com garantia e tecnologia de ponta para seu veículo.",
    icon: "ShieldCheck",
  },
  {
    title: "Ar Condicionado",
    description: "Manutenção, higienização e recarga de gás para o seu conforto térmico.",
    icon: "Wind",
  },
  {
    title: "Freios e Segurança",
    description: "Revisão completa do sistema de freios, ABS e itens de segurança ativa.",
    icon: "Anchor",
  },
  {
    title: "Injeção Eletrônica",
    description: "Especialistas em sistemas de injeção Bosch para economia de combustível.",
    icon: "Zap",
  },
  {
    title: "Suspensão e Direção",
    description: "Alinhamento, balanceamento e troca de amortecedores com precisão.",
    icon: "Cpu",
  }
];

export const FLEET_LOGOS = [
  { name: "Arval", url: "https://i.ibb.co/ZpphjX9c/logo-2.png" },
  { name: "Fleet", url: "https://i.ibb.co/TMf7dv2B/logo-2-200x58-1.png" },
  { name: "Ticket", url: "https://i.ibb.co/ZzG2SSj8/logo-ticket-log-1.png" },
  { name: "Total Fleet", url: "https://i.ibb.co/fzgj2hfB/total-fleet.png" },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Como escolher um amortecedor confiável?",
    excerpt: "Entenda a importância de escolher peças de qualidade para a estabilidade do seu carro.",
    date: "15 Abr, 2026",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Revisão de férias: o que conferir?",
    excerpt: "O que conferir no seu carro antes de cair na estrada com segurança.",
    date: "10 Mar, 2026",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800",
  },
];

export const STATS = [
  { label: "Clientes Atendidos", value: 8500, suffix: "+" },
  { label: "Anos de Experiência", value: new Date().getFullYear() - 1985, suffix: "" },
  { label: "Satisfação", value: 99, suffix: "%" },
];
