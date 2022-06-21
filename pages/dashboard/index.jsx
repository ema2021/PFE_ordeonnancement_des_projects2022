import Link from "next/link";
import moment from "moment";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ProjectCard from "@/components/dashboard/projectCard";
import BzButton from "@/components/dashboard/BzButton";
import AddIcon from "@mui/icons-material/Add";
import { useAuth, VIEWS } from "@/lib/auth";
import { supabase } from "@/lib/client";
// import { getServerSideProps } from "pages/profile";
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

	return (
		<>
			{user && (
				<div className="  items-center justify-center space-y-8 py-8 px-2 lg:px-10 xl:px-12">
					<div className="flex justify-between gap-2">
						<div className="grid h-10  grid-cols-3 divide-x-2 divide-cyan-500 rounded-md border-[1px] border-cyan-500 shadow-xl ">
							<BzButton className="rounded-r-none hover:bg-cyan-500 hover:text-white">
								active
							</BzButton>
							<BzButton className="rounded-none hover:bg-cyan-500 hover:text-white">
								{" "}
								hold
							</BzButton>
							<BzButton className="rounded-r-md rounded-l-none hover:bg-cyan-500 hover:text-white">
								Complete
							</BzButton>
						</div>
						<Link href="/dashboard/project/edit">
							<a className="h-10 w-10 flex px-4 py-2 items-center uppercase font-semibold text-lg rounded-full bg-cyan-600 text-white hover:bg-blue-800 sm:w-auto hover:scale-105 transition ease-in-out duration-75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="h-6 w-6"
									viewBox="0 0 16 16"
									strokeWidth={8}
								>
									<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
								</svg>
								<span className="hidden md:block">new</span>
							</a>
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
									<Link
										href={`/dashboard/project/${item.id}`}
										key={item.id}
									>
										<a>
											<ProjectCard
												percent={getProgress(
													item.created_at,
													item.duree
												)}
												title={item.titre}
											/>
										</a>
									</Link>
								);
							})}
						{data?.length == 0 && (
							<div className="grid place-content-center gap-6  py-32 ">
								<span className="text-2xl">
									Vous n'avez pas de projet
								</span>
								<button className="flex items-center justify-center gap-1 rounded bg-blue-600 py-2 px-4 font-semibold uppercase text-white">
									<AddIcon />
									Creer projet
								</button>
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
			"public, s-maxage=10, stale-while-revalidate=59"
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
