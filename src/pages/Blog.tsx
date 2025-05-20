
import { useEffect, useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // In a real implementation, you would fetch from Medium's RSS feed
        // For now, we'll use placeholder data
        const mockPosts = [
          {
            title: "Why Beachfront Property Investment in Andhra Pradesh Is Booming",
            pubDate: "May 15, 2025",
            link: "https://medium.com/@furisvn",
            thumbnail: "/lovable-uploads/photo-1500375592092-40eb2168fd21.jpg",
            description: "Explore the factors driving the surge in beachfront property investments along India's eastern coastline, particularly in Andhra Pradesh. From infrastructure development to tourism growth, learn why coastal real estate is seeing unprecedented demand and appreciation in this region.",
            categories: ["investment", "real-estate"]
          },
          {
            title: "5 Reasons to Consider Resort-Serviced Villas as Your Next Investment",
            pubDate: "April 28, 2025",
            link: "https://medium.com/@furisvn",
            thumbnail: "/lovable-uploads/photo-1487958449943-2429e8be8625.jpg",
            description: "Discover why resort-serviced villas are becoming increasingly popular among savvy investors looking for both lifestyle benefits and returns. From hassle-free management to rental income potential, these properties offer unique advantages over traditional real estate investments.",
            categories: ["investment", "lifestyle"]
          },
          {
            title: "The Ultimate Guide to CRZ Regulations for Coastal Property Buyers",
            pubDate: "April 10, 2025",
            link: "https://medium.com/@furisvn",
            thumbnail: "/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg",
            description: "Understanding Coastal Regulation Zone (CRZ) guidelines is crucial before investing in seaside properties. Our comprehensive guide explains everything you need to know about CRZ norms, how they affect development, and what to look for to ensure your coastal investment is legally compliant.",
            categories: ["legal", "real-estate"]
          },
          {
            title: "Luxury Resort Living: The New Trend in Residential Real Estate",
            pubDate: "March 22, 2025",
            link: "https://medium.com/@furisvn",
            thumbnail: "/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg",
            description: "The line between residential communities and resorts is blurring. Learn how developers are bringing premium hospitality experiences to everyday living, creating properties that offer not just homes but complete lifestyle experiences with world-class amenities and services.",
            categories: ["lifestyle", "real-estate"]
          },
          {
            title: "Top 10 Amenities That Add Value to Coastal Residential Projects",
            pubDate: "March 5, 2025",
            link: "https://medium.com/@furisvn",
            thumbnail: "/lovable-uploads/photo-1518495973542-4542c06a5843.jpg",
            description: "Discover which amenities and features have the most significant impact on coastal property values. From infinity pools overlooking the ocean to private beach access, we explore the facilities that buyers are willing to pay premium prices for in luxury seaside developments.",
            categories: ["investment", "lifestyle"]
          },
          {
            title: "How Bhogapuram International Airport Will Transform Visakhapatnam Real Estate",
            pubDate: "February 18, 2025",
            link: "https://medium.com/@furisvn",
            thumbnail: "/lovable-uploads/photo-1721322800607-8c38375eef04.jpg",
            description: "The upcoming international airport at Bhogapuram is set to revolutionize the real estate landscape around Visakhapatnam and the northern Andhra coastline. Analyze how improved connectivity will drive property demand, tourism growth, and investment opportunities in this emerging region.",
            categories: ["investment", "development"]
          }
        ];
        
        setPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "investment", name: "Investment" },
    { id: "real-estate", name: "Real Estate" },
    { id: "lifestyle", name: "Lifestyle" },
    { id: "legal", name: "Legal Guidance" },
    { id: "development", name: "Development" }
  ];

  const filteredPosts = activeCategory === "all" 
    ? posts 
    : posts.filter(post => post.categories.includes(activeCategory));

  if (loading) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-serif mb-6">Our Blog</h1>
            <p className="text-gray-600 mb-12">Loading articles...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-serif mb-6">Our Blog</h1>
            <p className="text-gray-600 mb-6">
              Our latest stories are on their way! Meanwhile, explore our ideas on Medium.
            </p>
            <Button 
              as="a" 
              href="https://medium.com/@furisvn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-ocean hover:bg-ocean-light text-white"
            >
              Visit Medium
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
          <img 
            src="/lovable-uploads/photo-1518495973542-4542c06a5843.jpg"
            alt="SVN Bay Parck Blog" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Blog</h1>
            <p className="text-lg md:text-xl">
              Insights on coastal real estate, investment strategies, and luxury living
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm ${
                    activeCategory === category.id
                      ? "bg-ocean text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover-translate">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {post.categories.map(category => (
                        <span 
                          key={category}
                          className="bg-ocean/10 text-ocean text-xs px-2 py-1 rounded"
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">{post.pubDate}</div>
                    <h3 className="font-serif text-xl mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-ocean hover:text-ocean-light font-medium text-sm flex items-center gap-2"
                    >
                      Read More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No articles found in this category.</p>
                <Button
                  variant="outline"
                  onClick={() => setActiveCategory("all")}
                >
                  View All Articles
                </Button>
              </div>
            )}

            {/* Medium Link */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Looking for more insights on coastal real estate and luxury living?
              </p>
              <Button 
                as="a" 
                href="https://medium.com/@furisvn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-ocean hover:bg-ocean-light text-white gap-2"
              >
                Visit Our Medium Page <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Blog;
