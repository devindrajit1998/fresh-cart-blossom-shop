import { Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "../ThemeToggle";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import { useSelector } from "react-redux";
import { AppState } from "@/types";

interface HeaderIconsProps {
  onCartClick: () => void;
  onMobileMenuClick: () => void;
}

const HeaderIcons = ({ onCartClick, onMobileMenuClick }: HeaderIconsProps) => {
  const cartData = useSelector((state: AppState) => state.cart.cartItems);

  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <Button
        variant="ghost"
        size="icon"
        className="hidden lg:flex hover:bg-primary/10"
      >
        <Heart className="h-5 w-5" />
      </Button>

      <NotificationDropdown />

      <div className="hidden lg:flex">
        <ThemeToggle />
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={onCartClick}
      >
        <ShoppingCart className="h-5 w-5" />
        <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange">
          {cartData?.length}
        </Badge>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMobileMenuClick}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <ProfileDropdown />
    </div>
  );
};

export default HeaderIcons;