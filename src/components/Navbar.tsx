
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="z-50">
          <img
            src="/lovable-uploads/36967f7f-75c3-42df-a8fb-37748f910607.png"
            alt="SVN Bay Parck Logo"
            className="h-12 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link to="/" className="text-sm font-medium hover:text-ocean transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-ocean transition-colors">
            About
          </Link>
          <Link to="/real-estate" className="text-sm font-medium hover:text-ocean transition-colors">
            Real Estate
          </Link>
          <Link to="/resort" className="text-sm font-medium hover:text-ocean transition-colors">
            Resort
          </Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-ocean transition-colors">
            Gallery
          </Link>
          <Link to="/location" className="text-sm font-medium hover:text-ocean transition-colors">
            Location
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-ocean transition-colors">
            Blog
          </Link>
          <Link to="/contact">
            <Button 
              variant="outline" 
              className="border-ocean text-ocean hover:bg-ocean hover:text-white transition-all"
            >
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled || isMenuOpen ? 'text-ocean' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-ocean' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-40 flex items-center justify-center">
            <nav className="flex flex-col items-center space-y-8 text-lg">
              <Link 
                to="/" 
                className="text-lg font-medium text-ocean" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-medium hover:text-ocean transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/real-estate" 
                className="text-lg font-medium hover:text-ocean transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Real Estate
              </Link>
              <Link 
                to="/resort" 
                className="text-lg font-medium hover:text-ocean transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Resort
              </Link>
              <Link 
                to="/gallery" 
                className="text-lg font-medium hover:text-ocean transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/location" 
                className="text-lg font-medium hover:text-ocean transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </Link>
              <Link 
                to="/blog" 
                className="text-lg font-medium hover:text-ocean transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-lg font-medium hover:text-ocean transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
