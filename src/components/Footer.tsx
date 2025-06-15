
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/290ef01c-1bb4-4fc0-97d8-274aec95e4d5.png" 
                alt="Kovelor Labs" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm">
              Transform your business with custom technology solutions. Expert development in applications, automation, and AI integrations.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@kovelorlabs.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 7094711417</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Coimbatore, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-kovelor-orange">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/custom-applications" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  Custom Applications
                </Link>
              </li>
              <li>
                <Link to="/services/business-automation" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-integrations" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  AI Integrations
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-kovelor-orange">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  For Startups
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  For Enterprises
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-kovelor-orange">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-kovelor-orange transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © 2025 Kovelor Labs. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.linkedin.com/company/kovelor-labs/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 text-gray-300 hover:text-kovelor-orange" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.instagram.com/kovelor_labs/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 text-gray-300 hover:text-kovelor-orange" />
                </a>
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-kovelor-orange transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-gray-300 hover:text-kovelor-orange transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
