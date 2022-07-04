/**
 * Affiche les informations de projet.
 * @param projets,Le projet
 * @param tache, les taches de ce projets
 * @param error, erreurs d'extraction des projets
 * @param  data_pert, le resultat de calcul pert
 * @param employes, les employes
 */

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import jsPERT, { START, END } from "js-pert";
import { transformJson } from "@/lib/myfunctions";
import TaskComponent from "@/components/dashboard/taskComponent";
import BzButton from "@/components/dashboard/BzButton";
import { supabase } from "@/lib/client";
import { getProgress, pertToGantt } from "@/lib/myfunctions";
import moment from "moment";
import "moment/locale/fr";
import AddIcon from "@mui/icons-material/Add";
import PertChart from "./task/pert_chart/pert_chart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
	Gantt,
	Task,
	EventOption,
	StylingOption,
	ViewMode,
	DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
moment.locale("fr");

/**
 * Fonction pour ajouter les jours a une date @param days nombre de jours a ajouter */
Date.prototype.addDays = function (days) {
	const date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};
/**
 *
 * @param {int} projectid le projet id
 * @param {int} duration la duree calcule par pert
 */
export async function addProjectDuration(projectid, duration) {
	if (projectid && duration) {
		try {
			const { data, error } = await supabase
				.from("projets")
				.update({ duree: duration })
				.eq("id", projectid);
		} catch (e) {
			alert("Error updating	duree" + e.message);
		}
	}
}

