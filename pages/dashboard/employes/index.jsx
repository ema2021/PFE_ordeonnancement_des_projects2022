import { supabase } from "@/lib/client";
import Avatar from "react-avatar";
import Link from "next/link";
import Head from "next/head";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmployeCard from "@/components/dashboard/employeCard";
export default function Employes({ data, error }) {
	return (
		<div className="text-gray-700">
			<Head>
				<title> Listes des Employes</title>
			</Head>
			<Link href="/dashboard" passHref={true}>
				<a className="flex w-24 items-center  gap-1  px-3 py-1 font-semibold text-gray-700 hover:bg-cyan-100 ">
					<ArrowBackIcon /> Retour
				</a>
			</Link>
			<div className="p-4 flex items-center justify-between ">
				<h1 className="text-4xl font-bold">Employes :</h1>
				<Link href="/dashboard/employes/addEmploye">
					<button className="bg-blue-600 py-2 px-2 md:px-3 font-semibold text-white md:rounded flex items-center rounded-full">
						<AddIcon />
						<span className="hidden md:block">Ajouter Employe</span>
					</button>
				</Link>
			</div>
			<div className="grid gap-2">
				{data
					?.sort((a, b) => b.id - a.id)
					.map((item, i) => {
						return <EmployeCard {...item} key={item.id} />;
					})}
				{/* {JSON.stringify(error)} */}
			</div>
		</div>
	);
}

export async function getServerSideProps({ req, res }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	//! verifier si luser est connecté
	if (user) {
		// Extraires les ressources
		let { data: ressources, error } = await supabase
			.from("ressources")
			.select("*")
			.eq("decideur_id", user?.id);
		return { props: { data: ressources, error: error } };
	}

	// ** rediriger luser vers lacceuil (page :/)
	return {
		redirect: {
			permanent: false,
			destination: `/`,
		},
	};
}

// export async function getServerSideProps({ req, res }) {
// 	const { user } = await supabase.auth.api.getUserByCookie(req);

// 	if (user) {
// 		let { data: ressources, error } = await supabase
// 			.from("ressources")
// 			.select("*")
// 			.eq("decideur_id", user?.id);
// 		return { props: { data: ressources } };
// 	}
// 	return {
// 		props: {
// 			data: "Error",
// 			redirect: {
// 				permanent: false,
// 				destination: `/`,
// 			},
// 		},
// 	};
// }
