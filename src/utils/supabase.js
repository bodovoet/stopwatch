import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Add debug logging
console.log('Initializing Supabase with:', { 
  url: supabaseUrl,
  hasKey: !!supabaseAnonKey // Don't log the actual key
});

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false // Since this is just for data submission
  }
})