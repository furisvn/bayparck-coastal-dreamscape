
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

const LocationSection = () => {
  const distances = [
    { place: "Chennai–Kolkata Highway", distance: "10 km" },
    { place: "Pydibhimavaram Pharma SEZ", distance: "15 km" },
    { place: "Srikakulam City", distance: "30 km" },
    { place: "Bhogapuram Intl. Airport", distance: "35 km" },
    { place: "Vizianagaram City", distance: "40 km" },
    { place: "Visakhapatnam (Vizag)", distance: "80 km" }
  ];

  const nearbySpots = [
    "Natavalasa Junction", 
    "Ranastalam", 
    "Oakridge Intl. School", 
    "Simhachalam", 
    "Anandapuram", 
    "Bheemili"
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Strategic Location</h2>
          <p className="text-gray-600 leading-relaxed">
            SVN Bay Parck is strategically positioned to offer both serenity and convenience,
            with easy access to major cities, highways, and upcoming infrastructure developments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-serif mb-6">Prime Connectivity</h3>
            
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={20} className="text-ocean mt-1 flex-shrink-0" />
              <p className="text-gray-600">
                <strong className="text-black">Koshta Junction, Jeerupalem, Srikakulam District, Andhra Pradesh, India</strong> <br/>
                Near Chennai–Kolkata Highway | Close to Vizag, Bhogapuram Airport & Pharma SEZ
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h4 className="font-serif text-lg mb-4">Key Distances</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {distances.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{item.place}</span>
                    <span className="font-medium">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-3">Nearby Hotspots</h4>
              <div className="flex flex-wrap gap-2">
                {nearbySpots.map((spot, index) => (
                  <span 
                    key={index} 
                    className="bg-ocean-light/10 text-ocean px-3 py-1 rounded-full text-sm"
                  >
                    {spot}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-lg shadow-lg overflow-hidden w-full h-96 bg-gray-200">
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

        <div className="bg-ocean text-white p-8 md:p-12 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-6">Investment Value Proposition</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-ocean-light text-xl leading-none">•</span>
                  <span>High ROI + strong resale value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-light text-xl leading-none">•</span>
                  <span>Located outside CRZ – 100% safe to build</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-light text-xl leading-none">•</span>
                  <span>Flexible payment plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-light text-xl leading-none">•</span>
                  <span>Capital appreciation + Leisure lifestyle</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-6">Perfect For</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-medium mb-2">Investors</h4>
                  <p className="text-sm text-white/80">Seeking strong ROI and capital appreciation in a growing coastal market</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-medium mb-2">NRIs</h4>
                  <p className="text-sm text-white/80">Looking for a vacation home or investment property in their homeland</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-medium mb-2">Vacationers</h4>
                  <p className="text-sm text-white/80">Desiring a peaceful retreat with premium amenities and beach access</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-medium mb-2">Event Planners</h4>
                  <p className="text-sm text-white/80">Seeking exclusive venues for weddings, retreats, and corporate events</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="px-8">
                Schedule Site Visit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
