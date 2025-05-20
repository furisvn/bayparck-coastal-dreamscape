
import { useEffect } from 'react';

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions about our properties or the resort? 
            Our team of experts is here to assist you every step of the way.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div style={{width:"100%", height:"500px"}} data-fillout-id="gWqcDn4Jq6us" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-ocean/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" stroke="#0027d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" stroke="#0027d2" strokeWidth="2"/>
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" stroke="#0027d2" strokeWidth="2"/>
                <path d="M9.5 13.5c.5 1.5 2 2 3.5 2s3-1 3.5-2" stroke="#0027d2" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-2">WhatsApp</h3>
            <p className="text-gray-600">+91 85999 24242</p>
            <p className="text-gray-600">+91 85999 36363</p>
          </div>
          
          <div className="text-center">
            <div className="bg-ocean/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#0027d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-2">Phone</h3>
            <p className="text-gray-600">+91 85999 24242</p>
            <p className="text-gray-600">+91 85999 36363</p>
          </div>
          
          <div className="text-center">
            <div className="bg-ocean/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#0027d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="#0027d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-2">Email</h3>
            <a href="mailto:info@svnsjd.com" className="text-gray-600 hover:text-ocean transition-colors">
              info@svnsjd.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
