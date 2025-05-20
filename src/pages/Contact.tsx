
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
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
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-80">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
          <img 
            src="/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg"
            alt="Contact SVN Bay Parck" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl">
              Get in touch with our team for inquiries, site visits, or more information
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-ocean/10 p-3 rounded-full mt-1">
                    <MapPin size={20} className="text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      Koshta Junction, Jeerupalem, <br />
                      Srikakulam District, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-ocean/10 p-3 rounded-full mt-1">
                    <Phone size={20} className="text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone & WhatsApp</h3>
                    <p className="text-gray-600">
                      +91 85999 24242 <br />
                      +91 85999 36363
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-ocean/10 p-3 rounded-full mt-1">
                    <Mail size={20} className="text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <a href="mailto:info@svnsjd.com" className="text-gray-600 hover:text-ocean transition-colors">
                      info@svnsjd.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-ocean/10 p-3 rounded-full mt-1">
                    <Clock size={20} className="text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 6:00 PM <br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-serif mb-4">Schedule a Site Visit</h3>
                <p className="text-gray-600 mb-4">
                  We invite you to experience the beauty and potential of SVN Bay Parck in person. 
                  Our team is available to give you a comprehensive tour of the property and answer 
                  all your questions.
                </p>
                <p className="text-gray-600">
                  Contact us today to arrange your visit:
                </p>
                <div className="flex items-center gap-2 mt-2 text-ocean font-medium">
                  <Phone size={18} />
                  <span>+91 85999 24242</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif mb-8">Send Us a Message</h2>
              <div className="bg-white rounded-lg shadow-sm">
                <div style={{width:"100%", height:"600px"}} data-fillout-id="gWqcDn4Jq6us" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">Our Location</h2>
            <p className="text-gray-600">
              SVN Bay Parck is strategically located near the Chennai–Kolkata Highway,
              offering convenient access while maintaining a serene coastal setting.
            </p>
          </div>

          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
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
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Contact;
