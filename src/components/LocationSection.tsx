
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from 'lucide-react';

const LocationSection = () => {
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

  const distances = [
    { place: "Chennai–Kolkata Highway", distance: "10 km" },
    { place: "Srikakulam City", distance: "30 km" },
    { place: "Bhogapuram Intl. Airport", distance: "35 km" },
    { place: "Vizianagaram City", distance: "40 km" },
    { place: "Visakhapatnam (Vizag)", distance: "80 km" }
  ];

  const investmentBenefits = [
    "CRZ-compliant beachfront property with legal clarity",
    "Strong rental yield potential through resort management",
    "Growing region with upcoming airport and infrastructure",
    "Limited inventory creating value appreciation",
    "Dual use as vacation home and investment asset"
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-3xl mx-auto text-center mb-20 animate-reveal"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <p className="text-sm tracking-widest uppercase text-slate mb-4">Prime Position</p>
          <h2 className="text-3xl md:text-4xl mb-6 font-light">Strategic Location</h2>
          <div className="h-[1px] w-16 bg-slate/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div 
            className="animate-reveal"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="mt-1">
                <MapPin size={20} className="text-slate-dark" />
              </div>
              <div>
                <h3 className="text-2xl mb-2 font-light">Prime Connectivity</h3>
                <p className="text-slate leading-relaxed">
                  Koshta Junction, Jeerupalem, Srikakulam District, Andhra Pradesh, India
                  <br/>Near Chennai–Kolkata Highway with proximity to major cities and the upcoming international airport.
                </p>
              </div>
            </div>

            <div 
              className="bg-sand/30 p-8 mb-8 animate-reveal"
              ref={(el) => (elementsRef.current[2] = el)}
              style={{ transitionDelay: '200ms' }}
            >
              <h4 className="text-lg mb-6 font-light">Key Distances</h4>
              <div className="space-y-4">
                {distances.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-sand pb-3 text-sm">
                    <span className="text-slate">{item.place}</span>
                    <span className="font-serif">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/location" className="group flex items-center gap-3 text-slate-dark hover:text-slate transition-colors mt-8">
              <span className="text-sm">Explore Location Details</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div 
            className="animate-reveal"
            ref={(el) => (elementsRef.current[3] = el)}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="rounded-md overflow-hidden h-[500px] shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245785.75928833927!2d83.57292894760699!3d18.30584387068806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c587f9a8292c9%3A0xd9a4e553b8c4034!2sSrikakulam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1716374367568!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SVN Bay Parck Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div 
          className="bg-slate py-16 px-6 md:px-16 animate-reveal"
          ref={(el) => (elementsRef.current[4] = el)}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light mb-4 text-white">Investment Proposition</h3>
            <div className="h-[1px] w-16 bg-white/30 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
            <div className="bg-white/5 backdrop-blur-sm p-8">
              <h4 className="font-serif text-lg mb-4">For Investors</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                A rare opportunity to own coastal property with strong ROI 
                and capital appreciation in a growing tourism corridor.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8">
              <h4 className="font-serif text-lg mb-4">For NRIs</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                A turnkey beachfront home in India with professional management 
                and rental income potential during absence periods.
              </p>
            </div>
            
            <div className="lg:col-span-1 md:col-span-2 bg-white/5 backdrop-blur-sm p-8">
              <h4 className="font-serif text-lg mb-4">Investment Benefits</h4>
              <ul className="space-y-3 text-sm text-white/80">
                {investmentBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-white text-xl leading-none">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
