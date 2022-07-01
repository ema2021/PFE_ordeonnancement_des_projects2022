import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "@/lib/auth";
import { useEffect } from "react";
import { supabase } from "@/lib/client";
import { QueryBuilder } from "@mui/icons-material";
import moment from "moment";
function Project({ projet }) {
	const { user, error } = useAuth();
	const router = useRouter();
	const query = router.query?.projectid;

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
			const { data, error } = await supabase
				.from("projets")
				.update({
					titre: formData.projectname,
					description: formData.description,
					decideur_id: user?.id,
					state: formData.state,
					debut: formData.debut,
				})
				.match({ id: projet?.id });
			if (error) console.log("errors" + error);
			if (data) console.log("data" + error);
			if (!error) router.push("/dashboard");
			return true;
		}
		console.log("Please log in");
		return false;
	}
	const handleError = (errors) => console.log(errors);

	const registerOptions = {
		projectname: {
			required: "Nom est insdisponsible",
			minLength: {
				value: 20,
				message: "Nom doit etre plus de 20 chracteres",
			},
		},
		description: {
			required: "description est insdisponsible",
			minLength: {
				value: 30,
				message: "Description doit etre plus de 30 chracteres",
			},
		},
		debut: {
			required: "date de debut est indisponsable",
		},
	};
	useEffect(() => {
		// if (!user) router.push("/");
	}, [user, router]);
	return (
		<div className="lg:px-16">
			<Head>
				{" "}
				<title>Mettre a jour le projet {query}</title>
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
							htmlFor="projectname"
							className="flex items-start gap-1 text-lg font-semibold"
						>
							Titre de Projet :{" "}
							<span className="flex text-red-700">*</span>
						</label>
						<input
							defaultValue={projet?.titre || ""}
							type="text"
							name="projectname"
							id=""
							className={`boreder-gray-400 w-full  border-0 border-b-[1px]    placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-0 caret-cyan-600 ${
								errors?.projectname && "focus:border-red-500"
							}`}
							placeholder="e.g Developper la platefome des inscription en ligne."
							{...register(
								"projectname",
								registerOptions.projectname
							)}
						/>
						<p className="text-red-400">
							{errors?.projectname && errors.projectname.message}
						</p>
					</div>
					<div className="w-full space-y-2">
						<label
							htmlFor="description"
							className="flex items-start gap-1 text-lg font-semibold"
						>
							Description de Projet :{" "}
							<span className="flex text-red-700">*</span>
						</label>
						<textarea
							defaultValue={projet?.description || ""}
							name="description"
							id=""
							className={` h-80 w-full rounded border border-gray-400 shadow ring-0 focus:border-0 focus:ring-cyan-500
							${errors?.description && "focus:ring-red-500"}`}
							placeholder="e.g Developper la platefome des inscription en ligne."
							{...register(
								"description",
								registerOptions.description
							)}
						/>
						<p className="text-red-400">
							{errors?.description && errors.description.message}
						</p>
					</div>{" "}
					<div className="w-full space-y-2">
						<label
							htmlFor="state"
							className="flex items-start gap-1 text-lg font-semibold"
						>
							State :<span className="flex text-red-700"></span>
						</label>
						<div className=" relative">
							<ExpandMoreIcon className="absolute right-2 top-2 h-6 w-6 text-gray-500 group-focus:hidden" />
							<select
								id="states"
								className="focus:text-gray-400 group block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-transparent focus:outline-none focus:ring-cyan-500"
								{...register("state")}
							>
								<option
									selected
									className="focus:text-gray-400"
								>
									{projet?.state || ""}
								</option>
								<option value="active">Active</option>
								<option value="complete">Complete</option>
								<option value="hold">Hold</option>
							</select>
						</div>
					</div>
					<div>
						<label
							htmlFor="debut"
							className="flex items-start gap-1 text-lg font-semibold"
						>
							Date de debut :
							<span className="flex text-red-700">*</span>
						</label>
						<div className="relative focus-within:text-gray-400 text-gray-500 ">
							<CalendarMonthIcon className="absolute right-2 top-2 h-6 w-6  " />
							<input
								defaultValue={
									moment(projet?.debut).format(
										"YYYY-MM-DD"
									) || "yyyy-mm-dd"
								}
								type="date"
								name="debut"
								id=""
								className={`focus:text-gray-400 group block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-transparent focus:outline-none focus:ring-cyan-500 ${
									errors?.debut && "focus:ring-red-500"
								}`}
								{...register("debut", { required: true })}
							/>
						</div>
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
export async function getServerSideProps({ req, params }) {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	const number = params.projectid;
	console.log(number);
	if (user) {
		let { data: projets, error_project } = await supabase
			.from("projets")
			.select("*")
			.eq("id", number.toString())
			.eq("decideur_id", user?.id)
			.single();
		// console.log(project);

		return {
			props: {
				projet: projets,
				// errors: { taches: JSON.stringify(error_tache) },
			},
		};
	}
	console.log("Please login");
	return { props: {}, redirect: { destination: "/account" } };
}
export default Project;
