import Link from "next/link";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/dashboard/projectCard";
import BzButton from "../../components/dashboard/BzButton";
const index = () => {
	return (
		<div className="  items-center justify-center space-y-8 py-8 px-2 lg:px-10 xl:px-12">
			<div className="justify-between flex gap-2">
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
				<Link href="/dashboard/project">
					<a>
						<ProjectCard percent={82} />
					</a>
				</Link>
				<Link href="/dashboard/project">
					<a>
						<ProjectCard percent={52} />
					</a>
				</Link>
				<Link href="/dashboard/project">
					<a>
						<ProjectCard percent={62} />
					</a>
				</Link>
				<Link href="/dashboard/project">
					<a>
						<ProjectCard percent={92} />
					</a>
				</Link>
				<Link href="/dashboard/project">
					<a>
						<ProjectCard percent={42} />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default index;
