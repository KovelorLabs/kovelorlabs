
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavItem, ServiceItem } from '@/types/navigation';

interface MobileNavigationProps {
  navItems: NavItem[];
  serviceItems: ServiceItem[];
  isOpen: boolean;
  onItemClick: () => void;
}

const MobileNavigation = ({ navItems, serviceItems, isOpen, onItemClick }: MobileNavigationProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden text-base sm:text-lg">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border max-h-screen overflow-y-auto">
        <Link
          to="/"
          className="block px-3 py-2.5 kovelor-nav-link"
          onClick={onItemClick}
        >
          Home
        </Link>
        
        {/* Mobile Services */}
        <div className="px-3 py-2">
          <Link
            to="/services"
            className="block kovelor-nav-link mb-2"
            onClick={onItemClick}
          >
            Services
          </Link>
          <div className="space-y-1">
            {serviceItems.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-center space-x-3 px-4 py-2.5 kovelor-nav-link"
                  onClick={onItemClick}
                >
                  <IconComponent className="h-4 w-4 text-kovelor-orange flex-shrink-0" />
                  <span>{service.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="block px-3 py-2.5 kovelor-nav-link"
            onClick={onItemClick}
          >
            {item.name}
          </Link>
        ))}
        
        <div className="px-3 py-2">
          <Link to="/contact">
            <Button 
              className="w-full bg-kovelor-orange hover:bg-kovelor-orange/90 text-white text-base py-2.5"
              onClick={onItemClick}
            >
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
