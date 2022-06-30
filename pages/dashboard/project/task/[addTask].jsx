import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "@/lib/auth";
import { useEffect } from "react";
import { supabase } from "@/lib/client";
import enforceAuthenticated from "@/lib/auth";
export default function EditTask({ tache }) {
	const { user, error } = useAuth();
	const router = useRouter();

	const projectid = router.query?.addTask;
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
			const { data, error } = await supabase.from("tache").insert([
				{
					titre: formData.taskname,
					description: formData.description,
					projectid: projectid,
					state: formData.state,
					taches_precedent_id: formData.taches_anterieurs,
					duree: formData.duree,
				},
			]);
			if (error) console.log("error" + JSON.stringify(error));
			if (data) console.log("data" + data);
			if (!error) router.push("/dashboard/project/" + projectid);
			console.log(formData.taches_anterieurs);
			return true;
		}
		console.log("Please log in");
		return false;
	}
	const handleError = (errors) => {
		console.log(errors);
	};

	const registerOptions = {
		taskname: {
			required: "Titre de tache est insdisponsible",
			minLength: {
				value: 20,
				message: "Titre de tache doit etre plus de 20 chracteres",
			},
		},
		description: {
			required: "description de tache est insdisponsible",
			minLength: {
				value: 30,
				message: "Description de tache doit etre plus de 30 chracteres",
			},
		},
		duree: {
			required: "Duree ne peut etre vide",
			min: {
				value: 0,
				message: "Duree est olus que 0",
			},
		},
	};

	return (
		<div className="lg:px-16 pb-8">
			<Head>
				<title>Add new task to project</title>
			</Head>
			<section className="grid gap-4 text-gray-700">
				<Link href="/dashboard" passHref={true}>
					<a className="flex w-24 items-center  gap-1  px-3 py-1 font-semibold text-gray-700 hover:bg-cyan-100 ">
						<ArrowBackIcon className="text-red-600" />
						Retour
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
							Titre de Tâche :{" "}
							<span className="flex text-red-700">*</span>
						</label>
						<input
							type="text"
							name="taskname"
							id=""
							className={`border-gray-400 w-full  border-0 border-b-[2px]    placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-0 caret-cyan-600  ${
								errors?.taskname && "focus:border-red-500"
							}`}
							placeholder="Insérez le titre de la tache .."
							{...register("taskname", registerOptions.taskname)}
						/>
						<p
							className={`text-red-400 
							}`}
						>
							{errors?.taskname && errors.taskname.message}
						</p>
					</div>
					<div className="w-full space-y-2">
						<label
							htmlFor="description"
							className="flex items-start gap-1 text-lg font-semibold"
						>
							Description de Tâche :{" "}
							<span className="flex text-red-700">*</span>
						</label>
						<textarea
							name="description"
							id=""
							className={`bg-white w-full  border-0    placeholder:text-gray-400 focus:outline-cyan-500 
								outline outline-1 outline-gray-400 rounded focus:outline-none focus:ring-0 h-40 md:h-60 caret-cyan-600 ${
									errors?.description &&
									"focus:outline-red-500"
								}`}
							placeholder="Donnez une description détaillé sur la tache ..."
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
								name="state"
								className="focus:text-gray-400 group block w-full rounded-xl border  focus:outline-cyan-500 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900   focus:ring-0 focus:border-0"
								{...register("state")}
							>
								<option className="focus:text-gray-400">
									active
								</option>
								<option value="active">Active</option>
								<option value="complete">Complete</option>
								<option value="hold">Hold</option>
							</select>
						</div>
					</div>
					<div>
						<label
							htmlFor="taches_anterierurs"
							className="flex items-start gap-1 text-lg font-semibold"
						>
							Tâches antérieurs :
							<span className="flex text-red-700"></span>
						</label>
						<div className="relative focus-within:text-gray-400 text-gray-500 ">
							<ExpandMoreIcon className="absolute right-2 top-2 h-6 w-6 text-gray-500 group-focus:hidden" />

							<select
								id="states"
								name="tache_anterieurs"
								className={`bg-white w-full  border-0    placeholder:text-gray-400 focus:outline-cyan-500 
								outline outline-1 outline-gray-400 rounded-xl focus:outline-none focus:ring-0 caret-cyan-600 ${
									tache?.length == 0 ? "h-10" : "h-auto"
								}`}
								{...register("taches_anterieurs")}
								multiple
							>
								{tache
									?.sort((a, b) => {
										return a.id - b.id;
									})
									.map((item) => {
										return (
											<option
												className="text-gray-600"
												key={item.id}
												value={item.id}
											>
												{item?.id + " " + item?.titre}
											</option>
										);
									})}
							</select>
							<p className="py-2 px-4 text-sm text-green-900/70">
								Maintenir CTRL et séléctioner les tâches
							</p>
						</div>
						<div className="w-full space-y-2 mt-4">
							<label
								htmlFor="tasktname"
								className="flex items-start gap-1 text-lg font-semibold"
							>
								Durée estimée de Tâche :{" "}
								<span className="flex text-red-700">*</span>
							</label>
							<input
								type="number"
								name="duree"
								id=""
								className={`bg-white w-full  border-0    placeholder:text-gray-400 focus:outline-cyan-500 
								outline outline-1 outline-gray-400 rounded-xl focus:outline-none focus:ring-0 caret-cyan-600 ${
									errors?.duree && "focus:outline-red-500"
								}`}
								placeholder="Insérez le titre de la tache .."
								{...register("duree", registerOptions.duree)}
							/>
							<p className="text-red-400">
								{errors?.duree && errors.duree.message}
							</p>
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
	const number = params.addTask;
	console.log(number);
	if (user) {
		let { data: tache, error_tache } = await supabase
			.from("tache")
			.select("*")
			.eq("projectid", number);
		return {
			props: {
				tache: tache,
			},
		};
	}
	console.log("Please login");
	return {
		redirect: {
			permanent: false,
			destination: `/account`,
		},
	};
}
