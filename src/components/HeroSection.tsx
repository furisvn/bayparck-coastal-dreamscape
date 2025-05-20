
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
        <img 
          src="/lovable-uploads/photo-1500375592092-40eb2168fd21.jpg"
          alt="Bay Parck Ocean View" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 animate-fade-in max-w-4xl">
          Experience Coastal Elegance Like Never Before
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Discover a rare fusion of CRZ-compliant premium plots, signature sea-facing villas, 
          and an exclusive boutique resort — all in one gated estate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <Link to="/real-estate">
            <Button size="lg" className="bg-ocean hover:bg-ocean-light text-white px-8 py-6 text-base">
              Explore Real Estate
            </Button>
          </Link>
          <Link to="/resort">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-base">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12 5V19M12 19L5 12M12 19L19 12" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
