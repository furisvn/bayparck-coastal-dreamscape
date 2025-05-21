
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-slate text-white relative overflow-hidden">
      <div className="absolute inset-0 z-10">
        <img 
          src="/lovable-uploads/photo-1518495973542-4542c06a5843.jpg"
          alt="SVN Bay Parck Beach" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div 
          className="max-w-3xl mx-auto text-center mb-16 animate-reveal"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <p className="text-sm tracking-widest uppercase text-white/70 mb-4">Limited Offering</p>
          <h2 className="text-3xl md:text-4xl mb-6 font-light">
            Secure Your Piece of Paradise
          </h2>
          <div className="h-[1px] w-16 bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/80 mb-12">
            Experience coastal elegance and luxury resort living with SVN Bay Parck.
            Limited premium plots and villas available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/real-estate" className="group">
              <div className="border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 px-8 py-3 transition-all duration-500">
                <span className="text-sm tracking-widest uppercase">Explore Properties</span>
              </div>
            </Link>
            <Link to="/contact" className="group">
              <div className="border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 px-8 py-3 transition-all duration-500 flex items-center justify-center gap-2">
                <span className="text-sm tracking-widest uppercase">Schedule a Visit</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
