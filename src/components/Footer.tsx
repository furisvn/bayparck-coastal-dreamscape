
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/36967f7f-75c3-42df-a8fb-37748f910607.png" 
              alt="SVN Bay Parck" 
              className="h-16"
            />
            <p className="text-sm text-gray-200 leading-relaxed">
              Discover a rare fusion of CRZ-compliant premium plots, signature sea-facing villas, 
              and an exclusive boutique resort — all in one gated estate.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-ocean-light transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-ocean-light transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/real-estate" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/resort" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Resort
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-serif mb-6">Legal</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-200">LP No. 31/2020/1178 / DTCP / DPMS</li>
              <li className="text-sm text-gray-200">AP RERA No: P01070381701</li>
              <li className="text-sm text-gray-200">SUDA Approved</li>
              <li className="text-sm text-gray-200">Located outside the Coastal Regulation Zone (CRZ)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-200">
                  Koshta Junction, Jeerupalem, Srikakulam District, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-sm text-gray-200">+91 85999 24242 / +91 85999 36363</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <a href="mailto:info@svnsjd.com" className="text-sm text-gray-200 hover:text-white transition-colors">
                  info@svnsjd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} SVN Bay Parck. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-xs text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
