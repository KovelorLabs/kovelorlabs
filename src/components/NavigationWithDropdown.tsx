
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Zap, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavItem, ServiceItem } from '@/types/navigation';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const NavigationWithDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceItems: ServiceItem[] = [
    { 
      name: 'Custom Applications', 
      href: '/services/custom-applications',
      icon: Code,
      description: 'Tailored software solutions'
    },
    { 
      name: 'Business Automation', 
      href: '/services/business-automation',
      icon: Zap,
      description: 'Streamline your operations'
    },
    { 
      name: 'AI Integrations', 
      href: '/services/ai-integrations',
      icon: Brain,
      description: 'Harness AI power'
    },
    { 
      name: 'Consulting', 
      href: '/services/consulting',
      icon: Users,
      description: 'Strategic technology guidance'
    }
  ];

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsOpen(false);
  };

  const handleMobileItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/fe05282e-a0eb-4f0d-a3df-02b2ce733e85.png" 
              alt="Kovelor Labs" 
              className="h-6 sm:h-8 w-auto"
            />
          </Link>

          <DesktopNavigation 
            navItems={navItems}
            serviceItems={serviceItems}
            isServicesOpen={isServicesOpen}
            setIsServicesOpen={setIsServicesOpen}
            handleServiceClick={handleServiceClick}
          />

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-1 sm:p-2"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        <MobileNavigation 
          navItems={navItems}
          serviceItems={serviceItems}
          isOpen={isOpen}
          onItemClick={handleMobileItemClick}
        />
      </div>
    </nav>
  );
};

export default NavigationWithDropdown;
