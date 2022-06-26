import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TaskComponent from "@/components/dashboard/taskComponent";
import BzButton from "@/components/dashboard/BzButton";
import { supabase } from "@/lib/client";
import { getProgress } from "@/lib/myfunctions";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";
import PertChart from "./task/pert_chart/pert_chart";
const ProjectPage = ({ projets, tache, error }) => {
	const { user } = useAuth();
	const router = useRouter();
	const projectid = router.query.project;
	//format taches to the specified format  by jsPERT

	useEffect(() => {
		// if (!user) router.push("/");
		// 	// alert(ctx.project);
		// 	console.log(projectid);
	}, [user, router]);
	return (
		<div className="h-full space-y-2 w-full ">
			<Link href="/dashboard" passHref={true}>
				<a className="flex w-24 items-center  gap-1  px-3 py-1 font-semibold text-gray-700 hover:bg-cyan-100 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
						/>
					</svg>
					Back
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
								Starts :
							</span>{" "}
							{moment(projets?.created_at).format(
								"MMMM DD, YYYY"
							)}
						</p>
						<p>
							<span className="font-semibold text-cyan-600">
								Ends :
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
								Add new Task
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
							{tache?.length == 0 ? "No tasks available" : ""}
						</p>
					}
				</div>
				<div className="flex  items-center justify-center ">
					<div className="  flex h-full w-full flex-col items-center justify-between  gap-4    bg-blue-50 py-12   ">
						<span className="font-semibold text-gray-500">
							Completed
						</span>
						<span className="bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 bg-clip-text text-7xl font-bold text-transparent">
							{getProgress(projets?.created_at, projets?.duree)} %
						</span>
						<span className="text-2xl font-bold text-purple-800">
							Progress
						</span>
					</div>
				</div>
				<div className="col-span-3">
					<PertChart project={4} />
				</div>
			</div>
			<p className="flex flex-col    h-full w-1/2 mx-auto ">
				{!projets && (
					<div className="m-12 grid gap-6 ">
						<p className="text-center  text-4xl text-gray-600">
							This project doesn't exist
						</p>
						<BzButton className="bg-blue-600  py-4 text-xl text-white hover:bg-transparent hover:text-blue-600 border-blue-600 hover:border ">
							Create new project
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
		return {
			props: {
				projets: projets,
				tache: tache,
				// errors: { taches: JSON.stringify(error_tache) },
			},
		};
	}
	console.log("Please login");
	const error = "not connected";
	return { props: { error: error } };
}
