import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "@/lib/auth";
import { useEffect } from "react";
import { supabase } from "@/lib/client";
import enforceAuthenticated from "@/lib/auth";
export default function Edit() {
	const { user, error } = useAuth();
	const router = useRouter();
	// if (!user) router.push("/account");
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
	});
	async function onSubmit(formData) {
		if (user) {
			const { data, error } = await supabase.from("ressources").insert([
				{
					nom: formData.name,
					prenom: formData.surname,
					decideur_id: user?.id,
					email: formData.email,
					poste: formData.poste,
				},
			]);
			if (error) console.log("errors" + error);
			if (data) console.log("data" + error);
			if (!error) router.push("/dashboard/employes");
			return true;
		}
		console.log("Please log in");
		return false;
	}
	const handleError = (errors) => console.log(errors);

	const registerOptions = {
		name: {
			required: "Nom est insdisponsible",
			minLength: {
				value: 3,
				message: "Nom doit etre plus de 3 chracteres",
			},
		},
		surname: {
			required: "prénom est insdisponsible",
			minLength: {
				value: 3,
				message: "prénom doit etre plus de 3 chracteres",
			},
		},
		email: {
			required: "Email est indisponsable",
			pattern: {
				value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				message: "Cet email est invalide",
			},
		},
		poste: {
			required: "poste est indisponsable",
			minLength: {
				value: 5,
				message: "poste doit être plus de 5 caractères",
			},
		},
	};
	// useEffect(() => {
	// 	if (!user) router.push("/");
	// }, [user, router]);
	return (
		<div className="lg:px-16">
			<Head>
				<title>Ajouter Nouveau Employé</title>
				<link rel="icon" type="image/svg+xml" href="favicon.svg" />
			</Head>
			<section className="grid gap-4 text-gray-700">
				<Link href="/dashboard" passHref={true}>
					<a className="flex w-24 items-center  gap-1  px-3 py-1 font-semibold text-gray-700 hover:bg-cyan-100 ">
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
								d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
							/>
						</svg>
						Back
					</a>
				</Link>
				<form
					className="grid gap-6"
					onSubmit={handleSubmit(onSubmit, handleError)}
				>
					<div className="w-full space-y-2">
						<label
							htmlFor="name"
							className="flex items-start gap-1 text-lg font-medium"
						>
							Nom de l'employé :{" "}
							<span className="flex text-red-700">*</span>
						</label>
						<input
							type="text"
							name="name"
							id=""
							className={`boreder-gray-400 w-full   border   rounded  border-gray-400 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-0 caret-cyan-600 ${
								errors?.name && "focus:border-red-500"
							}`}
							placeholder="e.g Developper la platefome des inscription en ligne."
							{...register("name", registerOptions.name)}
						/>
						<p className="text-red-400">
							{errors?.name && errors.name.message}
						</p>
					</div>
					<div className="w-full space-y-2">
						<label
							htmlFor="surname"
							className="flex items-start gap-1 text-lg font-medium"
						>
							Prénom de l'employé :{" "}
							<span className="flex text-red-700">*</span>
						</label>
						<input
							name="surname"
							type="text"
							id=""
							className={` w-full rounded border border-gray-400 shadow ring-0 focus:border-cyan-500 outline-none focus:outline-none focus:ring-0
							${errors?.surname && "focus:border-red-500"}`}
							placeholder="e.g Developper la platefome des inscription en ligne."
							{...register("surname", registerOptions.surname)}
						/>
						<p className="text-red-400">
							{errors?.surname && errors.surname.message}
						</p>
					</div>{" "}
					<div className="w-full space-y-2">
						<label
							htmlFor="email"
							className="flex items-start gap-1 text-lg font-medium"
						>
							E-mail de l'employé :{" "}
							<span className="flex text-red-700">*</span>
						</label>
						<input
							name="email"
							htmlFor="email"
							type="email"
							id=""
							className={` w-full rounded border border-gray-400 shadow ring-0 focus:border-cyan-500 outline-none focus:outline-none focus:ring-0
							${errors?.email && "focus:border-red-500"}`}
							placeholder="Insérer l'email..."
							{...register("email", registerOptions.email)}
						/>
						<p className="text-red-400">
							{errors?.email && errors.email.message}
						</p>
					</div>
					<div className="w-full space-y-2">
						<label
							htmlFor="poste"
							className="flex items-start gap-1 text-lg font-medium"
						>
							Poste de l'employé :{" "}
							<span className="flex text-red-700">*</span>
						</label>
						<input
							name="poste"
							type="text"
							id=""
							className={` w-full rounded border border-gray-400 shadow ring-0 focus:border-cyan-500 outline-none focus:outline-none focus:ring-0
							${errors?.poste && "focus:border-red-500"}`}
							placeholder="e.g Developper la platefome des inscription en ligne."
							{...register("poste", registerOptions.poste)}
						/>
						<p className="text-red-400">
							{errors?.poste && errors.poste.message}
						</p>
					</div>
					<div className="flex items-center  gap-3 justify-center md:jsutify-start px-4">
						<button
							className="px-3 py-2  bg-blue-600 border border-blue-600 text-white font-semibold  rounded hover:bg-blue-700 hover:scale-105 transition-transform ease-in-out duration-50 w-4/5"
							type="submit "
						>
							Enregistrer
						</button>
					</div>
				</form>
			</section>
		</div>
	);
}
export async function getServerSideProps({ req, res }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	if (user) {
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=10, stale-while-revalidate=59"
		);

		return { props: {} };
	}
	return {
		redirect: {
			// permanent: false,
			destination: `/account`,
		},
	};
}
