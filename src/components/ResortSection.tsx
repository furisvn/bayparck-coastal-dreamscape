
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResortSection = () => {
  const amenities = [
    {
      title: "Leisure",
      items: [
        "Swimming Pool",
        "Restaurant & Entertainment Zone",
        "Spa & Wellness Center",
        "Salon & Massage Services",
      ]
    },
    {
      title: "Activity",
      items: [
        "Mini & Open Gyms",
        "Cricket Pitch",
        "Badminton & Basketball Court",
        "Jogging & Cycling Tracks",
      ]
    },
    {
      title: "Community",
      items: [
        "Banquet Hall",
        "Party Lawns",
        "Meeting Hall",
        "Games Room",
      ]
    },
    {
      title: "Relaxation",
      items: [
        "Children's Play Area",
        "Gazebos",
        "Lush Green Landscaping",
        "Meditation Areas",
      ]
    },
  ];

  const roomThemes = [
    {
      id: "modern",
      title: "Modern Theme",
      description: "Sleek, contemporary interiors with minimalist décor, clean lines, and state-of-the-art amenities for a stylish, comfortable stay.",
      image: "/lovable-uploads/photo-1721322800607-8c38375eef04.jpg"
    },
    {
      id: "rustic",
      title: "Rustic Theme",
      description: "Warm, wooden aesthetics with natural textures and cozy furnishing to create an inviting, earthy retreat blending with nature.",
      image: "/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg"
    },
    {
      id: "amalfi",
      title: "Amalfi Theme",
      description: "European-inspired design reflecting the charm of Italy's Amalfi Coast—bright, airy spaces with Mediterranean colors and elegant finishes.",
      image: "/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg"
    }
  ];

  return (
    <section className="py-20 bg-ocean/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Exclusive Beachfront Resort</h2>
          <p className="text-gray-600 leading-relaxed">
            Indulge in the perfect blend of luxury and nature at our boutique resort,
            offering world-class amenities and unparalleled coastal experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((category, index) => (
            <Card key={index} className="bg-white hover-translate">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg mb-4 text-ocean">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm">• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif mb-8 text-center">Accommodation Options</h3>
          
          <Tabs defaultValue="modern" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {roomThemes.map(theme => (
                <TabsTrigger key={theme.id} value={theme.id}>{theme.title}</TabsTrigger>
              ))}
            </TabsList>
            
            {roomThemes.map(theme => (
              <TabsContent key={theme.id} value={theme.id} className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <img 
                    src={theme.image} 
                    alt={theme.title}
                    className="rounded-lg shadow-lg h-80 w-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-serif mb-4">{theme.title}</h4>
                    <p className="text-gray-600 mb-6">{theme.description}</p>
                    <Button className="bg-ocean hover:bg-ocean-light text-white gap-2">
                      Book This Room <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="bg-ocean text-white p-8 md:p-12 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">Resort Membership</h3>
              <p className="mb-6 text-white/80">
                Exclusive to plot owners, our resort membership program offers premium
                benefits and privileges valid until December 31, 2028.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-ocean-light text-xl leading-none">•</span>
                  <span>2 nights/year stay at Bay Parck + 2 nights at SVN Lake Palace or SVN Grand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-light text-xl leading-none">•</span>
                  <span>Complimentary breakfast</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-light text-xl leading-none">•</span>
                  <span>Free pool, gym, indoor games access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-light text-xl leading-none">•</span>
                  <span>10–25% discounts on food, spa, and extra stays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-light text-xl leading-none">•</span>
                  <span>Membership is transferable upon resale</span>
                </li>
              </ul>
              
              <Link to="/resort">
                <Button variant="secondary" className="gap-2">
                  Learn More About Membership
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h4 className="text-xl font-serif mb-6 text-center">Current Offers</h4>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 pb-3 border-b border-white/20">
                  <div className="bg-ocean-light/30 p-2 rounded-full">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="18" height="18" rx="9" fill="white"/>
                      <path d="M6 12L10 16L18 8" stroke="#30a8ff" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Free 4 nights/year stay</span>
                </li>
                <li className="flex items-center gap-3 pb-3 border-b border-white/20">
                  <div className="bg-ocean-light/30 p-2 rounded-full">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="18" height="18" rx="9" fill="white"/>
                      <path d="M6 12L10 16L18 8" stroke="#30a8ff" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Complimentary Resort Membership</span>
                </li>
                <li className="flex items-center gap-3 pb-3 border-b border-white/20">
                  <div className="bg-ocean-light/30 p-2 rounded-full">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="18" height="18" rx="9" fill="white"/>
                      <path d="M6 12L10 16L18 8" stroke="#30a8ff" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Discounts on food, spa, extra stays</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-ocean-light/30 p-2 rounded-full">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="18" height="18" rx="9" fill="white"/>
                      <path d="M6 12L10 16L18 8" stroke="#30a8ff" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Exclusive welcome package upon booking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResortSection;