const ProjectPage = ({ projets, tache, error, data_pert, employes }) => {
	const [view, setView] = useState(ViewMode.Week);
	const { user } = useAuth();
	const router = useRouter();
	let FinishTimes = [];
	var project_duree_par_pert = 0;
	const {
		network,
		activitiesPrams,
		earliestStartTimes,
		earliestFinishTimes,
		latestStartTimes,
		latestFinishTimes,
		slack,
		criticalPath,
	} = data_pert;
	if (latestFinishTimes) {
		FinishTimes = Object.keys(latestFinishTimes).map(
			(item) => latestFinishTimes[item]
		);
	}
	if (earliestStartTimes && criticalPath) {
		project_duree_par_pert = Object.keys(earliestStartTimes)
			.map((item) =>
				criticalPath.indexOf(item) > -1 ? earliestStartTimes[item] : 0
			)
			.reduce((total, value) => total + value);
	}

	const projectid = router.query.project;
	useEffect(() => {
		addProjectDuration(projectid, project_duree_par_pert);
	}, []);

	return (
		<div className="h-full space-y-2 w-full ">
			<Head>
				<title>Affichage de Projet {projectid}</title>
			</Head>
			<Link href="/dashboard" passHref={true}>
				<a className="flex w-24 items-center  gap-1  px-3 py-1 font-semibold text-gray-700 hover:bg-cyan-100 ">
					<ArrowBackIcon />
					Retour
				</a>
			</Link>
			<div className="grid md:grid-cols-3  ">
				<div className="grid gap-3 md:col-span-2">
					<h1 className="text-2xl capitalize sm:text-3xl md:text-4xl xl:text-5xl">
						{projets?.titre}
					</h1>
					<div
						className={` ${
							!projets ? "hidden" : "flex"
						} w-full items-center gap-8   text-gray-700`}
					>
						<p className="capitalize">
							<span className="font-semibold text-cyan-600 ">
								Commence le :
							</span>{" "}
							{moment(
								projets?.debut || projets.created_at
							).format("MMMM DD, YYYY")}
						</p>
						<p
							className={`${
								tache?.length > 0 ? "" : "hidden"
							} capitalize`}
						>
							<span className="font-semibold text-cyan-600">
								Termine :
							</span>{" "}
							{moment(projets?.debut || projets.created_at)
								.add(
									Math.trunc(project_duree_par_pert) ||
										projets?.duree ||
										10,
									"d"
								)
								.format("MMMM DD, YYYY")}
						</p>
					</div>
					<p className="px-4 py-2 leading-6 text-gray-800 md:px-2 capitalize ">
						{projets?.description}
					</p>
				</div>
				<div
					className={`${
						!projets ? "hidden" : "flex"
					} h-full  items-center justify-center p-2  md:items-start w-full`}
				>
					<Link
						href={`./task/${projets?.id}`}
						passHref={true}
						className="w-full"
					>
						<a className="px-4">
							<BzButton className="bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 px-4">
								<AddIcon strokeWidth={8} />
								Ajouter tâche
							</BzButton>
						</a>
					</Link>
				</div>
			</div>
			<div
				className={`grid gap-2 sm:grid-cols-4 ${
					projets ? "" : "hidden"
				}`}
			>
				<div
					className={`flex flex-col gap-2  sm:col-span-3 ${
						tache?.length > 0 ? "" : "place-content-center h-96"
					}`}
				>
					{tache
						?.sort((a, b) => a.id - b.id)
						.map((item, index) => {
							return (
								// carte de tache
								<TaskComponent
									key={item.id}
									{...item}
									number={index + 1}
									employes={employes.filter((emp) =>
										item.employe_id?.includes(emp.id)
									)}
								>
									{item.titre}
								</TaskComponent>
							);
						})}
					{
						<p
							className={`${projets} ${
								projets || tache ? "" : "hidden"
							} `}
						>
							{tache?.length == 0 ? (
								<div className="grid gap-4 justify-center">
									<div className=" h-56 w-56">
										<Image
											src="/undraw_joyride_re_968t.svg"
											className=""
											alt="Joyride"
											height={120}
											width={120}
											layout="responsive"
										/>
									</div>
									<p className="text-lg relative text-gray-400 text-center">
										Il n'y a pas de tâches dans ce projet{" "}
									</p>
									<Link
										href={`./task/${projets?.id}`}
										passHref={true}
									>
										<a>
											<BzButton className="bg-blue-600 text-white rounded px-4 w-full ">
												<AddIcon strokeWidth={8} />
												Ajouter tâche
											</BzButton>
										</a>
									</Link>
								</div>
							) : (
								""
							)}
						</p>
					}
				</div>
				<div
					className={`flex  items-center justify-center ${
						tache?.length > 0 ? "" : "hidden"
					}`}
				>
					<div className=" w-full  flex px-2 flex-col items-center justify-between  gap-4     py-12   ">
						<span className="font-semibold text-gray-500">
							Complete
						</span>
						<span className="bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 bg-clip-text text-5xl lg:text-5xl  font-bold text-transparent">
							{Math.round(
								getProgress(
									projets?.debut || projets?.created_at,
									Math.trunc(project_duree_par_pert) ||
										projets?.duree ||
										10
								)
							)}{" "}
							%
						</span>
						<span className="text-2xl font-bold text-purple-800">
							Progres
						</span>
						<p className="text-gray-600">
							Durée Complet de Projet:{" "}
							<span className="text-green-700">
								{Math.trunc(project_duree_par_pert)}
							</span>{" "}
						</p>
					</div>
				</div>
			</div>
			{Object.keys(data_pert).length > 0 ? (
				<div className="flex justify-center ">
					{/* Afficher reseu pert */}
					<PertChart data={data_pert} />
				</div>
			) : (
				""
			)}
			{network ? (
				<div className="flex justify-center overflow-x-scroll">
					{/* afficher gant s'il des taches dans le projet */}
					<Gantt
						todayColor="#FFD3BA"
						viewMode={view}
						arrowColor="#02A9EA"
						locale="fr"
						tasks={pertToGantt(
							projets,
							network,
							tache,
							earliestStartTimes,
							latestFinishTimes,
							criticalPath
						)}
						className="mx-auto"
					/>
				</div>
			) : (
				""
			)}

			<p className="flex flex-col    h-full w-1/2 mx-auto ">
				{!projets && (
					<div className="m-12 grid gap-6 ">
						<p className="text-center  text-4xl text-gray-600">
							Ce projet n'existe pas
						</p>
						<BzButton className="bg-blue-600  py-4 text-xl text-white hover:bg-transparent hover:text-blue-600 border-blue-600 hover:border ">
							Créer une projet
						</BzButton>
					</div>
				)}
				<p className="bg-yellow-300">{error?.tache}</p>
			</p>
		</div>
	);
};

export default ProjectPage;

/**	Extracter les donnees a partir de supabase  et envoyer au frontend
 * @param  {int} projectid
 */

export async function getServerSideProps({ req, params }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	const number = params.project;
	console.log(number);
	if (user) {
		let { data: projets, error_project } = await supabase
			.from("projets")
			.select("*")
			.eq("id", number.toString())
			.eq("decideur_id", user?.id)
			.single();
		// console.log(project);
		let { data: tache, error_tache } = await supabase
			.from("tache")
			.select("*")
			.eq("projectid", number?.toString());
		let { data: ressources, error_ressources } = await supabase
			.from("ressources")
			.select("*")
			.eq("decideur_id", user?.id);
		var pertData = [];

		try {
			pertData = jsPERT(transformJson(tache));
		} catch (e) {
			console.log(e);
		}
		return {
			props: {
				projets: projets,
				tache: tache,
				data_pert: pertData,
				employes: ressources,
			},
		};
	}
	console.log("Please login");
	return { props: {}, redirect: { destination: "/" } };
}
