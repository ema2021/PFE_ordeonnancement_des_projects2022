import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router.js";
import { useState, useEffect } from "react";
import Hero from "../components/Hero.jsx";
import BzButton from "../components/dashboard/BzButton.jsx";
import Navabar from "../components/Navabar.jsx";
import { supabase } from "../utils/supabaseClient";
import Auth from "../components/Auth";
export default function Home() {
	const [session, setSession] = useState(null);
	const router = useRouter();
	const [openlog, setLog] = useState(null);

	useEffect(() => {
		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
		session ? router.push("/dashboard") : router.push("");
	}, [router, session]);
	return (
		<div className="grid gap-16 sm:px-8 lg:px-32 xl:px-64 py-8">
			{!session ? (
				<>
					<>
						<Head>
							<title>Ordonnancer votre projets|Bezier </title>
							<meta
								httpEquiv="Content-Type"
								content="text/html;charset=UTF-8"
							/>
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1.0"
							/>
							<meta name="description" content="" />
						</Head>
						<nav className="flex items-center justify-between px-2">
							<Link
								href="/"
								alt="Home"
								className=""
								passHref={true}
							>
								<div className=" flex">
									{" "}
									<div className="relative h-12 w-28">
										<Image
											src="/logo.png"
											// height={200}
											// width={200}
											layout="fill"
											alt=""
											// objectFit="cover"
											className=""
										/>
									</div>
								</div>
							</Link>
							<div className={`space-x-2 `}>
								<button className="rounded  px-2  py-1 font-medium text-blue-600 hover:bg-gray-200">
									Login
								</button>
								<Link className="" href="/account">
									<a className="rounded border-2 border-[#1053EB]  bg-[#1053EB] px-2  py-1 font-semibold  text-white shadow-blue-500 transition  ease-in hover:border-2 hover:bg-white hover:text-[#1053EB] hover:shadow">
										Sign Up
									</a>
								</Link>
							</div>
						</nav>

						<Hero />
					</>
				</>
			) : (
				""
			)}
		</div>
	);
}
