
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-ocean/80 z-10"></div>
        <img 
          src="/lovable-uploads/photo-1518495973542-4542c06a5843.jpg"
          alt="SVN Bay Parck Beach" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Secure Your Piece of Paradise
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Experience coastal elegance and luxury resort living with SVN Bay Parck.
            Limited premium plots and villas available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/real-estate">
              <Button 
                size="lg" 
                className="bg-white text-ocean hover:bg-white/90 px-8"
              >
                Explore Properties
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8"
              >
                Schedule a Visit <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
