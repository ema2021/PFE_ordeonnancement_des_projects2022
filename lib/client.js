import { createClient } from "@supabase/supabase-js";
// ** une fonction de supabse pour initialiser le client supabse

export const supabase = createClient(
	//! Extraire les keys de supabase a partir de .env

	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	{ fetch: fetch }
);
