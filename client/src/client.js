import { createClient } from '@supabase/supabase-js'

const URL = 'https://axzxsumbanntzyjexsfk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4enhzdW1iYW5udHp5amV4c2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3MjIyMjUsImV4cCI6MTk5NjI5ODIyNX0.tzo8lZ9iyQ6f2ptjHrXEP7WVqeSrs0F_xqRf_okdOZM';

export const supabase = createClient(URL, API_KEY);