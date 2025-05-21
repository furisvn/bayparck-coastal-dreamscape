
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

const ResortSection = () => {
  const [activeRoom, setActiveRoom] = useState<number>(0);
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

  const amenityCategories = [
    {
      title: "Leisure",
      items: ["Swimming Pool", "Restaurant", "Entertainment Zone", "Spa & Wellness"]
    },
    {
      title: "Activity",
      items: ["Fitness Center", "Sports Courts", "Jogging Paths", "Cycling Trails"]
    },
    {
      title: "Community",
      items: ["Banquet Hall", "Party Lawns", "Meeting Spaces", "Games Room"]
    },
    {
      title: "Relaxation",
      items: ["Children's Area", "Landscaped Gardens", "Meditation Spots", "Private Beach Access"]
    },
  ];

  const roomStyles = [
    {
      name: "Modern",
      description: "Sleek, contemporary interiors with minimalist décor, clean lines, and state-of-the-art amenities for a stylish, comfortable stay.",
      image: "/lovable-uploads/photo-1721322800607-8c38375eef04.jpg"
    },
    {
      name: "Rustic",
      description: "Warm, wooden aesthetics with natural textures and cozy furnishing to create an inviting, earthy retreat blending with nature.",
      image: "/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg"
    },
    {
      name: "Amalfi",
      description: "European-inspired design reflecting the charm of Italy's Amalfi Coast—bright, airy spaces with Mediterranean colors and elegant finishes.",
      image: "/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg"
    }
  ];

  const membershipBenefits = [
    "2 nights annually at Bay Parck + 2 nights at partner resorts",
    "Complimentary breakfast during stays",
    "Access to all resort amenities and facilities",
    "10–25% discounts on dining, spa, and additional stays",
    "Transferable membership upon property resale"
  ];

  return (
    <section className="py-24 md:py-32 bg-sand-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-3xl mx-auto text-center mb-20 animate-reveal"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <p className="text-sm tracking-widest uppercase text-slate mb-4">Escape & Indulge</p>
          <h2 className="text-3xl md:text-4xl mb-6 font-light">The Boutique Beach Resort</h2>
          <div className="h-[1px] w-16 bg-slate/30 mx-auto"></div>
        </div>

        <div 
          className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-12 animate-reveal"
          ref={(el) => (elementsRef.current[1] = el)}
        >
          <div>
            <div className="img-zoom h-80 w-full mb-8">
              <img 
                src="/lovable-uploads/photo-1506744038136-46273834b3fb.jpg" 
                alt="Resort View"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl mb-4 font-light">Coastal Luxury</h3>
            <p className="text-slate text-sm leading-relaxed">
              An exclusive beachfront resort offering personalized service and 
              unparalleled experiences in a pristine coastal setting.
            </p>
          </div>
          
          <div>
            <div className="img-zoom h-80 w-full mb-8">
              <img 
                src="/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg" 
                alt="Resort Amenities"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl mb-4 font-light">Refined Living</h3>
            <p className="text-slate text-sm leading-relaxed">
              Thoughtfully designed spaces that blend contemporary elegance
              with the natural beauty of the surrounding landscape.
            </p>
          </div>
          
          <div>
            <div className="img-zoom h-80 w-full mb-8">
              <img 
                src="/lovable-uploads/photo-1487958449943-2429e8be8625.jpg" 
                alt="Resort Experience"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl mb-4 font-light">Curated Experiences</h3>
            <p className="text-slate text-sm leading-relaxed">
              From private beach access to personalized wellness programs,
              every moment is crafted to create lasting memories.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <div 
            className="animate-reveal mb-16"
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <p className="text-sm tracking-widest uppercase text-slate mb-4 text-center">Resort Features</p>
            <h3 className="text-2xl font-light mb-6 text-center">World-Class Amenities</h3>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-reveal"
            ref={(el) => (elementsRef.current[3] = el)}
            style={{ transitionDelay: '200ms' }}
          >
            {amenityCategories.map((category, idx) => (
              <div key={idx} className="border-t border-slate/20 pt-6">
                <h4 className="text-lg mb-6 font-serif">{category.title}</h4>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate text-sm">
                      <span className="w-1.5 h-1.5 bg-slate rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <div 
            className="animate-reveal mb-16"
            ref={(el) => (elementsRef.current[4] = el)}
          >
            <p className="text-sm tracking-widest uppercase text-slate mb-4 text-center">Accommodation</p>
            <h3 className="text-2xl font-light mb-6 text-center">Distinctive Room Styles</h3>
          </div>

          <div 
            className="animate-reveal"
            ref={(el) => (elementsRef.current[5] = el)}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-slate/20 pb-6">
              {roomStyles.map((style, idx) => (
                <button
                  key={idx}
                  className={`px-6 py-2 text-sm transition-all ${
                    activeRoom === idx
                      ? 'text-slate-dark border-b border-slate-dark'
                      : 'text-slate hover:text-slate-dark'
                  }`}
                  onClick={() => setActiveRoom(idx)}
                >
                  {style.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="img-zoom h-96 w-full">
                <img 
                  src={roomStyles[activeRoom].image} 
                  alt={roomStyles[activeRoom].name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              
              <div>
                <h3 className="text-2xl mb-4 font-light">{roomStyles[activeRoom].name} Theme</h3>
                <p className="text-slate mb-8 leading-relaxed">
                  {roomStyles[activeRoom].description}
                </p>
                
                <Link to="/resort" className="group flex items-center gap-3 text-slate-dark hover:text-slate transition-colors mt-8">
                  <span className="text-sm">Explore this Style</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div 
            className="animate-reveal"
            ref={(el) => (elementsRef.current[6] = el)}
          >
            <p className="text-sm tracking-widest uppercase text-slate mb-4 text-center">Exclusive Access</p>
            <h3 className="text-2xl font-light mb-16 text-center">Resort Membership</h3>
          </div>

          <div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-reveal"
            ref={(el) => (elementsRef.current[7] = el)}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-white p-12">
              <h4 className="text-xl mb-6 font-light">Benefits for Plot Owners</h4>
              <p className="text-slate mb-8 leading-relaxed">
                Our exclusive membership program offers premium benefits and privileges 
                valid until December 31, 2028, available only to property owners.
              </p>
              
              <ul className="space-y-4">
                {membershipBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-slate-dark font-serif text-xl leading-none">•</span>
                    <span className="text-sm text-slate">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="img-zoom h-[500px] w-full">
              <img 
                src="/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg" 
                alt="Resort Membership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResortSection;
