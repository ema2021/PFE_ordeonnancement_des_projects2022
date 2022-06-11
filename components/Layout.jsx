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
			{/* The sidebar menu */}
			<aside
				className={` ${
					!open && " hidden"
				}   justify-between absolute z-10  flex h-screen w-full   flex-col items-center gap-4 bg-black px-4 pt-16   pb-2 text-white sm:w-auto md:sticky md:top-0  md:z-0  md:flex`}
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
				<div className="flex justify-center rounded-full rounded-br-none bg-gradient-to-r from-cyan-400 via-blue-900 pl-0.5 pb-0.5 pr-4 shadow-md shadow-purple-900">
					<div className="flex  items-center rounded-full  bg-black to-purple-800 ">
						<div className="relative h-16 w-16  text-white ">
							<Image
								src="/bezier.svg"
								layout="fill"
								alt=""
								className="text-white"
							/>
						</div>
						<h2 className="bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 bg-clip-text font-sans text-4xl font-bold text-white text-transparent md:text-5xl">
							Bezier
						</h2>
					</div>
				</div>
				<div className="justify-between  flex h-full w-full flex-col rounded-md bg-slate-400/10 px-2 py-4 md:py-12 ">
					<div className="flex flex-col">
						{dashlinks.map((dash) => {
							return (
								<Linkdash
									text={dash.text}
									key={dash.image}
									spanColor="text-2xl"
								/>
							);
						})}
					</div>
					<div className=" flex flex-col">
						<Linkdash text="Setting" />
						<Linkdash
							text="Logout"
							spanColor="text-red-900 font-bold"
						/>
					</div>
				</div>
			</aside>
			{/* main content */}
			<div className="w-full">
				{/* Header */}
				<header className="  justify-between sticky top-0 flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 py-4 px-2 text-white md:justify-start md:px-12 lg:justify-between">
					<button
						className="flex h-8 w-8 items-center justify-center md:hidden"
						onClick={() => setOpen(true)}
					>
						<MenuIcon />
					</button>
					{/* Search bar */}
					<form action="" className=" w-full sm:w-2/4 md:w-full ">
						<div className="  flex h-9 items-center rounded-xl border-[0.5px] border-gray-400 bg-white px-2 ring-cyan-500 focus-within:border-none focus-within:ring-2">
							<input
								type="text"
								className="h-8 w-full border-none bg-transparent text-gray-600 focus:border-none focus:outline-none "
								placeholder="Search projects,tasks here ..."
							/>
							<button className="flex h-6 w-6 items-center justify-center bg-transparent text-gray-500">
								<SearchIcon />
							</button>
						</div>
					</form>
					{/* User Icon */}
					<div>
						<div className="flex  w-full items-center gap-1">
							<div className="relative h-[40px] w-[60px] rounded-full bg-white">
								<Image src="/bezier.svg" layout="fill" alt="" />
							</div>
							<span className="w-full text-xs md:text-sm">
								User Name
							</span>
						</div>
					</div>
				</header>
				{/* Main contnet of the dashboard */}
				<main className="px-2 pt-8 sm:px-3 md:px-6 lg:px-8 xl:px-12">
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
