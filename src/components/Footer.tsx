
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-dark text-white/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/36967f7f-75c3-42df-a8fb-37748f910607.png" 
              alt="SVN Bay Parck" 
              className="h-16"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              A rare fusion of CRZ-compliant premium plots, signature sea-facing villas, 
              and an exclusive boutique resort — all in one gated estate.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="mailto:info@svnsjd.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-light mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/real-estate" className="text-sm text-white/60 hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/resort" className="text-sm text-white/60 hover:text-white transition-colors">
                  Resort
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-white/60 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-sm text-white/60 hover:text-white transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-white/60 hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-light mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              <li className="text-sm text-white/60">LP No. 31/2020/1178 / DTCP / DPMS</li>
              <li className="text-sm text-white/60">AP RERA No: P01070381701</li>
              <li className="text-sm text-white/60">SUDA Approved</li>
              <li className="text-sm text-white/60">Located outside the CRZ</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-light mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-white/60" />
                <span className="text-sm text-white/60">
                  Koshta Junction, Jeerupalem, Srikakulam District, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-white/60" />
                <span className="text-sm text-white/60">+91 85999 24242 / +91 85999 36363</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-white/60" />
                <a href="mailto:info@svnsjd.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@svnsjd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} SVN Bay Parck. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
