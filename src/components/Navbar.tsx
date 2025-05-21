
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-50">
            <img
              src="/lovable-uploads/36967f7f-75c3-42df-a8fb-37748f910607.png"
              alt="SVN Bay Parck Logo"
              className="h-12 md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link to="/" className="text-sm font-normal hover:text-slate-dark transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-normal hover:text-slate-dark transition-colors">
              About
            </Link>
            <Link to="/real-estate" className="text-sm font-normal hover:text-slate-dark transition-colors">
              Real Estate
            </Link>
            <Link to="/resort" className="text-sm font-normal hover:text-slate-dark transition-colors">
              Resort
            </Link>
            <Link to="/gallery" className="text-sm font-normal hover:text-slate-dark transition-colors">
              Gallery
            </Link>
            <Link to="/location" className="text-sm font-normal hover:text-slate-dark transition-colors">
              Location
            </Link>
            <Link to="/blog" className="text-sm font-normal hover:text-slate-dark transition-colors">
              Journal
            </Link>
            <Link to="/contact" className="ml-4">
              <button 
                className="border border-slate text-slate hover:bg-slate hover:text-white transition-all px-8 py-2.5 text-sm font-normal"
              >
                Contact
              </button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || isMenuOpen ? 'text-slate' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-slate' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-background z-40 flex flex-col justify-center items-center overflow-hidden">
          <nav className="flex flex-col items-center space-y-8">
            <Link 
              to="/" 
              className="text-lg font-normal text-slate-dark" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-normal hover:text-slate-dark transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/real-estate" 
              className="text-lg font-normal hover:text-slate-dark transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Real Estate
            </Link>
            <Link 
              to="/resort" 
              className="text-lg font-normal hover:text-slate-dark transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Resort
            </Link>
            <Link 
              to="/gallery" 
              className="text-lg font-normal hover:text-slate-dark transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/location" 
              className="text-lg font-normal hover:text-slate-dark transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </Link>
            <Link 
              to="/blog" 
              className="text-lg font-normal hover:text-slate-dark transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Journal
            </Link>
            <Link 
              to="/contact" 
              className="text-lg font-normal pt-4 border-t border-slate/10 hover:text-slate-dark transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
