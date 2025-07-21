import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "@/types";

interface RouteGuardProps {
  children: React.ReactNode;
}

// ProtectedRoute: Only for authenticated users
export function ProtectedRoute({ children }: RouteGuardProps) {
  const user = useSelector((state: AppState) => state.auth.session_token);
  return user ? <>{children}</> : <Navigate to="/login" replace />;
}

// PublicRoute: Only for unauthenticated users
export function PublicRoute({ children }: RouteGuardProps) {
  const user = useSelector((state: AppState) => state.auth.session_token);
  return !user ? <>{children}</> : <Navigate to="/profile" replace />;
}