
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Clock, Car } from "lucide-react";

const Location = () => {
  const nearbyAttractions = [
    {
      name: "Bhogapuram International Airport (upcoming)",
      distance: "35 km",
      description: "Future international airport in development, enhancing connectivity to the region."
    },
    {
      name: "Visakhapatnam City",
      distance: "80 km",
      description: "Major coastal city with industrial hubs, shopping centers, and cultural attractions."
    },
    {
      name: "Srikakulam City",
      distance: "30 km",
      description: "Historic city with temples and local markets offering authentic experiences."
    },
    {
      name: "Pydibhimavaram Pharma SEZ",
      distance: "15 km",
      description: "Special Economic Zone with major pharmaceutical companies and employment opportunities."
    }
  ];

  const keyDistances = [
    { place: "Chennai–Kolkata Highway", distance: "10 km" },
    { place: "Pydibhimavaram Pharma SEZ", distance: "15 km" },
    { place: "Srikakulam City", distance: "30 km" },
    { place: "Bhogapuram Intl. Airport", distance: "35 km" },
    { place: "Vizianagaram City", distance: "40 km" },
    { place: "Visakhapatnam (Vizag)", distance: "80 km" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
          <img 
            src="/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg"
            alt="SVN Bay Parck Location" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Location</h1>
            <p className="text-lg md:text-xl">
              Strategic positioning with excellent connectivity and natural beauty
            </p>
          </div>
        </div>
      </section>

      {/* Address & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">Our Location</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin size={20} className="text-ocean" />
              <p className="text-lg">
                Koshta Junction, Jeerupalem, Srikakulam District, Andhra Pradesh, India
              </p>
            </div>
            <p className="text-gray-600">
              SVN Bay Parck is strategically located near the Chennai–Kolkata Highway,
              offering convenient access while maintaining a serene coastal setting.
            </p>
          </div>

          <div className="h-96 rounded-lg overflow-hidden shadow-lg mb-12">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-cream p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif mb-6">Key Distances</h3>
              <div className="space-y-4">
                {keyDistances.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Car size={18} className="text-ocean" />
                      <span>{item.place}</span>
                    </div>
                    <span className="font-medium">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-cream p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif mb-6">How To Reach</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L2 9.27273L12 12L14.7273 22L22 2Z" stroke="#0027d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h4 className="font-medium">By Air</h4>
                  </div>
                  <p className="text-sm text-gray-600 pl-7">
                    The nearest operational airport is Visakhapatnam International Airport (80 km).
                    The upcoming Bhogapuram International Airport will be just 35 km away.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="7" width="18" height="12" rx="2" stroke="#0027d2" strokeWidth="2"/>
                      <path d="M3 10H21" stroke="#0027d2" strokeWidth="2"/>
                      <path d="M7 14H7.01" stroke="#0027d2" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M11 14H11.01" stroke="#0027d2" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M7 18H15" stroke="#0027d2" strokeWidth="2"/>
                    </svg>
                    <h4 className="font-medium">By Road</h4>
                  </div>
                  <p className="text-sm text-gray-600 pl-7">
                    Accessible via the Chennai–Kolkata Highway, with well-maintained roads
                    connecting to major cities like Visakhapatnam, Vizianagaram, and Srikakulam.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 10H21" stroke="#0027d2" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M3 6H21" stroke="#0027d2" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M3 14H21" stroke="#0027d2" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M3 18H21" stroke="#0027d2" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M17.4 3C18.1667 3 18.3 3.16667 18.2 4" stroke="#0027d2" strokeWidth="2"/>
                      <path d="M17.6 20C18.3667 20 18.5 20.1667 18.4 21" stroke="#0027d2" strokeWidth="2"/>
                    </svg>
                    <h4 className="font-medium">By Train</h4>
                  </div>
                  <p className="text-sm text-gray-600 pl-7">
                    The nearest railway stations are at Srikakulam (30 km) and Vizianagaram (40 km),
                    both well-connected to major cities across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">Nearby Attractions</h2>
            <p className="text-gray-600">
              Beyond the serene beaches of SVN Bay Parck, there's a wealth of attractions 
              and amenities within easy reach, enhancing both lifestyle and investment value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
                <h3 className="text-xl font-serif mb-2">{attraction.name}</h3>
                <div className="flex items-center gap-2 text-ocean mb-3">
                  <Clock size={16} />
                  <span className="text-sm">{attraction.distance}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Nearby Places</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-sm hover-translate">
              <img 
                src="/lovable-uploads/photo-1506744038136-46273834b3fb.jpg" 
                alt="Natavalasa Junction"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="font-serif text-lg mb-2">Natavalasa Junction</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Important commercial center with shopping facilities and essential services.
                </p>
                <div className="flex items-center gap-2 text-sm text-ocean">
                  <Car size={14} />
                  <span>20 km</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-sm hover-translate">
              <img 
                src="/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg" 
                alt="Ranastalam"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="font-serif text-lg mb-2">Ranastalam</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Historic town with cultural significance and traditional markets.
                </p>
                <div className="flex items-center gap-2 text-sm text-ocean">
                  <Car size={14} />
                  <span>25 km</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-sm hover-translate">
              <img 
                src="/lovable-uploads/photo-1487958449943-2429e8be8625.jpg" 
                alt="Oakridge Intl. School"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="font-serif text-lg mb-2">Oakridge Intl. School</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Premium educational institution offering world-class curriculum.
                </p>
                <div className="flex items-center gap-2 text-sm text-ocean">
                  <Car size={14} />
                  <span>45 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Experience SVN Bay Parck In Person</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Schedule a site visit to fully appreciate the strategic location, natural beauty,
            and investment potential of our premium coastal development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-ocean hover:bg-white/90 px-8">
              Schedule Site Visit
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>
  );
};

export default Location;
