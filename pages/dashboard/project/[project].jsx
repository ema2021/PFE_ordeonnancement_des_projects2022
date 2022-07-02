import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import jsPERT, { START, END } from "js-pert";
import { transformJson } from "@/lib/myfunctions";
import TaskComponent from "@/components/dashboard/taskComponent";
import BzButton from "@/components/dashboard/BzButton";
import { supabase } from "@/lib/client";
import { getProgress } from "@/lib/myfunctions";
import moment from "moment";
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
Date.prototype.addDays = function (days) {
	const date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};

export function pertToGantt(projet, arryJson, tasksdata, es, lf, cpath) {
	var json = [];
	Object.keys(arryJson).map((item) => {
		if (item != START && item != END) {
			const id_num = Number(item.replace("Task_", ""));
			const taskfiltered = tasksdata.filter((el) => el.id == id_num)[0];
			const task_name = taskfiltered.titre;
			const debut = new Date(projet.debut);
			const earliestStart = Math.trunc(es[item]);
			const latestFinish = Math.trunc(taskfiltered.duree);
			const task = {
				start: debut.addDays(earliestStart),
				end: debut.addDays(latestFinish),
				name: task_name,
				id: item,
				progress: 45,
				isDisabled: false,
				dependencies: arryJson[item].predecessors,
				styles: {
					progressColor:
						cpath.indexOf(item) < 0 ? "#355691" : "#A40606",
					progressSelectedColor:
						cpath.indexOf(item) < 0 ? "#355691" : "#A40606",
					barBackgroundColor:
						cpath.indexOf(item) < 0 ? "#AEB8FE" : "#F15156",
				},
			};
			json.push(task);
		}
	});
	return json;
}

const ProjectPage = ({ projets, tache, error, data_pert }) => {
	const { user } = useAuth();
	const router = useRouter();
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
	// const { network } = jsPERT(transformJson(tache));

	const projectid = router.query.project;
	//format taches to the specified format  by jsPERT

	// useEffect(() => {
	// 	if (tache?.length > 0) {
	// 		try {
	// 			const { network } = jsPERT(transformJson(tache));
	// 			const pertdata = jsPERT(transformJson(tache));
	// 			setPert(pertdata);
	// 			setGraph(network);
	// 		} catch (er) {
	// 			console.log(er);
	// 		}
	// 	}
	// }, [tache]);
	// console.log(JSON.stringify(graph, null, 2));
	return (
		<div className="h-full space-y-2 w-full ">
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
						<p>
							<span className="font-semibold text-cyan-600">
								Commence le :
							</span>{" "}
							{moment(projets?.created_at).format(
								"MMMM DD, YYYY"
							)}
						</p>
						<p>
							<span className="font-semibold text-cyan-600">
								Termine :
							</span>{" "}
							{moment(
								projets?.created_at + projets?.duree
									? projets?.duree
									: 0
							).format("MMMM DD, YYYY")}
						</p>
					</div>
					<p className="px-4 py-2 leading-6 text-gray-800 md:px-2">
						{projets?.description}
					</p>
				</div>
				<div
					className={`${
						!projets ? "hidden" : "flex"
					} h-full w-full items-center justify-center p-2  md:items-start`}
				>
					<Link href={`./task/${projets?.id}`} passHref={true}>
						<a>
							<BzButton className="bg-blue-600 text-white rounded-full ">
								<AddIcon strokeWidth={8} />
								Ajouter tâche
							</BzButton>
						</a>
					</Link>
				</div>
			</div>
			<div
				className={`grid gap-2 sm:grid-cols-3 ${
					projets ? "" : "hidden"
				}`}
			>
				<div className="flex flex-col justify-center space-y-2 sm:col-span-2">
					{tache?.map((item, index) => {
						return (
							<TaskComponent
								key={item.id}
								state={item.state}
								number={index + 1}
							>
								{item.titre}
							</TaskComponent>
						);
					})}
					{
						<p
							className={`${projets} ${
								projets || tache ? "" : "hidden"
							}`}
						>
							{tache?.length == 0
								? "Aucune tâche dasn ce projet"
								: ""}
						</p>
					}
				</div>
				<div className="flex  items-center justify-center ">
					<div className="  flex h-full w-full flex-col items-center justify-between  gap-4    bg-blue-50 py-12   ">
						<span className="font-semibold text-gray-500">
							Complete
						</span>
						<span className="bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 bg-clip-text text-7xl font-bold text-transparent">
							{getProgress(projets?.created_at, projets?.duree)} %
						</span>
						<span className="text-2xl font-bold text-purple-800">
							Progres
						</span>
					</div>
				</div>
			</div>
			{Object.keys(data_pert).length > 0 ? (
				<div className="flex justify-center ">
					<PertChart data={data_pert} />
				</div>
			) : (
				""
			)}
			{network ? (
				<Gantt
					arrowColor="#02A9EA"
					tasks={pertToGantt(
						projets,
						network,
						tache,
						earliestStartTimes,
						latestFinishTimes,
						criticalPath
					)}
				/>
			) : (
				""
			)}
			{/* <div>{JSON.stringify(earliestStartTimes)}</div> */}
			{/* <p className="text-lg">{JSON.stringify(latestFinishTimes)}</p> */}
			{/* <p className="text-lg bg-red-200">{JSON.stringify(tache)}</p> */}

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

			{/* {error_project} */}
			{/* {error} */}
		</div>
	);
};

export default ProjectPage;

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
		var pertData = [];

		if (tache?.length > 0) pertData = jsPERT(transformJson(tache));
		return {
			props: {
				projets: projets,
				tache: tache,
				data_pert: pertData,
				// errors: { taches: JSON.stringify(error_tache) },
			},
		};
	}
	console.log("Please login");
	return { props: {}, redirect: { destination: "/" } };
}
