import axios from "axios";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const fetchCategories = async () => {
  const response = await axios.get(
    `${SUPABASE_URL}/rest/v1/categories`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
      },
    }
  );
  return response.data;
}; 