
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

const RealEstateSection = () => {
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

  const features = [
    "Internal Roads with Avenue Plantation",
    "Underground Electrical & Drainage",
    "Water & Electricity Supply",
    "24/7 Security",
    "Clubhouse & Community Spaces"
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-3xl mx-auto text-center mb-20 animate-reveal"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <p className="text-sm tracking-widest uppercase text-slate mb-4">Investment Opportunity</p>
          <h2 className="text-3xl md:text-4xl mb-6 font-light">Beachfront Real Estate</h2>
          <div className="h-[1px] w-16 bg-slate/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div 
            className="animate-reveal"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <p className="text-sm tracking-widest uppercase text-slate mb-4">Premium Plots</p>
            <h3 className="text-2xl font-light mb-6">Exclusive Coastal Ownership</h3>
            <p className="text-slate mb-8 max-w-md">
              Our meticulously planned layout offers 206 premium plots ranging from 200–267 sq yds, 
              each with clear titles and freehold ownership. Located outside the CRZ zone, these plots 
              provide complete freedom to build your dream seaside home.
            </p>
            
            <ul className="space-y-3 mb-8 max-w-md">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate">
                  <span className="w-1.5 h-1.5 bg-slate rounded-full flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/real-estate" className="group flex items-center gap-3 text-slate-dark hover:text-slate transition-colors mt-8">
              <span className="text-sm">Explore Plot Layout</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div 
            className="animate-reveal"
            ref={(el) => (elementsRef.current[2] = el)} 
            style={{ transitionDelay: '200ms' }}
          >
            <div className="img-zoom h-[600px] w-full">
              <img 
                src="/lovable-uploads/photo-1506744038136-46273834b3fb.jpg" 
                alt="Beachfront Plots"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-xs text-slate-light italic">
              Aerial view of premium plot layout at SVN Bay Parck
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div 
            className="order-2 lg:order-1 animate-reveal"
            ref={(el) => (elementsRef.current[3] = el)} 
            style={{ transitionDelay: '200ms' }}
          >
            <div className="img-zoom h-[600px] w-full">
              <img 
                src="/lovable-uploads/photo-1487958449943-2429e8be8625.jpg" 
                alt="Luxury Villas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-xs text-slate-light italic">
              The signature villa design at SVN Bay Parck
            </div>
          </div>

          <div 
            className="order-1 lg:order-2 animate-reveal"
            ref={(el) => (elementsRef.current[4] = el)}
          >
            <p className="text-sm tracking-widest uppercase text-slate mb-4">Luxury Villas</p>
            <h3 className="text-2xl font-light mb-6">Bespoke Coastal Residences</h3>
            <p className="text-slate mb-8 max-w-md">
              Experience the pinnacle of coastal living with our serviced villas. 
              Choose from elegant 2 BHK (1000 sft) or spacious 4 BHK (2000 sft) configurations, 
              all featuring panoramic sea views and contemporary architecture.
            </p>

            <div className="space-y-6 mb-8 max-w-md">
              <div>
                <h4 className="text-lg mb-2">Fully Furnished</h4>
                <p className="text-sm text-slate leading-relaxed">
                  Move-in ready with premium fixtures, furnishings and designer interiors.
                </p>
              </div>

              <div>
                <h4 className="text-lg mb-2">Resort-Managed</h4>
                <p className="text-sm text-slate leading-relaxed">
                  Benefit from professional property management with luxury hotel standards.
                </p>
              </div>

              <div>
                <h4 className="text-lg mb-2">Rental Program</h4>
                <p className="text-sm text-slate leading-relaxed">
                  Generate returns by placing your villa in our resort's premium rental program.
                </p>
              </div>
            </div>
            
            <Link to="/real-estate" className="group flex items-center gap-3 text-slate-dark hover:text-slate transition-colors mt-8">
              <span className="text-sm">Explore Villa Options</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
