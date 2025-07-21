import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import CartDrawer from "./CartDrawer";
import MegaMenu from "./MegaMenu";
import TopBar from "./header/TopBar";
import SearchBar from "./header/SearchBar";
import HeaderIcons from "./header/HeaderIcons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBar />

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src="logo.png" alt="GroceryHub" className="w-[150px]" />
            </Link>

            <SearchBar />

            <HeaderIcons 
              onCartClick={() => setIsCartOpen(true)}
              onMobileMenuClick={() => setIsMobileMenuOpen(true)}
            />
          </div>
        </div>
      </header>

      {/* Mega Menu - Hidden on mobile */}
      <div className="hidden md:block">
        <MegaMenu />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
