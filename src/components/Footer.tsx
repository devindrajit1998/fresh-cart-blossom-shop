
import { Link } from 'react-router-dom';
import CompanyInfo from './footer/CompanyInfo';
import FooterLinks from './footer/FooterLinks';
import ContactInfo from './footer/ContactInfo';

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  const categoryLinks = [
    { label: "Vegetables", href: "/products/vegetables" },
    { label: "Fruits", href: "/products/fruits" },
    { label: "Dairy", href: "/products/dairy" },
    { label: "Meat", href: "/products/meat" },
    { label: "Organic", href: "/products/organic" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CompanyInfo />
          <FooterLinks title="Quick Links" links={quickLinks} />
          <FooterLinks title="Categories" links={categoryLinks} />
          <ContactInfo />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GroceryHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
