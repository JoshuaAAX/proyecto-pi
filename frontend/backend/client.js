import { createClient } from "@supabase/supabase-js";
    
const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAPIKEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(supabaseURL, supabaseAPIKEY);
