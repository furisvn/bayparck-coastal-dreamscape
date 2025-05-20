
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
          <img 
            src="/lovable-uploads/photo-1506744038136-46273834b3fb.jpg"
            alt="SVN Bay Parck Overview" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">About SVN Bay Parck</h1>
            <p className="text-lg md:text-xl">
              A prestigious beachfront development bringing luxury coastal living to Andhra Pradesh
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                SVN Bay Parck envisions a perfect harmony between luxurious living and coastal serenity. 
                We are creating a unique ecosystem where premium real estate, world-class amenities, 
                and breathtaking natural beauty coexist to provide an unparalleled living experience.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment is to deliver not just properties, but a lifestyle that celebrates 
                the beauty of waterfront living while offering strong investment potential for the future.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-ocean mt-1 flex-shrink-0" />
                  <span>Sustainable development practices</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-ocean mt-1 flex-shrink-0" />
                  <span>Preservation of natural coastal beauty</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={18} className="text-ocean mt-1 flex-shrink-0" />
                  <span>Creating a community of like-minded property owners</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg"
                alt="Coastal View" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg"
                alt="SVN Developers" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif mb-6">About SVN Developers</h2>
              <p className="text-gray-600 mb-6">
                With a rich legacy of excellence spanning over two decades, SVN Developers has established 
                itself as one of Andhra Pradesh's premium real estate developers. Our portfolio includes 
                successful residential projects, luxury resorts, and commercial complexes across the state.
              </p>
              <p className="text-gray-600 mb-6">
                SVN Bay Parck represents our flagship coastal project, bringing together our expertise in 
                luxury real estate development and resort management to create a truly extraordinary offering.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to quality, transparency, and customer satisfaction has earned us the trust 
                of thousands of happy homeowners and investors throughout our journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif mb-6">Why Choose SVN Bay Parck</h2>
            <p className="text-gray-600">
              We stand apart from other developments through our unique combination of 
              premium features, legal compliance, and exceptional experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover-translate">
              <h3 className="font-serif text-xl mb-4">Legal Clarity</h3>
              <p className="text-gray-600 mb-4">
                Fully approved by all regulatory bodies with clear titles and located outside CRZ, 
                ensuring complete peace of mind for buyers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-ocean-light flex-shrink-0" />
                  <span>LP No. 31/2020/1178 / DTCP / DPMS</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-ocean-light flex-shrink-0" />
                  <span>AP RERA No: P01070381701</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-ocean-light flex-shrink-0" />
                  <span>SUDA Approved</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover-translate">
              <h3 className="font-serif text-xl mb-4">Prime Location</h3>
              <p className="text-gray-600 mb-4">
                Strategic positioning with excellent connectivity to major cities and upcoming 
                infrastructure developments, enhancing future value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-ocean-light flex-shrink-0" />
                  <span>Near Chennai–Kolkata Highway</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-ocean-light flex-shrink-0" />
                  <span>35 km from Bhogapuram Intl. Airport</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-ocean-light flex-shrink-0" />
                  <span>80 km from Visakhapatnam</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover-translate">
              <h3 className="font-serif text-xl mb-4">Dual Benefits</h3>
              <p className="text-gray-600 mb-4">
                Enjoy both lifestyle advantages and investment potential, with options for 
                personal use or rental income through our resort management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-ocean-light flex-shrink-0" />
                  <span>Capital appreciation in growing market</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-ocean-light flex-shrink-0" />
                  <span>Resort-backed rental program</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-ocean-light flex-shrink-0" />
                  <span>Exclusive resort membership benefits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Experience Bay Parck?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Whether you're looking for an investment opportunity or your dream beachfront home,
            our team is ready to assist you in exploring the perfect options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/real-estate">
              <Button size="lg" className="bg-white text-ocean hover:bg-white/90 px-8">
                Explore Properties
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>
  );
};

export default About;
