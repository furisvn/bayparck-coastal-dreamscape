
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
  return (
    <div className="min-h-screen">
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
