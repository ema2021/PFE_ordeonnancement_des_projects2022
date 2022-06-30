import { supabase } from "@/lib/client";
export default async function search(req, res) {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	
		res.status(200).json(results);
	}
	res.status(404).json({ message: "Invalid" });
}
