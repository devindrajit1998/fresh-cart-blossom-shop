import { MapPin, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="gradient-primary text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-4 overflow-hidden">
            <div className="flex items-center space-x-1 flex-shrink-0">
              <MapPin className="h-4 w-4" />
              <span className="truncate">Deliver to 12345</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span className="truncate">+1 (555) 123-4567</span>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <span className="text-right">
              Free delivery on orders over $50
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;