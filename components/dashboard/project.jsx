import BzButton from "@/components/dashboard/BzButton";
import TaskComponent from "@/components/dashboard/taskComponent";

export default function Project({ projects, taches }) {
	return (
		<>
			<div className="grid md:grid-cols-3  ">
				<div className="grid gap-3 md:col-span-2">
					<h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl ">
						{projects.titre}
					</h1>
					<div className=" flex w-full items-center gap-8   text-gray-700">
						<p>
							<span className="font-semibold text-cyan-600">
								starts :
							</span>{" "}
							Monday, 12 January 2021
						</p>
						<p>
							<span className="font-semibold text-cyan-600">
								Ends :
							</span>{" "}
							Monday, 12 January 2021
						</p>
					</div>
					<p className="px-4 py-2 leading-6 text-gray-800 md:px-2">
						{projects.description}
					</p>
				</div>
				<div className="flex h-full w-full items-center justify-center p-2  md:items-start">
					<BzButton className="bg-blue-600 text-white">
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
								d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Add new Task
					</BzButton>
				</div>
			</div>
			<div className="grid gap-2 sm:grid-cols-3">
				<div className="flex flex-col justify-center space-y-2 sm:col-span-2">
					{tache.map((tache) => {
						return (
							<TaskComponent state="active" key={tache.id}>
								{taches.titre}
							</TaskComponent>
						);
					})}
				</div>
				<div className="flex  items-center justify-center ">
					<div className="  flex h-full w-full flex-col items-center justify-between  gap-4    bg-blue-50 py-12   ">
						<span className="font-semibold text-gray-500">
							Completed
						</span>
						<span className="bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 bg-clip-text text-7xl font-bold text-transparent">
							25 %
						</span>
						<span className="text-2xl font-bold text-purple-800">
							Progress
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
