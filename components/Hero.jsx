import Image from "next/image";
export default function Hero() {
	return (
		<>
			<section className="grid grid-cols-2 gap-8">
				<div className=" flex flex-col items-start justify-center gap-6   px-16 py-4">
					<h1 className="w-2/3 text-3xl font-extrabold">
						Get a your projects planned and scheduled for{" "}
						<span className="text-[#1053EB]">free, forever.</span>
					</h1>
					<p className="mr-8">
						Bezier give amazing project planner and scheduling with
						very easy and intuitive steps
					</p>
					<div className=" mx-8 grid w-full gap-1">
						<button className="rounded-full  border-2 border-[#1053EB] bg-[#1053EB] py-2 text-3xl font-bold text-white shadow shadow-blue-500  transition ease-in hover:border-2 hover:bg-white hover:text-[#1053EB]">
							Get Started
						</button>
						<button className="text-xl text-blue-500">
							Learn more
						</button>
					</div>
				</div>
				<div className="p-2 drop-shadow-2xl">
					<Image
						src="/2.png"
						alt="Log Bezier Ordonnancer projects"
						width={800}
						height={616}
						className="  drop-shadow"
					/>
				</div>
			</section>
			<section className="grid grid-cols-2 gap-8">
				<div className="p-2  drop-shadow-2xl">
					<Image
						src="/1.png"
						alt="Log Bezier Ordonnancer projects"
						width={800}
						height={616}
						className=" shadow-md shadow-[#1053EB]"
					/>
				</div>
				<div className=" flex flex-col items-start justify-center gap-8   px-16 py-4">
					<h1 className="w-2/3 text-3xl font-extrabold">
						Get a your projects planned and scheduled for{" "}
						<span className="text-[#1053EB]">free, forever.</span>
					</h1>
					<button className="flex items-center  gap-2 rounded-full border-2 border-[#1053EB] py-2 pl-4 pr-4 text-xl font-medium text-[#1053EB] shadow  shadow-blue-500 transition ease-in hover:border-2 hover:bg-[#1053EB]   hover:text-white">
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
					<p className="mr-8">
						Bezier give amazing project planner and scheduling with
						very easy and intuitive steps
					</p>
				</div>
			</section>
		</>
	);
}
