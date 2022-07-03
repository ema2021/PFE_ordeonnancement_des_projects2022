import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import Avatar from "react-avatar";
import { supabase } from "@/lib/client";
import { useRouter } from "next/router";
const TaskComponent = ({
	children,
	number = "01",
	state = "active",
	description = "",
	id,
	projectid,
	employes,
}) => {
	const router = useRouter();
	async function removeTask() {
		const { error_tache } = await supabase
			.from("tache")
			.delete()
			.eq("id", id);
		router.replace(`/dashboard/project/${projectid}`);
	}
	return (
		<div
			className={` flex items-center justify-between rounded  border border-gray-300 shadow  p-4 text-gray-800 `}
		>
			<div
				className={`
				 flex  items-center justify-start gap-3  `}
			>
				<span className="text-lg font-semibold">{number}</span>
				<span className="md:text-md  text-sm lg:text-lg flex  gap-4">
					{children}
				</span>
			</div>
			<div className="flex gap-4">
				{employes.map((responsable) => {
					return (
						<div key={responsable.id}>
							<div className="flex gap-2 items-center">
								<Avatar
									name={`${responsable.nom} ${responsable.prenom} `}
									round={true}
									size={35}
								/>
								{responsable.nom + "  " + responsable.prenom}
							</div>
						</div>
					);
				})}
			</div>

			<div className="flex items-center gap-2">
				{" "}
				<Link
					href={`/dashboard/project/task/update_task/${projectid}/${id}`}
					className="text-cyan-600 shadow-none"
				>
					<a>
						<EditIcon className="text-green-600" />
					</a>
				</Link>
				<button className="shadow-none" onClick={removeTask}>
					<DeleteIcon className="text-red-600" />
				</button>
			</div>
		</div>
	);
};

export default TaskComponent;
