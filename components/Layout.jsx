import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth, VIEWS } from "@/lib/auth";

import { useState, useEffect } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import GroupIcon from "@mui/icons-material/Group";
import Image from "next/image";
const dashlinks = [
	{
		image: "1.png",
		text: "Projects",
		href: "/dashboard",
	},
	{
		image: "2.png",
		text: "Employes",
		herf: "#",
	},
	{
		image: "1.png",
		text: "link",
		herf: "#",
	},
];
function Layout({ children }) {
	const [open, setOpen] = useState(false);
	const { user, view, signOut } = useAuth();
	const router = useRouter();

	return (
		<div className={`flex ${user ? "" : "hidden"}`}>
			{/* The sidebar menu */}
			<aside
				className={` ${
					!open && " hidden"
				}      gap-4 bg-black px-4 py-16 pt-16  pb-2 text-white  z-10 md:w-auto lg:px-8 md:flex flex-col w-full h-screen sticky md:sticky top-0`}
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
				<div className="flex justify-center rounded-l-full rounded-br-none p-0   shadow-purple-900">
					<div className="flex  items-center rounded-full  bg-black to-purple-800 ">
						<div className="relative  w-16 h-16">
							<Image
								src="/bezier.svg"
								layout="fill"
								alt=""
								className=""
							/>
						</div>
						<h2 className="bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 bg-clip-text font-sans text-4xl font-bold text-white text-transparent md:text-5xl">
							Bezier
						</h2>
					</div>
				</div>
				<div className="flex  h-full w-full flex-col justify-between  rounded-md bg-slate-400/10 px-2   py-16 ">
					<div className="mx-auto grid gap-2 w-full">
						<Link href="/dashboard" alt="" passHref={true}>
							<a className=" flex items-center gap-2 text-lg hover:bg-slate-100/10 px-4 w-full py-1 rounded ">
								<HomeIcon />
								Projects
							</a>
						</Link>
						<Link href="/dashboard" alt="" passHref={true}>
							<a className=" flex items-center gap-2 text-lg px-4 w-full py-1 rounded hover:bg-slate-100/10">
								<GroupIcon />
								Employes
							</a>
						</Link>
						<Link href="/dashboard" alt="" passHref={true}>
							<a className="flex items-center gap-2 text-lg px-4 w-full py-1 rounded hover:bg-slate-100/10">
								<HomeIcon />
								Projects
							</a>
						</Link>
					</div>
					<div className="mx-auto grid gap-2 w-full">
						<Link href="/settings" passHref={true} alt="">
							<a className="flex items-center gap-2 px-4 w-full py-1 rounded hover:bg-slate-100/10 ">
								<SettingsIcon />
								Settings
							</a>
						</Link>
						<button
							className="flex items-center gap-2 text-red-600 px-4 w-full py-1 rounded hover:bg-slate-100/10"
							onClick={signOut}
						>
							<PowerSettingsNewIcon />
							Log Out
						</button>
					</div>
				</div>
			</aside>
			{/* main content */}
			<div className="w-full">
				{/* Header */}
				<header className="  sticky top-0 flex w-full items-center justify-between gap-2 bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 py-4 px-2 text-white md:justify-start md:px-12 lg:justify-between">
					<button
						className="flex h-8 w-8 items-center justify-center md:hidden"
						onClick={() => setOpen(true)}
					>
						<MenuIcon />
					</button>
					{/* Search bar */}
					<form action="" className=" sm:w-3/4  lg:w-3/4 ">
						<div className="  flex h-9 items-center rounded-xl border-[0.5px] border-cyan-400 bg-white px-2 ring-cyan-700 focus-within:border-none focus-within:ring-2">
							<input
								type="text"
								className="h-8 w-full border-none bg-transparent text-cyan-700 placeholder:text-cyan-700 focus:border-none focus:outline-none focus:ring-0"
								placeholder="Search projects,tasks here ..."
							/>
							<button className="flex h-6 w-6 items-center justify-center bg-transparent text-cyan-600">
								<SearchIcon />
							</button>
						</div>
					</form>
					{/* User Icon */}
					<div className="w-auto">
						<div className="flex  w-full items-center gap-1">
							<div className="relative h-[40px] w-[60px] rounded-full bg-white">
								<Image src="/bezier.svg" layout="fill" alt="" />
							</div>
							<span className="w-full text-xs md:text-sm">
								{user?.email
									.replace(".", " ")
									.replace("@gmail.com", "")}
							</span>
						</div>
					</div>
				</header>
				{/* Main content of the dashboard */}
				<main className="h-full  p-2  sm:p-4 md:p-6 lg:p-12 xl:p-16">
					{children}
				</main>
			</div>
		</div>
	);
}

export default Layout;
