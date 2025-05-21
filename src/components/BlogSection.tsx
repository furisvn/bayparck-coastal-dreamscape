
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from 'lucide-react';

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
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

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
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-slate mb-4">Insights</p>
            <h2 className="text-3xl md:text-4xl mb-6 font-light">Journal</h2>
            <div className="h-[1px] w-16 bg-slate/30 mx-auto"></div>
            <p className="text-slate mt-6">Loading latest articles...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-slate mb-4">Insights</p>
            <h2 className="text-3xl md:text-4xl mb-6 font-light">Journal</h2>
            <div className="h-[1px] w-16 bg-slate/30 mx-auto"></div>
            <p className="text-slate mt-6 mb-8">
              Our latest stories are on their way! Meanwhile, explore our ideas on Medium.
            </p>
            <a 
              href="https://medium.com/@furisvn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-slate px-8 py-3 text-sm text-slate hover:bg-slate hover:text-white transition-all"
            >
              Visit Medium
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-3xl mx-auto text-center mb-20 animate-reveal"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <p className="text-sm tracking-widest uppercase text-slate mb-4">Insights</p>
          <h2 className="text-3xl md:text-4xl mb-6 font-light">Journal</h2>
          <div className="h-[1px] w-16 bg-slate/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {posts.slice(0, 2).map((post, index) => (
            <div 
              key={index} 
              className="animate-reveal hover-lift"
              ref={(el) => (elementsRef.current[index+1] = el)}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="img-zoom h-80 w-full mb-6">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-slate mb-2">{post.pubDate}</div>
                <h3 className="text-xl mb-4 font-serif">{post.title}</h3>
                <p className="text-slate text-sm mb-4 line-clamp-3">{post.description}</p>
                <div className="group flex items-center gap-2 text-slate-dark">
                  <span className="text-sm">Read Article</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(2, 4).map((post, index) => (
            <div 
              key={index} 
              className="animate-reveal flex gap-6"
              ref={(el) => (elementsRef.current[index+3] = el)}
              style={{ transitionDelay: `${(index + 2) * 200}ms` }}
            >
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="img-zoom w-24 h-24 flex-shrink-0"
              >
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </a>
              <div>
                <div className="text-xs text-slate mb-1">{post.pubDate}</div>
                <h3 className="text-base mb-2 font-serif">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-slate transition-colors"
                  >
                    {post.title}
                  </a>
                </h3>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-2 text-slate-dark text-xs"
                >
                  <span>Read</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 text-center animate-reveal"
          ref={(el) => (elementsRef.current[5] = el)}
        >
          <a 
            href="https://medium.com/@furisvn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 text-slate-dark hover:text-slate transition-colors"
          >
            View All Articles <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
