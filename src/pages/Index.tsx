
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import RealEstateSection from "@/components/RealEstateSection";
import ResortSection from "@/components/ResortSection";
import LocationSection from "@/components/LocationSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.animate-reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OverviewSection />
      <RealEstateSection />
      <ResortSection />
      <LocationSection />
      <BlogSection />
      <CTASection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
