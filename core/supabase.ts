import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.PLASMO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.PLASMO_PUBLIC_SUPABASE_ANON_KEY!;

// Anon client – relies on RLS policies to restrict access
export const supabase = createClient(supabaseUrl, supabaseAnonKey);