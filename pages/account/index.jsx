import { Auth } from "@supabase/ui";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import { useAuth, VIEWS } from "@/lib/auth";
import { supabase } from "@/lib/client";

export default function Home() {
	const { user, view } = useAuth();
	const router = useRouter();

	if (view === VIEWS.UPDATE_PASSWORD) {
		return (
			<div className="">
				<Auth.UpdatePassword supabaseClient={supabase} />
			</div>
		);
	}
	if (view == VIEWS.SIGN_UP) {
		console.log("Sign Up");
	}
	user && router.push("/");

	return (
		<>
			{!user && (
				<div className="grid  h-screen  place-content-center px-4">
					{/* <form
						className={`${view == VIEWS.SIGN_UP ? "hidden" : ""}`}
					>
						<input
							type="text"
							name="name"
							placeholder="Nom"
							className="w-full  rounded border-2 py-2 px-2"
						/> */}
					<Auth view={view} supabaseClient={supabase} className="" />
					{/* </form> */}
				</div>
			)}
		</>
	);
}
