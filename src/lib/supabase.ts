import { createClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Remove barra final se existir, para evitar erro PGRST125
const supabaseUrl = rawUrl?.endsWith('/') ? rawUrl.slice(0, -1) : rawUrl;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Supabase: Variáveis de ambiente faltando!");
} else {
  console.log("🔌 Supabase: Conectando a", supabaseUrl.substring(0, 20) + "...");
}

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
