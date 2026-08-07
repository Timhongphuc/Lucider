import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xbcwndoclcrqtffzupxy.supabase.co'
const supabaseAnonKey = 'sb_publishable_NBKtsX8r6J6tOzaGUzywQg_IfDJiUR3'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function test() {
  const { data, error } = await supabase.from('NewsStorage').select('*').order('id', { ascending: true }).single();
  console.log("Data:", data)
  console.log("Error:", error)
}

test()
