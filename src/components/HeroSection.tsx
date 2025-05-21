
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      setScrolled(scrollFraction);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video/Image Background with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          transform: `translateY(${scrolled * 150}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-10"></div>
        <img 
          src="/lovable-uploads/photo-1500375592092-40eb2168fd21.jpg"
          alt="Bay Parck Ocean View" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left text-white container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light mb-8 max-w-2xl animate-fade-in leading-tight">
          Where Coastal <br className="hidden md:block" />Elegance Meets <br className="hidden md:block" />Private Luxury
        </h1>
        <p className="text-base md:text-lg mb-10 max-w-md opacity-0 animate-fade-up font-light tracking-wide" style={{ animationDelay: '400ms' }}>
          A rare fusion of premium sea-facing villas and an exclusive beach resort, meticulously curated for the discerning few.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <Link to="/real-estate" className="group">
            <div className="border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 px-8 py-3 transition-all duration-500">
              <span className="text-sm tracking-widest uppercase">Discover Real Estate</span>
            </div>
          </Link>
          <Link to="/resort" className="group">
            <div className="border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 px-8 py-3 transition-all duration-500">
              <span className="text-sm tracking-widest uppercase">Experience The Resort</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-75">
        <ChevronDown size={24} className="text-white" />
      </div>

      {/* Legal tag */}
      <div className="absolute bottom-6 right-6 z-20 text-white/70 text-xs tracking-wider">
        RERA: P01070381701 <span className="mx-2">|</span> DTCP: LP/31/2020/1178
      </div>
    </div>
  );
};

export default HeroSection;
