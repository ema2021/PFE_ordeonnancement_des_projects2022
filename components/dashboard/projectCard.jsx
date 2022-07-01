import Link from "next/link";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { supabase } from "@/lib/client";
import { useAuth } from "@/lib/auth";
const ProjectCard = ({
	percent = 35,
	title = "",
	description = "",
	start = "",
	id,
}) => {
	const router = useRouter(router);
	async function removeProject() {
		const { error_tache } = await supabase
			.from("tache")
			.delete()
			.eq("projectid", id);
		if (error_tache) {
			console.log(error_tache);
		}
		const { error_projets } = await supabase
			.from("projets")
			.delete()
			.match({ id: id });
		if (error_projets) {
			console.log(error_projets);
		}
		router.reload("/dashboard");
	}
	return (
		<div className="flex  justify-between  rounded-lg border  border-cyan-500 py-1 px-2 text-gray-700 hover:bg-cyan-100 shadow-md">
			<p className=" md:w-full p-1 lg:text-xl">
				<Link href={`/dashboard/project/${id}`}>
					<a>{title}</a>
				</Link>
			</p>
			<div className="  hidden w-full  items-center space-x-2 px-2  pt-1 sm:flex lg:text-lg ">
				<span className="w-48">
					{moment(start).format("MMMM DD, YYYY")}
				</span>

				<div className=" w-full rounded-full bg-gray-300 ">
					<div
						className={`  lg:text-md rounded-full bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 p-0.5 text-center text-xs font-medium leading-none text-blue-100 lg:p-1`}
						style={{ width: `${10 + percent + "%"} ` }}
					>
						{" "}
						{percent + "%"}
					</div>
				</div>

				<span>11/01/23</span>
			</div>
			<div className="flex items-center gap-2">
				{" "}
				<Link
					href={`/dashboard/project/update_project/${id}`}
					className="text-cyan-600 shadow-none"
				>
					<a>
						<EditIcon className="text-green-600" />
					</a>
				</Link>
				<button className="shadow-none" onClick={removeProject}>
					<DeleteIcon className="text-red-600" />
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
