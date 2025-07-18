
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Heart, MapPin, Phone, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ThemeToggle } from './ThemeToggle';
import MobileMenu from './MobileMenu';
import CartDrawer from './CartDrawer';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
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
              <span className="text-right">Free delivery on orders over $50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src="logo.png" alt="GroceryHub" className='w-[150px]' />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-4 lg:mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search for products, brands and more..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button variant="ghost" size="icon" className="hidden lg:flex hover:bg-primary/10">
                <Heart className="h-5 w-5" />
              </Button>
              
              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden lg:flex relative hover:bg-primary/10">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange">
                      2
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="p-4 border-b">
                    <h4 className="font-semibold">Notifications</h4>
                  </div>
                  <DropdownMenuItem className="p-4">
                    <div>
                      <p className="font-medium">Order Delivered</p>
                      <p className="text-sm text-muted-foreground">Your fresh groceries have been delivered!</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-4">
                    <div>
                      <p className="font-medium">Special Offer</p>
                      <p className="text-sm text-muted-foreground">20% off on organic vegetables today!</p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Profile Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden lg:flex hover:bg-primary/10">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/login" className="w-full">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/login" className="w-full">Wishlist</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/login" className="w-full">Sign In</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Toggle */}
              <div className="hidden lg:flex">
                <ThemeToggle />
              </div>

              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange">
                  3
                </Badge>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu - Hidden on mobile */}
      <div className="hidden md:block">
        <MegaMenu />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
