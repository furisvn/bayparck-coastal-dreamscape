
import { useEffect, useRef } from 'react';

const OverviewSection = () => {
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
    <section className="py-24 md:py-32 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div 
              ref={(el) => (elementsRef.current[0] = el)} 
              className="animate-reveal"
            >
              <h2 className="text-3xl md:text-4xl mb-6 font-light">A Rare Coastal <br />Investment Opportunity</h2>
              <p className="text-slate mb-8 max-w-md">
                SVN Bay Parck is a 40-acre gated coastal estate designed for those who appreciate 
                exclusivity, natural beauty, and intelligent investment opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mt-12">
                <div>
                  <p className="text-sm text-slate-dark mb-1">Total Area</p>
                  <p className="text-xl font-serif">40 acres</p>
                </div>
                <div>
                  <p className="text-sm text-slate-dark mb-1">Residential Plots</p>
                  <p className="text-xl font-serif">25 acres</p>
                </div>
                <div>
                  <p className="text-sm text-slate-dark mb-1">Luxury Resort</p>
                  <p className="text-xl font-serif">15 acres</p>
                </div>
                <div>
                  <p className="text-sm text-slate-dark mb-1">Beach Access</p>
                  <p className="text-xl font-serif">Private</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-6"
            ref={(el) => (elementsRef.current[1] = el)} 
          >
            <div className="animate-reveal" style={{ transitionDelay: '200ms' }}>
              <div className="img-zoom h-full">
                <img 
                  src="/lovable-uploads/photo-1506744038136-46273834b3fb.jpg" 
                  alt="Coastal Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="animate-reveal" style={{ transitionDelay: '400ms' }}>
              <div className="img-zoom h-60 md:h-80 mb-4 md:mb-6">
                <img 
                  src="/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg" 
                  alt="Natural Beauty"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-zoom h-40 md:h-60">
                <img 
                  src="/lovable-uploads/photo-1487958449943-2429e8be8625.jpg" 
                  alt="Luxury Living"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="animate-reveal border-t border-slate/20 pt-8"
            ref={(el) => (elementsRef.current[2] = el)} 
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="text-lg font-serif mb-4">Premium Location</h3>
            <p className="text-sm text-slate leading-relaxed">
              Situated at Koshta Junction, Jeerupalem, near the Chennai–Kolkata Highway
              with proximity to Visakhapatnam and the upcoming Bhogapuram International Airport.
            </p>
          </div>
          
          <div 
            className="animate-reveal border-t border-slate/20 pt-8"
            ref={(el) => (elementsRef.current[3] = el)} 
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-lg font-serif mb-4">Investment Value</h3>
            <p className="text-sm text-slate leading-relaxed">
              CRZ-compliant premium plots with clear titles and freehold ownership, 
              offering both lifestyle benefits and strong return on investment potential.
            </p>
          </div>
          
          <div 
            className="animate-reveal border-t border-slate/20 pt-8"
            ref={(el) => (elementsRef.current[4] = el)} 
            style={{ transitionDelay: '500ms' }}
          >
            <h3 className="text-lg font-serif mb-4">Legal Assurance</h3>
            <p className="text-sm text-slate leading-relaxed">
              Fully approved by DTCP (LP No. 31/2020/1178), AP RERA (P01070381701), 
              and SUDA, ensuring complete legal compliance and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
