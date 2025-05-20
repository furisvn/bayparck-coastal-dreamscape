
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';
import { Link } from "react-router-dom";

const RealEstateSection = () => {
  const features = [
    "60 ft & 40 ft BT Internal Roads",
    "Underground Electrical Lines & Drainage",
    "Avenue Plantation, Street Lighting",
    "Water & Electricity Supply",
    "24/7 Security",
    "Clubhouse & Community Spaces"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Premium Beachfront Real Estate</h2>
          <p className="text-gray-600 leading-relaxed">
            Secure your piece of paradise with our exclusive beachfront plots and luxury villas. 
            A rare investment opportunity combining natural beauty with sophisticated infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-serif mb-6">Premium Beachfront Plots</h3>
            <p className="text-gray-600 mb-6">
              Our meticulously planned layout offers 206 premium plots ranging from 200–267 sq yds, 
              each with clear titles and freehold ownership. Located outside the CRZ zone, these plots 
              provide complete freedom to build your dream seaside home.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={18} className="text-ocean-light flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-ocean hover:bg-ocean-light text-white">
                View Plot Layout
              </Button>
              <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                Download Brochure
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="/lovable-uploads/photo-1506744038136-46273834b3fb.jpg" 
              alt="Beachfront Plots"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/photo-1487958449943-2429e8be8625.jpg" 
              alt="Luxury Villas"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-6">Luxury Villas & Cottages</h3>
            <p className="text-gray-600 mb-6">
              Experience the pinnacle of coastal living with our serviced villas and cottages. 
              Choose from elegant 2 BHK (1000 sft BUA) or spacious 4 BHK (2000 sft BUA) configurations, 
              all featuring panoramic sea views and contemporary architecture.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <Check size={18} className="text-ocean-light mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">Fully Furnished</strong>
                  <span className="text-sm text-gray-600">
                    Move in ready with premium fixtures and furnishings
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check size={18} className="text-ocean-light mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">Resort-Managed</strong>
                  <span className="text-sm text-gray-600">
                    Benefit from professional property management and rental options
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check size={18} className="text-ocean-light mt-1 flex-shrink-0" />
                <div>
                  <strong className="block">Rental Income Potential</strong>
                  <span className="text-sm text-gray-600">
                    Generate returns by placing your villa in our resort's rental program
                  </span>
                </div>
              </div>
            </div>
            
            <Link to="/real-estate">
              <Button className="gap-2 bg-ocean hover:bg-ocean-light text-white">
                Explore Villa Options 
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
