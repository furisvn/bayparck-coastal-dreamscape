
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
            description: "Explore the factors driving the surge in beachfront property investments along India's eastern coastline, particularly in Andhra Pradesh..."
          },
          {
            title: "5 Reasons to Consider Resort-Serviced Villas as Your Next Investment",
            pubDate: "April 28, 2025",
            link: "https://medium.com/@furisvn",
            thumbnail: "/lovable-uploads/photo-1487958449943-2429e8be8625.jpg",
            description: "Discover why resort-serviced villas are becoming increasingly popular among savvy investors looking for both lifestyle benefits and returns..."
          },
          {
            title: "The Ultimate Guide to CRZ Regulations for Coastal Property Buyers",
            pubDate: "April 10, 2025",
            link: "https://medium.com/@furisvn",
            thumbnail: "/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg",
            description: "Understanding Coastal Regulation Zone (CRZ) guidelines is crucial before investing in seaside properties. Our comprehensive guide explains everything..."
          },
          {
            title: "Luxury Resort Living: The New Trend in Residential Real Estate",
            pubDate: "March 22, 2025",
            link: "https://medium.com/@furisvn",
            thumbnail: "/lovable-uploads/photo-1470071459604-3b5ec3a7fe05.jpg",
            description: "The line between residential communities and resorts is blurring. Learn how developers are bringing premium hospitality experiences to everyday living..."
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

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Latest Insights</h2>
            <p className="text-gray-600">Loading latest articles...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Latest Insights</h2>
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
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Latest Insights</h2>
          <p className="text-gray-600 leading-relaxed">
            Stay informed with our latest articles on coastal real estate trends,
            investment strategies, and the luxury resort lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {posts.slice(0, 4).map((post, index) => (
            <Card key={index} className="overflow-hidden hover-translate">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.pubDate}</div>
                <h3 className="font-serif text-lg mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{post.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-ocean hover:text-ocean-light font-medium text-sm flex items-center gap-2"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://medium.com/@furisvn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-ocean hover:text-ocean-light font-medium"
          >
            View All Articles <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
