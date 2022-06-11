import Layout from "../../components/Layout";
import ProjectCard from "../../components/dashboard/projectCard";
import BzButton from "../../components/dashboard/BzButton";
const index = () => {
	return (
		<div className="  items-center justify-center space-y-8 py-8 px-2 lg:px-10 xl:px-12">
			<div className="flex justify-between gap-2">
				<div className="grid h-10  grid-cols-3 divide-x-2 divide-cyan-500 rounded-md border-[1px] border-cyan-500 shadow-xl ">
					<BzButton className="hover:bg-cyan-500 hover:text-white">
						active
					</BzButton>
					<BzButton className="hover:bg-cyan-500 hover:text-white">
						{" "}
						hold
					</BzButton>
					<BzButton className="rounded-r-md hover:bg-cyan-500 hover:text-white">
						Complete
					</BzButton>
				</div>
				<BzButton className="h-10 w-10  rounded-full bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 text-white hover:bg-blue-800 sm:w-auto">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="h-6 w-6"
						viewBox="0 0 16 16"
						strokeWidth={4}
					>
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
					</svg>
					<span className="hidden md:block">new</span>
				</BzButton>
			</div>
			<div className="grid gap-2 ">
				<ProjectCard percent={82} />
				<ProjectCard percent={52} />
				<ProjectCard percent={62} />
				<ProjectCard percent={92} />
				<ProjectCard percent={42} />
			</div>
		</div>
	);
};

export default index;
