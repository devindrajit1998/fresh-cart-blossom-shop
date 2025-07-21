export interface AppState {
  auth: {
    session_token: string | null;
    refresh_token: string | null;
    user: any;
    loading: boolean;
    error: string | null;
    authInitialized: boolean;
  };
  general: {
    categories: any[];
    featuredProducts: any[];
    product: any;
    selectedProduct: any;
    loading: boolean;
    error: string | null;
  };
  profile: {
    profile: any;
    loading: boolean;
    error: string | null;
  };
  cart: {
    cartItems: any[];
  };
}