import { supabase } from "@/lib/client";
export default function Test({ data }) {
	return (
		<div>
			{data.map((item) => {
				return <p key={item.id}>{item.titre}</p>;
			})}
		</div>
	);
}
export async function getServerSideProps({ req, res }) {
	let { data: tache, error } = await supabase.from("tache").select("titre");
	return { props: { data: tache } };
}
