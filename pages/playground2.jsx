import { useState } from "react";
import Image from "next/image";
const Playground2 = () => {
	const [open, setOpen] = useState(false);
	console.log(open);
	return (
		<section className="flex    w-screen md:h-screen">
			<nav className={`h-12 `}>
				<button
					className={`${open ? "hidden" : "flex"} m-2 md:hidden`}
					onClick={() => setOpen(true)}
				>
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
				</button>

				<div className="relative bg-slate-300">
					<button
						className={`absolute right-2 top-2 ${
							!open ? "hidden" : "absolute"
						} md:hidden`}
						onClick={() => setOpen(false)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-gray-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<div
						className={`${!open ? "hidden" : "flex w-screen"}
                    h-screen flex-col items-center justify-between space-y-16 bg-slate-300 py-12 px-6  md:flex md:w-64`}
					>
						<div className="relative h-24 w-24">
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
				</div>
			</nav>
			<div className="w-full ">
				<div className="flex w-full items-center  justify-between  gap-2  py-2 px-2 md:px-8">
					<div className="w-full md:w-3/5 md:pl-32 ">
						<div className="">
							<form
								action=""
								className="flex h-10   rounded-xl border-2 border-gray-400  px-2 py-2 focus:ring-2"
							>
								<svg
									className=" text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										clipRule="evenodd"
									></path>
								</svg>
								<input
									type="text"
									placeholder="Serach projects,tasks here..."
									className="w-full border-none bg-transparent outline-none"
								/>
							</form>
						</div>
					</div>
					<div className="relative float-left rounded-full bg-red-200">
						<div className="relative h-8 w-8 ">
							<Image
								src="/bezier.svg"
								alt="Logo Bezier"
								layout="fill"
								className="relative h-12 w-12"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Playground2;
