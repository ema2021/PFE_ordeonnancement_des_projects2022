import Image from "next/image";
const Playground = () => {
	return (
		<section className="">
			<nav className="group  flex   flex-col items-center space-y-2  border-r-2 bg-slate-200 pt-4  ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className=" h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>

				<div className=" hidden h-4/5 flex-col items-center justify-between space-y-16 py-12 px-6 group-hover:flex">
					<div className="relative h-32 w-32">
						<Image
							src="/bezier.svg"
							alt="Logo Bezier"
							layout="fill"
							className="relative h-12 w-12"
						/>
					</div>
					<div>
						<button className="flex  items-center  rounded py-1 pl-2 pr-8 hover:bg-slate-300/50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<span>Projects</span>
						</button>{" "}
						<button className="flex  items-center  rounded py-1 pl-2 pr-8 hover:bg-slate-300/50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<span>Projects</span>
						</button>{" "}
						<button className="flex  items-center rounded py-1 pl-2 pr-8 hover:bg-slate-300/50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<span>Projects</span>
						</button>
					</div>
					<div>
						<button className="flex  items-center rounded py-1 pl-2 pr-8 hover:bg-slate-300/50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<span>Projects</span>
						</button>{" "}
						<button className="flex  items-center rounded py-1 pl-2 pr-8 hover:bg-slate-300/50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<span>Projects</span>
						</button>
					</div>
				</div>
			</nav>
			<div></div>
		</section>
	);
};

export default Playground;
