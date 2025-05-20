
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, Calendar, ArrowRight } from "lucide-react";

const Resort = () => {
  const amenities = [
    {
      category: "Leisure",
      items: [
        "Swimming Pool",
        "Restaurant & Entertainment Zone",
        "Spa & Wellness Center",
        "Salon & Massage Services"
      ]
    },
    {
      category: "Activity",
      items: [
        "Mini & Open Gyms",
        "Cricket Pitch",
        "Badminton & Basketball Court",
        "Jogging & Cycling Tracks"
      ]
    },
    {
      category: "Community",
      items: [
        "Banquet Hall",
        "Party Lawns",
        "Meeting Hall",
        "Games Room"
      ]
    },
    {
      category: "Relaxation",
      items: [
        "Children's Play Area",
        "Gazebos",
        "Lush Green Landscaping",
        "Meditation Areas"
      ]
    }
  ];

  const roomTypes = [
    {
      id: "modern",
      name: "Modern Theme",
      description: "Sleek, contemporary interiors with minimalist décor, clean lines, and state-of-the-art amenities for a stylish, comfortable stay.",
      features: [
        "Smart room controls",
        "Premium entertainment system",
        "Contemporary furniture",
        "Floor-to-ceiling windows",
        "Luxury bathroom with rainfall shower",
        "Complimentary high-speed WiFi"
      ],
      image: "/lovable-uploads/photo-1721322800607-8c38375eef04.jpg",
      price: "₹12,000/night*"
    },
    {
      id: "rustic",
      name: "Rustic Theme",
      description: "Warm, wooden aesthetics with natural textures and cozy furnishing to create an inviting, earthy retreat blending with nature.",
      features: [
        "Exposed wooden beams",
        "Stone and wood accents",
        "Handcrafted furniture",
        "Plush bedding",
        "Private deck or patio",
        "Natural panoramic views"
      ],
      image: "/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg",
      price: "₹14,000/night*"
    },
    {
      id: "amalfi",
      name: "Amalfi Theme",
      description: "European-inspired design reflecting the charm of Italy's Amalfi Coast—bright, airy spaces with Mediterranean colors and elegant finishes.",
      features: [
        "Mediterranean color palette",
        "Luxurious tiled flooring",
        "Elegant custom furniture",
        "Spacious terrace or balcony",
        "Premium bathroom with soaking tub",
        "Spectacular ocean views"
      ],
      image: "/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg",
      price: "₹16,000/night*"
    }
  ];

  const membershipBenefits = [
    "2 nights/year stay at Bay Parck",
    "2 nights at SVN Lake Palace or SVN Grand",
    "Complimentary breakfast",
    "Free pool, gym, indoor games access",
    "10–25% discounts on food and spa",
    "10–25% discounts on extra stays",
    "Membership transferable upon resale"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
          <img 
            src="/lovable-uploads/photo-1500375592092-40eb2168fd21.jpg"
            alt="SVN Bay Parck Resort" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Luxury Beach Resort</h1>
            <p className="text-lg md:text-xl">
              Experience unparalleled coastal luxury and world-class amenities
            </p>
          </div>
        </div>
      </section>

      {/* Resort Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">Welcome to Bay Parck Resort</h2>
              <p className="text-gray-600 mb-6">
                Nestled along a pristine coastline, SVN Bay Parck Resort offers an exclusive retreat 
                where luxury meets nature. Our boutique resort spans 15 acres of beachfront property, 
                providing a serene escape with world-class amenities and breathtaking ocean views.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're seeking a rejuvenating getaway, a romantic escape, or a memorable 
                family vacation, our resort offers the perfect blend of comfort, elegance, and 
                coastal charm to create unforgettable experiences.
              </p>
              <div className="flex gap-4">
                <Button className="bg-ocean hover:bg-ocean-light text-white flex items-center gap-2">
                  <Calendar size={16} />
                  Book Your Stay
                </Button>
                <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                  Explore Amenities
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/photo-1518495973542-4542c06a5843.jpg" 
                alt="Resort Overview"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Amenities Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-center mb-12">Resort Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((category, index) => (
                <Card key={index} className="hover-translate">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl mb-4 text-ocean">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check size={16} className="text-ocean-light mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">Accommodations</h2>
            <p className="text-gray-600">
              Indulge in our thoughtfully designed accommodations, each offering a unique 
              ambiance while maintaining the highest standards of luxury and comfort.
            </p>
          </div>

          <Tabs defaultValue="modern" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {roomTypes.map(room => (
                <TabsTrigger key={room.id} value={room.id}>{room.name}</TabsTrigger>
              ))}
            </TabsList>
            
            {roomTypes.map(room => (
              <TabsContent key={room.id} value={room.id} className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <img 
                      src={room.image} 
                      alt={room.name}
                      className="rounded-lg shadow-lg w-full h-96 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-4">{room.name}</h3>
                    <p className="text-gray-600 mb-6">{room.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Room Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {room.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check size={16} className="text-ocean-light flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-lg font-medium mb-6">
                        Starting from <span className="text-ocean">{room.price}</span>
                        <span className="text-sm text-gray-500 block mt-1">*Rates vary by season</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button className="bg-ocean hover:bg-ocean-light text-white">
                        Book This Room
                      </Button>
                      <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif mb-6">Exquisite Dining Experience</h2>
              <p className="text-gray-600 mb-6">
                Our restaurant offers a culinary journey featuring both local delicacies and 
                international cuisine, prepared by expert chefs using the freshest ingredients.
                Enjoy your meals with breathtaking views of the ocean in an elegant setting.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-ocean/10 p-1 rounded-full">
                    <Check size={16} className="text-ocean" />
                  </div>
                  <div>
                    <h4 className="font-medium">Coastal Cuisine</h4>
                    <p className="text-sm text-gray-600">
                      Fresh seafood and local specialties celebrating the flavors of coastal Andhra
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-ocean/10 p-1 rounded-full">
                    <Check size={16} className="text-ocean" />
                  </div>
                  <div>
                    <h4 className="font-medium">International Menu</h4>
                    <p className="text-sm text-gray-600">
                      Expertly crafted international dishes to satisfy global palates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-ocean/10 p-1 rounded-full">
                    <Check size={16} className="text-ocean" />
                  </div>
                  <div>
                    <h4 className="font-medium">Private Dining</h4>
                    <p className="text-sm text-gray-600">
                      Exclusive beachfront dining experiences for special occasions
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="gap-2 bg-ocean hover:bg-ocean-light text-white">
                View Restaurant Menu
                <ArrowRight size={16} />
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/photo-1506744038136-46273834b3fb.jpg" 
                alt="Dining Experience"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 bg-ocean text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Exclusive Resort Membership</h2>
              <p className="mb-6 text-white/80">
                As a plot or villa owner at SVN Bay Parck, you're entitled to our exclusive 
                resort membership program, offering premium benefits and privileges valid 
                until December 31, 2028.
              </p>
              
              <ul className="space-y-3 mb-8">
                {membershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-ocean-light text-xl leading-none">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                <Button className="bg-white text-ocean hover:bg-white/90">
                  Inquire About Membership
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Property Options
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-serif">VIP</span>
                </div>
                <h3 className="text-2xl font-serif mb-2">Membership Benefits</h3>
                <p className="text-white/80 mb-6">
                  Enjoy exclusive perks and privileges as a valued member of our resort community
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3 pb-6 border-b border-white/20">
                  <div className="bg-ocean-light/30 p-2 rounded-full mt-1">
                    <Calendar size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Complimentary Stays</h4>
                    <p className="text-white/80">
                      Enjoy free nights at our resort and partner properties
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 pb-6 border-b border-white/20">
                  <div className="bg-ocean-light/30 p-2 rounded-full mt-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Special Discounts</h4>
                    <p className="text-white/80">
                      Enjoy reduced rates on dining, spa services, and additional stays
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-ocean-light/30 p-2 rounded-full mt-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8v4l2 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Long-term Value</h4>
                    <p className="text-white/80">
                      Membership is transferable upon property resale, enhancing investment value
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>
  );
};

export default Resort;
