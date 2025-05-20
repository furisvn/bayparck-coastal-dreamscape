
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  };

  // Sample gallery images for the various categories
  const galleryCategories = [
    {
      id: "all",
      title: "All Images"
    },
    {
      id: "property",
      title: "Property Views"
    },
    {
      id: "beach",
      title: "Beach & Surroundings"
    },
    {
      id: "amenities",
      title: "Resort Amenities"
    },
    {
      id: "villas",
      title: "Luxury Villas"
    }
  ];

  // Sample images for the gallery
  const galleryImages = [
    {
      src: "/lovable-uploads/photo-1500375592092-40eb2168fd21.jpg",
      alt: "Oceanfront View",
      categories: ["all", "beach"]
    },
    {
      src: "/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg",
      alt: "River between mountains",
      categories: ["all", "beach"]
    },
    {
      src: "/lovable-uploads/photo-1506744038136-46273834b3fb.jpg",
      alt: "Water surrounded by trees",
      categories: ["all", "property", "beach"]
    },
    {
      src: "/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg",
      alt: "Mountain View",
      categories: ["all", "property", "beach"]
    },
    {
      src: "/lovable-uploads/photo-1518495973542-4542c06a5843.jpg",
      alt: "Sunlight through trees",
      categories: ["all", "amenities"]
    },
    {
      src: "/lovable-uploads/photo-1721322800607-8c38375eef04.jpg",
      alt: "Living Room Interior",
      categories: ["all", "villas"]
    },
    {
      src: "/lovable-uploads/photo-1487958449943-2429e8be8625.jpg",
      alt: "White Building",
      categories: ["all", "property", "villas"]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
          <img 
            src="/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg"
            alt="SVN Bay Parck Gallery" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Gallery</h1>
            <p className="text-lg md:text-xl">
              Experience the beauty and elegance of SVN Bay Parck
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">Explore Our Property</h2>
            <p className="text-gray-600">
              Immerse yourself in the captivating beauty of SVN Bay Parck through our 
              carefully curated collection of images showcasing our property's highlights.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-12">
              {galleryCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {galleryCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages
                    .filter(image => image.categories.includes(category.id))
                    .map((image, index) => (
                      <div 
                        key={index}
                        className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => openLightbox(image.src)}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-72 object-cover transition-all duration-500 hover:scale-110"
                        />
                      </div>
                    ))
                  }
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">Aerial Tour</h2>
            <p className="text-gray-600">
              Take a virtual tour of our exclusive beachfront property and visualize 
              the premium lifestyle that awaits at SVN Bay Parck.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-800">
              <div className="flex items-center justify-center h-96">
                <p className="text-white text-lg">Video Tour Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360° Virtual Tour */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-6">360° Virtual Tour</h2>
            <p className="text-gray-600">
              Explore our property and villa interiors with our immersive 360° tour experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="font-serif text-xl mb-3">Beachfront Villa Interior</h3>
                <p className="text-gray-600 mb-4">
                  Step inside our luxurious villas and experience the premium finishes and thoughtful design.
                </p>
                <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                  <p className="text-gray-500">360° Tour Coming Soon</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="font-serif text-xl mb-3">Resort Amenities</h3>
                <p className="text-gray-600 mb-4">
                  Explore our world-class resort facilities including pools, spa, restaurant, and more.
                </p>
                <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                  <p className="text-gray-500">360° Tour Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for image viewing */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative w-full">
            <button 
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img 
              src={currentImage} 
              alt="Gallery Preview" 
              className="w-full h-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
      
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
