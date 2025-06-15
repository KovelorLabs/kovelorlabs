
import { Link } from 'react-router-dom';
import { ServiceItem } from '@/types/navigation';

interface ServicesDropdownProps {
  serviceItems: ServiceItem[];
  isOpen: boolean;
  onServiceClick: () => void;
}

const ServicesDropdown = ({ serviceItems, isOpen, onServiceClick }: ServicesDropdownProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-1 w-72 xl:w-80 bg-background border border-border rounded-lg shadow-lg z-50">
      <div className="p-3 xl:p-4 space-y-2 xl:space-y-3">
        {serviceItems.map((service) => {
          const IconComponent = service.icon;
          return (
            <Link
              key={service.name}
              to={service.href}
              onClick={onServiceClick}
              className="flex items-start space-x-3 p-2.5 xl:p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
            >
              <div className="w-7 h-7 xl:w-8 xl:h-8 bg-kovelor-orange/10 rounded-lg flex items-center justify-center group-hover:bg-kovelor-orange/20 transition-colors flex-shrink-0">
                <IconComponent className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-kovelor-orange" />
              </div>
              <div className="min-w-0">
                <h4 className="font-medium text-foreground group-hover:text-kovelor-orange transition-colors text-xs xl:text-sm">
                  {service.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesDropdown;
