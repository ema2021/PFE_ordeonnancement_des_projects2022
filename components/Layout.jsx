import { useState } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Linkdash from "./dashboard/Linkdash";
const dashlinks = [
	{
		image: "1.png",
		text: "Projects",
	},
	{
		image: "2.png",
		text: "My tasks",
	},
	{
		image: "1.png",
		text: "Deadlines",
	},
];
const Layout = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex">
			<aside
				className={` absolute ${
					!open && " hidden"
				}  xs:w-2/4 z-10 flex h-screen w-full flex-col justify-between bg-slate-900 px-12 py-32 text-white md:relative md:z-0 md:flex md:w-2/5 lg:w-1/4`}
			>
				<button
					className="absolute right-3 top-3 font-bold text-white  md:hidden"
					onClick={() => setOpen(false)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={3}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<div className="flex items-center">
					<div className="relative h-16 w-16 text-white">
						<Image
							src="/bezier.svg"
							layout="fill"
							alt=""
							className="text-white"
						/>
					</div>
					<h2 className="font-sans text-6xl font-bold text-white">
						Bezier
					</h2>
				</div>
				<div className="flex flex-col">
					{dashlinks.map((dash) => {
						return <Linkdash text={dash.text} key={dash.image} />;
					})}
				</div>
				<div className="flex flex-col">
					<Linkdash text="Setting" />
					<Linkdash
						text="Logout"
						spanColor="text-red-900 font-bold"
					/>
				</div>
			</aside>
			<div className="w-full">
				<header className="flex  items-center justify-between gap-2 bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 py-4 px-2 text-white md:px-12">
					<button
						className="flex h-8 w-8 items-center justify-center md:hidden"
						onClick={() => setOpen(true)}
					>
						<MenuIcon />
					</button>
					<form action="" className=" w-full md:w-3/4 ">
						<div className="  flex h-9 items-center rounded-lg border-[1px] border-gray-400 bg-white px-2">
							<input
								type="text"
								className="h-8 w-full border-none bg-transparent text-gray-600 focus:border-none focus:outline-none"
								placeholder="Search projects,tasks here ..."
							/>
							<button className="flex h-6 w-6 items-center justify-center bg-transparent text-gray-500">
								<SearchIcon />
							</button>
						</div>
					</form>
					<div>
						<div className="flex w-full items-center gap-1">
							<div className="relative h-8 w-8 rounded-full bg-white">
								<Image src="/bezier.svg" layout="fill" alt="" />
							</div>
							<span className="w-full text-xs md:text-sm">
								User Name
							</span>
						</div>
					</div>
				</header>
				<main className="">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
