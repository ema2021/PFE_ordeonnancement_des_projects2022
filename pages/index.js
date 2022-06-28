import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router.js";
import { Auth } from "@supabase/ui";
import redirectifSigned from "@/lib/redirect";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/client";
import { useAuth, VIEWS } from "@/lib/auth";
import enforceAuthenticated from "@/lib/redirect";

import Hero from "../components/Hero.jsx";
import BzButton from "../components/dashboard/BzButton.jsx";
import Navabar from "../components/Navabar.jsx";
export default function Home() {
	const router = useRouter();
	const { user } = useAuth();

	useEffect(() => {
		if (user) router.push("/dashboard");
	}, [user, router]);
	return (
		<>
			{!user && (
				<div className="grid gap-16 py-8 sm:px-8 md:gap-32 lg:px-16 xl:px-40">
					<Head>
						<title>Ordonnancer votre projets | Bezier </title>
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
						<Link href="/" alt="Home" className="" passHref={true}>
							<div className=" flex">
								{" "}
								<div className="relative h-16 w-32">
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
							<Link href="account" alt="">
								<button className="rounded  px-2  py-1 font-medium text-blue-600 hover:border hover:border-blue-200 shadow-none">
									Connexion
								</button>
							</Link>
							<Link className="" href="/account">
								<button className="rounded border border-[#1053EB]  bg-[#1053EB] px-2  py-1 font-semibold  text-white  transition  ease-in hover:border hover:bg-white hover:text-[#1053EB] hover:shadow">
									S'inscrire
								</button>
							</Link>
						</div>
					</nav>

					<Hero />
				</div>
			)}
		</>
	);
}

export const getServerSideProps = redirectifSigned();
