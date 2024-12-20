import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate URL format
if (!supabaseUrl || !supabaseUrl.startsWith('https://')) {
  throw new Error(`Invalid Supabase URL: ${supabaseUrl}. URL must start with https://`)
}

if (!supabaseAnonKey) {
  throw new Error('Missing Supabase Anon Key')
}

// Create the client with validated credentials
export const supabase = createClient(supabaseUrl, supabaseAnonKey)