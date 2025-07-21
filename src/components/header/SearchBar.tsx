import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center flex-1 max-w-xl mx-4 lg:mx-8">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search for products, brands and more..."
          className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-primary focus:ring-primary"
        />
      </div>
    </div>
  );
};

export default SearchBar;