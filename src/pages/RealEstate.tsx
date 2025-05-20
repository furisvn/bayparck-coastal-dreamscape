
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, Download, ArrowRight } from "lucide-react";

const RealEstate = () => {
  const [activeTab, setActiveTab] = useState("plots");

  const plotFeatures = [
    "206 premium plots available",
    "Plot sizes from 200 to 267 sq yds",
    "Freehold ownership",
    "Clearly demarcated boundaries",
    "Located outside CRZ zone",
    "RERA approved",
    "Flexible payment plans",
    "Strong resale value potential"
  ];

  const infrastructureFeatures = [
    "60 ft & 40 ft BT Internal Roads",
    "Underground Electrical Lines",
    "Underground Drainage System",
    "Avenue Plantation",
    "Street Lighting",
    "Water Supply Network",
    "Electricity Supply",
    "24/7 Security"
  ];

  const villaTypes = [
    {
      type: "2 BHK Villa",
      size: "1000 sft BUA / 1600 sft slab area",
      features: [
        "2 Bedrooms with attached bathrooms",
        "Open living & dining area",
        "Modern kitchen with built-in appliances",
        "Sea-facing balcony or deck",
        "Contemporary architecture",
        "Fully furnished option available"
      ],
      image: "/lovable-uploads/photo-1487958449943-2429e8be8625.jpg"
    },
    {
      type: "4 BHK Villa",
      size: "2000 sft BUA / 2600 sft slab area",
      features: [
        "4 Spacious bedrooms with en-suite bathrooms",
        "Large living room & separate dining area",
        "Chef's kitchen with premium appliances",
        "Home office or study room",
        "Multiple balconies with sea views",
        "Private garden or courtyard",
        "Fully furnished option available"
      ],
      image: "/lovable-uploads/photo-1721322800607-8c38375eef04.jpg"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
          <img 
            src="/lovable-uploads/photo-1506744038136-46273834b3fb.jpg"
            alt="SVN Bay Parck Real Estate" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Beachfront Real Estate</h1>
            <p className="text-lg md:text-xl">
              Exclusive plots and luxury villas in a pristine coastal setting
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="plots" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="plots">Beachfront Plots</TabsTrigger>
              <TabsTrigger value="villas">Luxury Villas</TabsTrigger>
            </TabsList>
            
            {/* Plots Content */}
            <TabsContent value="plots" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-serif mb-6">Premium Beachfront Plots</h2>
                  <p className="text-gray-600 mb-6">
                    Secure your piece of paradise with our exclusive beachfront plots. Set along a pristine 
                    shoreline, these plots offer the perfect canvas to build your dream coastal home, 
                    with legal clarity and premium infrastructure.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {plotFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check size={18} className="text-ocean-light flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <img 
                    src="/lovable-uploads/photo-1500375592092-40eb2168fd21.jpg" 
                    alt="Beachfront Plots"
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                </div>
              </div>

              {/* Plot Layout Section */}
              <div className="bg-cream p-8 md:p-12 rounded-lg mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-serif mb-4">Interactive Layout Map</h3>
                    <p className="text-gray-600 mb-6">
                      Explore our meticulously designed community layout with 206 premium plots.
                      Click on any plot to see detailed information about size, price, and availability.
                    </p>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 h-64 md:h-96 overflow-hidden">
                      {/* This would be an interactive map in the actual implementation */}
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <p className="text-gray-500">Interactive Plot Layout Map</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-serif mb-4">Plot Information</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Total Plots</span>
                        <span className="font-medium">206</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Size Range</span>
                        <span className="font-medium">200–267 sq yds</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Starting Price</span>
                        <span className="font-medium">₹ Contact for details</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Availability</span>
                        <span className="font-medium text-green-600">Limited plots available</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button className="w-full bg-ocean hover:bg-ocean-light text-white flex items-center gap-2 justify-center">
                        <Download size={16} />
                        Download Brochure
                      </Button>
                      <Button variant="outline" className="w-full border-ocean text-ocean hover:bg-ocean hover:text-white">
                        Schedule Site Visit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infrastructure Section */}
              <div>
                <h3 className="text-2xl font-serif mb-6">World-Class Infrastructure</h3>
                <p className="text-gray-600 mb-8">
                  We've invested in creating a premium living environment with top-tier infrastructure 
                  that ensures comfort, convenience, and security for all residents.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {infrastructureFeatures.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center">
                            <Check size={18} className="text-ocean" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Villas Content */}
            <TabsContent value="villas" className="animate-fade-in">
              <div className="mb-16">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-serif mb-6">Luxury Beachfront Villas</h2>
                  <p className="text-gray-600">
                    Experience the pinnacle of coastal living with our exquisitely designed villas.
                    Each residence combines contemporary architecture with breathtaking sea views,
                    offering the perfect blend of luxury, comfort, and natural beauty.
                  </p>
                </div>
                
                <div className="space-y-16">
                  {villaTypes.map((villa, index) => (
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {index % 2 === 0 ? (
                        <>
                          <div>
                            <h3 className="text-2xl font-serif mb-4">{villa.type}</h3>
                            <p className="text-gray-600 mb-2">Built-up Area: <span className="font-medium">{villa.size}</span></p>
                            <ul className="space-y-2 mb-6">
                              {villa.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check size={18} className="text-ocean-light mt-1 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex gap-4">
                              <Button className="bg-ocean hover:bg-ocean-light text-white">
                                View Details
                              </Button>
                              <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                                Inquire Now
                              </Button>
                            </div>
                          </div>
                          <div>
                            <img 
                              src={villa.image} 
                              alt={villa.type}
                              className="rounded-lg shadow-lg w-full h-96 object-cover"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="order-2 lg:order-1">
                            <img 
                              src={villa.image} 
                              alt={villa.type}
                              className="rounded-lg shadow-lg w-full h-96 object-cover"
                            />
                          </div>
                          <div className="order-1 lg:order-2">
                            <h3 className="text-2xl font-serif mb-4">{villa.type}</h3>
                            <p className="text-gray-600 mb-2">Built-up Area: <span className="font-medium">{villa.size}</span></p>
                            <ul className="space-y-2 mb-6">
                              {villa.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check size={18} className="text-ocean-light mt-1 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex gap-4">
                              <Button className="bg-ocean hover:bg-ocean-light text-white">
                                View Details
                              </Button>
                              <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                                Inquire Now
                              </Button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Resort Management */}
              <div className="bg-cream p-8 md:p-12 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-serif mb-6">Resort-Managed Living</h3>
                    <p className="text-gray-600 mb-6">
                      Our luxury villas come with the unique advantage of being fully serviced by our 
                      on-site resort, offering you the perfect blend of homeownership and premium hospitality.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-ocean/10 p-1 rounded-full">
                          <Check size={16} className="text-ocean" />
                        </div>
                        <div>
                          <h4 className="font-medium">Professional Property Management</h4>
                          <p className="text-sm text-gray-600">
                            Let our expert team handle maintenance, security, and upkeep of your property
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-ocean/10 p-1 rounded-full">
                          <Check size={16} className="text-ocean" />
                        </div>
                        <div>
                          <h4 className="font-medium">Rental Income Potential</h4>
                          <p className="text-sm text-gray-600">
                            Option to place your villa in our rental program when not in personal use
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-ocean/10 p-1 rounded-full">
                          <Check size={16} className="text-ocean" />
                        </div>
                        <div>
                          <h4 className="font-medium">Resort Amenities Access</h4>
                          <p className="text-sm text-gray-600">
                            Full access to all resort facilities including pools, restaurants, and spas
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="gap-2 bg-ocean hover:bg-ocean-light text-white">
                      Learn More About Resort Management
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                  
                  <div>
                    <img 
                      src="/lovable-uploads/photo-1518495973542-4542c06a5843.jpg" 
                      alt="Resort Management"
                      className="rounded-lg shadow-lg w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Own Your Beachfront Paradise?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Limited premium plots and villas available. Contact our team today to 
            schedule a site visit or for more detailed information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-ocean hover:bg-white/90 px-8">
              Download Brochure
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

export default RealEstate;
