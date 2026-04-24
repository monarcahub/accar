import { FLEET_LOGOS } from "../constants";

export default function FleetLogos() {
  return (
    <section className="bg-white py-12 border-b border-gray-100 italic overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center">
          Atendemos as principais frotas
        </p>
      </div>
      
      <div className="flex gap-16 whitespace-nowrap overflow-hidden">
        <div className="flex gap-16 animate-scroll items-center min-w-full">
          {[...FLEET_LOGOS, ...FLEET_LOGOS, ...FLEET_LOGOS].map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
