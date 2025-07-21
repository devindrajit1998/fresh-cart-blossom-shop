import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyInfo = () => {
  return (
    <div className="space-y-4">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">G</span>
        </div>
        <span className="text-2xl font-bold font-playfair">GroceryHub</span>
      </Link>
      <p className="text-gray-400 text-sm">
        Your trusted partner for fresh, quality groceries delivered right to your doorstep. 
        We believe in making healthy living accessible to everyone.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Youtube className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;