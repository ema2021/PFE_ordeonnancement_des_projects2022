import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth, VIEWS } from "@/lib/auth";

import { useState, useEffect } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import GroupIcon from "@mui/icons-material/Group";
import Image from "next/image";
import SearchComponent from "@/components/dashboard/searchComponent";
import Avatar from "react-avatar";
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
		<div
			className={` ${
				user ? "" : "hidden"
			} md:grid grid-cols-[16rem_auto] h-screen`}
		>
			{/* The sidebar menu */}
			<aside
				className={` ${
					!open && " hidden"
				}      absolute top-0 w-full gap-4 bg-black px-2 py-16 pt-16  pb-2 text-white  z-[100]  lg:px-4 md:flex flex-col  md:sticky`}
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
					<div className="flex  items-center rounded-full  bg-black to-purple-800 w-full">
						<div className="relative  w-16 h-16">
							<Image
								src="/bezier.svg"
								layout="fill"
								alt=""
								className=""
							/>
						</div>
						<h2 className="bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 bg-clip-text font-sans text-4xl font-bold text-white text-transparent md:text-3xl">
							OR team
						</h2>
					</div>
				</div>
				<div className="flex  h-full w-full flex-col justify-between  rounded-md bg-slate-400/10 px-2   py-16 ">
					<div className="mx-auto grid gap-2 w-full ">
						<Link
							href="/dashboard"
							alt=""
							passHref={true}
							className=""
						>
							<a
								className={` flex items-center gap-2 text-lg hover:bg-slate-100/10 px-4 w-full py-1 rounded focus:bg-slate-100/10 ${
									router.pathname == "/dashboard"
										? "bg-slate-100/10"
										: ""
								}`}
							>
								<HomeIcon />
								Projects
							</a>
						</Link>
						<Link
							href="/dashboard/employes/"
							alt=""
							passHref={true}
							className="active:bg-slate-100/10"
						>
							<a
								className={` flex items-center gap-2 text-lg px-4 w-full py-1 rounded hover:bg-slate-100/10 ${
									router.pathname == "/dashboard/employes"
										? "bg-slate-100/10"
										: ""
								}`}
							>
								<GroupIcon />
								Employes
							</a>
						</Link>
						{/* <Link href="/dashboard" alt="" passHref={true}>
							<a className="flex items-center gap-2 text-lg px-4 w-full py-1 rounded hover:bg-slate-100/10">
								<HomeIcon />
								Projects
							</a>
						</Link> */}
					</div>
					<div className="mx-auto grid gap-2 w-full">
						<Link href="/settings" passHref={true} alt="">
							<a className="flex items-center gap-2 px-4 w-full py-1 rounded hover:bg-slate-100/10 focus:bg-slate-100/10">
								<SettingsIcon />
								Settings
							</a>
						</Link>
						<button
							className="flex items-center gap-2 text-red-600 px-4 w-full py-1 rounded hover:bg-slate-100/10"
							onClick={() => {
								signOut();
								router.push("/");
								// router.reload("/dashboard");
							}}
						>
							<PowerSettingsNewIcon />
							Log Out
						</button>
					</div>
				</div>
			</aside>
			{/* main content */}
			<div className="w-full h-screen overflow-scroll">
				{/* Header */}
				<header className="  sticky top-0 flex w-full items-center justify-between gap-2 bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 py-4 px-2 text-white md:justify-start md:px-12 lg:justify-between z-10">
					<button
						className="flex h-10 w-10 items-center justify-center md:hidden shadow-none "
						onClick={() => setOpen(true)}
					>
						<MenuIcon />
					</button>
					{/* Search bar */}
					<div className="w-full lg:w-4/5">
						<SearchComponent />
					</div>
					{/* User Icon */}
					<div className="w-auto">
						<div className="flex  w-full items-center gap-1">
							<Avatar
								name={user?.email
									.replace("@gmail.com", " ")
									.replace(".", " ")}
								round={true}
								size={50}
								color="#32908F"
							/>
							<span className="w-full  ">
								{user?.email
									.replace("@gmail.com", "")
									.replace(".", " ")}
							</span>
						</div>
					</div>
				</header>
				{/* Main content of the dashboard */}
				<main className="h-full  p-2   lg:px-5 xl:p-8 py-16">
					{children}
				</main>
			</div>
		</div>
	);
}

export default Layout;
