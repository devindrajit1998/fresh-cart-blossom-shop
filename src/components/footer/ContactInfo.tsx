import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
      <div className="space-y-3 text-gray-400">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 mt-0.5 text-primary" />
          <div>
            <p className="text-sm">123 Grocery Street</p>
            <p className="text-sm">Fresh City, FC 12345</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-primary" />
          <span className="text-sm">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-primary" />
          <span className="text-sm">hello@groceryhub.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;