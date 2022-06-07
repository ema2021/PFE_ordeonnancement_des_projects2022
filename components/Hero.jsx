import Image from "next/image";
export default function Hero() {
	return (
		<div className="space-y-8">
			<section className="grid gap-8">
				<div className="  drop-shadow-2xl">
					<Image
						src="/2.png"
						alt="Log Bezier Ordonnancer projects"
						width={800}
						height={616}
						className="  drop-shadow"
					/>
				</div>
				<div className="grid gap-4  px-4 py-4">
					<h1 className="text-center text-4xl font-extrabold ">
						Get a your projects planned and scheduled for{" "}
						<span className="text-[#1053EB]">free, forever.</span>
					</h1>
					<p className="">
						Bezier give amazing project planner and scheduling with
						very easy and intuitive steps
					</p>
					<div className="grid gap-2">
						<button className="rounded-full  border-2 border-[#1053EB] bg-[#1053EB] py-2 text-3xl font-bold text-white shadow shadow-blue-500  transition ease-in hover:border-2 hover:bg-white hover:text-[#1053EB]">
							Get Started
						</button>
						<button className="text-xl font-semibold text-blue-500 hover:text-gray-600">
							Learn more
						</button>
					</div>
				</div>
			</section>
			<section className="grid  gap-8">
				<div className="p-2  drop-shadow-2xl">
					<Image
						src="/1.png"
						alt="Log Bezier Ordonnancer projects"
						width={800}
						height={616}
						className=" shadow-md shadow-[#1053EB]"
					/>
				</div>
				<div className="gap-8  space-y-8  px-4 py-4">
					<h1 className=" text-center text-4xl font-extrabold">
						Switch between gantt chart, Pert graph, or calendar
						views
					</h1>
					<button className=" mx-auto flex items-center   gap-2 rounded-full border-2 border-[#1053EB] py-2  px-4 text-xl font-medium text-[#1053EB] shadow shadow-blue-500 transition ease-in hover:border-2 hover:bg-[#1053EB]  hover:text-white">
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
								d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Launch Project
					</button>
					<p className="">
						Bezier give amazing project planner and scheduling with
						very easy and intuitive steps
					</p>
				</div>
			</section>
		</div>
	);
}
