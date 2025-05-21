
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
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

  useEffect(() => {
    // Ensure the Fillout script has loaded
    const script = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
    if (!script) {
      const filloutScript = document.createElement('script');
      filloutScript.src = "https://server.fillout.com/embed/v1/";
      document.body.appendChild(filloutScript);
    }
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-3xl mx-auto text-center mb-16 animate-reveal"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <p className="text-sm tracking-widest uppercase text-slate mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl mb-6 font-light">Contact</h2>
          <div className="h-[1px] w-16 bg-slate/30 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div 
              className="lg:col-span-2 animate-reveal"
              ref={(el) => (elementsRef.current[1] = el)}
            >
              <div style={{width:"100%", height:"550px"}} data-fillout-id="gWqcDn4Jq6us" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
            </div>
            
            <div 
              className="animate-reveal"
              ref={(el) => (elementsRef.current[2] = el)}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="space-y-8">
                <div className="border-t border-slate/20 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate/10 flex items-center justify-center">
                      <Phone size={20} className="text-slate" />
                    </div>
                    <h3 className="text-xl font-light">Phone</h3>
                  </div>
                  <p className="text-slate text-sm">+91 85999 24242</p>
                  <p className="text-slate text-sm">+91 85999 36363</p>
                </div>
                
                <div className="border-t border-slate/20 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate/10 flex items-center justify-center">
                      <Mail size={20} className="text-slate" />
                    </div>
                    <h3 className="text-xl font-light">Email</h3>
                  </div>
                  <a href="mailto:info@svnsjd.com" className="text-slate text-sm hover:text-slate-dark transition-colors">
                    info@svnsjd.com
                  </a>
                </div>
                
                <div className="border-t border-slate/20 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate/10 flex items-center justify-center">
                      <MapPin size={20} className="text-slate" />
                    </div>
                    <h3 className="text-xl font-light">Address</h3>
                  </div>
                  <p className="text-slate text-sm">
                    Koshta Junction, Jeerupalem,<br />
                    Srikakulam District,<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="mt-16 py-8 border-t border-slate/20 text-center animate-reveal"
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <p className="text-sm text-slate">
              LP No. 31/2020/1178 / DTCP / DPMS <span className="mx-2">•</span> 
              AP RERA No: P01070381701 <span className="mx-2">•</span> 
              SUDA Approved <span className="mx-2">•</span> 
              Located outside the CRZ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
