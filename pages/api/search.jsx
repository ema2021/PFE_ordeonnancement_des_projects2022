import { supabase } from "@/lib/client";
export default async function search(req, res) {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	if (user) {
		const query = req.query.q;
		let { data: projets, error } = await supabase
			.from("projets")
			.select("*")
			.eq("decideur_id", user.id);
		const results = projets.filter((project) =>
			project.titre.toLowerCase().includes(query.toLowerCase())
		);
		res.status(200).json(results);
	}
	res.status(404).json({ message: "Invalid" });
}
