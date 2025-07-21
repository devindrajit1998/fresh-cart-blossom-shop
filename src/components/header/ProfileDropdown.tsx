import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelector } from "react-redux";
import { logoutUser } from "@/service/ProfileService";
import { AppState } from "@/types";

const ProfileDropdown = () => {
  const session_token = useSelector((state: AppState) => state.auth.session_token);
  const user = useSelector((state: AppState) => state.profile.profile);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex hover:bg-primary/10"
        >
          {session_token && user?.avatar_url ? (
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <User className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {session_token && (
          <div className="px-4 py-2 border-b mb-2">
            <div className="flex items-center space-x-2">
              {user?.avatar_url ? (
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <User className="h-5 w-5" />
              )}
              <div>
                <div className="font-semibold">
                  {user?.first_name || user?.email || "User"}
                </div>
                <div className="text-xs text-gray-500">
                  {user?.email}
                </div>
              </div>
            </div>
          </div>
        )}
        <DropdownMenuItem>
          <Link to="/profile" className="w-full">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to={session_token ? "/orders" : "/login"}
            className="w-full"
          >
            Orders
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to={session_token ? "/wishlist" : "/login"}
            className="w-full"
          >
            Wishlist
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {session_token ? (
          <DropdownMenuItem
            onClick={async () => {
              await logoutUser();
              window.location.reload();
            }}
          >
            Logout
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <Link to="/login" className="w-full">
              Sign In
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;