import { createClient } from "@supabase/supabase-js";

const URL = "https://pbhbniqnqsniojnonvlo.supabase.co/";
const API_KEY = "sb_publishable_3IIQjhJbo-3Hn3vEASQRsA_3entGqG4";

export const supabase = createClient(URL, API_KEY);