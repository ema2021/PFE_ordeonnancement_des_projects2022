/**
 * Carte pour afficher l'employe.
 * @param {number} id  id de  l' employee.
 * @param {string}  nom Le nom de l' employee.
 * @param {string}  prenom Le prenom de l' employee.
 * @param {string}  email L'email de l' employee.
 * @param {string}  Poste Poste de l' employee.
 */
import Link from "next/link";
import Avatar from "react-avatar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import { supabase } from "@/lib/client";
import { useAuth } from "@/lib/auth";
export default function EmployeCard({ id, nom, prenom, email, poste }) {
	const { user, error } = useAuth();
	const router = useRouter();
	const query = router.query?.employeid;
	async function removeEmploye() {
		/**
		 * Remove l'employe de id.
		 */
		if (user) {
			const { data, error } = await supabase
				.from("ressources")
				.delete()// delete avec supabase
				.eq("id", id);
			if (error) {
				console.log(error);
			}
		}

		router.push("/dashboard/employes");//retour vers la meme  page
	}
	return (
		<div className="border  border-blue-200 rounded py-4 px-4 flex items-center  shadow justify-between ">
			<div className="flex items-center gap-2 text-lg">
				<Avatar name={`${nom} ${prenom} `} round={true} size={60} />
				<div>
					<p className="font-semibold capitalize">
						{nom + " " + prenom}
					</p>
					<p className="text-gray-600 font-light capitalize">
						{poste}
					</p>
					<Link href={`mailto:${email}`}>
						<a className="text-xs text-cyan-600">{email}</a>
					</Link>
				</div>
			</div>
			<div className="flex items-center gap-2">
				{" "}
				<Link href={`/dashboard/employes/update_employe/${id}`}>
					<button className="text-cyan-600 shadow-none">
						<EditIcon className="text-green-600" />
					</button>
				</Link>
				<button className="shadow-none" onClick={removeEmploye}>
					<DeleteIcon className="text-red-600" />
				</button>
			</div>
		</div>
	);
}
