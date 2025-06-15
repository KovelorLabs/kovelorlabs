
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavItem, ServiceItem } from '@/types/navigation';
import ServicesDropdown from './ServicesDropdown';

interface DesktopNavigationProps {
  navItems: NavItem[];
  serviceItems: ServiceItem[];
  isServicesOpen: boolean;
  setIsServicesOpen: (open: boolean) => void;
  handleServiceClick: () => void;
}

const DesktopNavigation = ({ 
  navItems, 
  serviceItems, 
  isServicesOpen, 
  setIsServicesOpen, 
  handleServiceClick 
}: DesktopNavigationProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
      <Link
        to="/"
        className="kovelor-nav-link"
      >
        Home
      </Link>
      
      {/* Services Dropdown */}
      <div 
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <Link
          to="/services"
          className="kovelor-nav-link cursor-pointer"
        >
          Services
        </Link>
        
        <ServicesDropdown 
          serviceItems={serviceItems}
          isOpen={isServicesOpen}
          onServiceClick={handleServiceClick}
        />
      </div>

      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="kovelor-nav-link"
        >
          {item.name}
        </Link>
      ))}

      <Link to="/contact">
        <Button className="bg-kovelor-orange hover:bg-kovelor-orange/90 text-white text-base px-4 py-2">
          Start Your Project
        </Button>
      </Link>
    </div>
  );
};

export default DesktopNavigation;
