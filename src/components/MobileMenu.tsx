
import { X, Search, User, Heart, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const categories = [
    'Vegetables', 'Fruits', 'Dairy', 'Bakery', 'Meat', 'Snacks', 'Beverages', 'Organic'
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900 font-playfair">GroceryHub</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>

          {/* User Actions */}
          <div className="space-y-4 mb-6">
            <Link to="/profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <User className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">My Account</span>
            </Link>
            <Link to="/wishlist" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <Heart className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">Wishlist</span>
            </Link>
          </div>

          {/* Categories */}
          <div className="border-t pt-4">
            <h3 className="text-gray-900 font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/products/${category.toLowerCase()}`}
                  className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-4 border-t">
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Deliver to 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
