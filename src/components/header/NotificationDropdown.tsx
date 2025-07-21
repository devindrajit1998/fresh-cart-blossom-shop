import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NotificationDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex relative hover:bg-primary/10"
        >
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
            <p className="text-sm text-muted-foreground">
              Your fresh groceries have been delivered!
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-4">
          <div>
            <p className="font-medium">Special Offer</p>
            <p className="text-sm text-muted-foreground">
              20% off on organic vegetables today!
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;