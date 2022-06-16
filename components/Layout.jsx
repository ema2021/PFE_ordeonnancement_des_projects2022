import { Auth } from "@supabase/ui";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth, VIEWS } from "@/lib/auth";
import { supabase } from "@/lib/client";

import { useState, useEffect } from "react";
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
function Layout({ children }) {
	const [open, setOpen] = useState(false);
	const { user, view, signOut } = useAuth();
	const router = useRouter();
	useEffect(()=>{
		!user && router.push("/");
	},[user,router])
	
	if (view === VIEWS.UPDATE_PASSWORD) {
		return (
			<Layout>
				<Auth.UpdatePassword supabaseClient={supabase} />
			</Layout>
		);
	}
	console.log(JSON.stringify(user));
	return (
		<div className="flex">
			{/* The sidebar menu */}
			<aside
				className={` ${
					!open && " hidden"
				}   justify-between  absolute top-0 z-10  flex h-screen  w-full  flex-col items-center gap-4   bg-black px-4 py-16 pt-16 pb-2 text-white  md:sticky md:sticky md:z-0 md:flex md:w-auto lg:px-8 `}
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
				<div className="justify-between  flex h-full w-full flex-col gap-8 rounded-md bg-slate-400/10 px-2   py-12 ">
					<div className="flex flex-col">
						{dashlinks.map((dash) => {
							return (
								<Linkdash
									text={dash.text}
									key={dash.text}
									spanColor="text-2xl"
								/>
							);
						})}
					</div>
					<div className=" flex flex-col items-center justify-center gap-2">
						<Linkdash text="Setting" />
						<button
							className="text-red-600 flex items-center gap-2"
							onClick={signOut}
						>
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
									d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
								/>
							</svg>{" "}
							Log Out
						</button>
					</div>
				</div>
			</aside>
			{/* main content */}
			<div className="w-full">
				{/* Header */}
				<header className="  justify-between sticky top-0 flex w-full items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 py-4 px-2 text-white md:justify-start md:px-12 lg:justify-between">
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
								className="h-8 w-full border-none bg-transparent text-cyan-700 placeholder:text-cyan-700 focus:border-none focus:outline-none "
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
				<main className="px-2 py-8 sm:px-3 md:px-6 lg:px-8 xl:px-12">
					{children}
				</main>
			</div>
		</div>
	);
}

export default Layout;
