import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;

// Server-only client (service role — never expose to browser)
export const supabase = createClient(supabaseUrl, supabaseServiceKey);
