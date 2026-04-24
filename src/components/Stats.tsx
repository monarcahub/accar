import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { STATS } from "../constants";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const animate = () => {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animate();
  }, [isInView, value]);

  return (
    <div ref={nodeRef} className="text-center">
      <h3 className="text-5xl md:text-7xl font-display font-black text-white mb-2">
        {count}{suffix}
      </h3>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative bg-bosch-blue">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
       
       <div className="container mx-auto px-6 relative z-10">
         <div className="grid md:grid-cols-3 gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
           {STATS.map((stat) => (
             <div key={stat.label} className="py-8 md:py-0 px-4 flex flex-col items-center">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-bosch-cyan font-bold uppercase tracking-widest text-sm text-center">
                  {stat.label}
                </p>
             </div>
           ))}
         </div>
       </div>
    </section>
  );
}
