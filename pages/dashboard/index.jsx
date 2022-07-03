import Link from "next/link";
import Head from "next/head";
import moment from "moment";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ProjectCard from "@/components/dashboard/projectCard";
import BzButton from "@/components/dashboard/BzButton";
import AddIcon from "@mui/icons-material/Add";
import { useAuth, VIEWS } from "@/lib/auth";
import { supabase } from "@/lib/client";
export function getProgress(startDate, Duration) {
	var given = moment(startDate, "YYYY-MM-DD");
	var current = moment().startOf("day");

	//Difference in number of days
	var diff = moment.duration(current.diff(given)).asDays();
	return (diff * Duration) / 100;
}

export default function Index({ data }) {
	const { user, view, signOut } = useAuth();
	const router = useRouter();
	// console.log(data);
	useEffect(() => {
		// if (!user) router.push("/");
	}, [user, router]);
	return (
		<>
			{user && (
				<div className="  items-center justify-center space-y-8 py-8 px-2  xl:px-12">
					<Head>
						<title>Dashboard des projets</title>
					</Head>
					<div className="flex justify-between gap-2">
						<div className="grid h-10  grid-cols-3 divide-x-2 divide-cyan-500 rounded-md border-[1px] border-cyan-500 shadow-xl ">
							<BzButton className="rounded-r-none hover:bg-cyan-500 hover:text-white">
								active
							</BzButton>
							<BzButton className="rounded-none hover:bg-cyan-500 hover:text-white">
								{" "}
								attente
							</BzButton>
							<BzButton className="rounded-r-md rounded-l-none hover:bg-cyan-500 hover:text-white">
								Complet
							</BzButton>
						</div>
						<Link href="/dashboard/project/edit" passHref={true}>
							<button className=" flex px-4 py-2 items-center justify-center uppercase font-semibold text-lg  bg-cyan-600 text-white hover:bg-blue-800 md:w-auto hover:scale-105 transition ease-in-out duration-75 w-10 rounded">
								<AddIcon />
								<span className="hidden md:block">Nouveau</span>
							</button>
						</Link>
					</div>
					<div className="grid gap-2 ">
						{data
							?.sort((a, b) => {
								return a.id - b.id;
							})
							.reverse()
							.map((item) => {
								return (
									<ProjectCard
										percent={Math.trunc(
											getProgress(
												item.debut || item.created_at,
												item.duree || 0
											)
										)}
										title={item.titre}
										debut={item.debut || item.created_at}
										id={item.id}
										duree={item.duree || 0}
										key={item.id}
										created_at={item.created_at}
									/>
								);
							})}
						{data?.length == 0 && (
							<div className="grid place-content-center gap-6  py-32 ">
								<span className="text-2xl">
									Vous n'avez pas de projet
								</span>
								<Link href="/dashboard/project/edit">
									<button className="flex items-center justify-center gap-1 rounded bg-blue-600 py-2 px-4 font-semibold uppercase text-white">
										<AddIcon />
										Creer projet
									</button>
								</Link>
							</div>
						)}
						{!data && (
							<div className="grid place-content-center  bg-red-100 py-2 text-red-600 ">
								Erreur d'otenir les donnees de serveur
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}
// const user = supabase.auth.api.getUserByCookie();

// // console.log(user);
// export async function getServerSideProps() {

// }
export async function getServerSideProps({ req, res }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	if (user) {
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=2, stale-while-revalidate=59"
		);
		let { data: projets, error } = await supabase
			.from("projets")
			.select("*")
			.eq("decideur_id", user?.id);

		return { props: { data: projets } };
	}
	return {
		redirect: {
			permanent: false,
			destination: `/`,
		},
	};
}
