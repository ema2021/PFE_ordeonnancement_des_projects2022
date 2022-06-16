import { Auth } from "@supabase/ui";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import { useAuth, VIEWS } from "@/lib/auth";
import { supabase } from "@/lib/client";

export default function Home() {
	const { user, view, signOut } = useAuth();
	const router = useRouter();

	if (view === VIEWS.UPDATE_PASSWORD) {
		return (
			<div className="bg-red-200">
				<Auth.UpdatePassword supabaseClient={supabase} />
			</div>
		);
	}
	user && router.push("/dashboard");

	return (
		<>
			{!user && (
				<div className="h-screen grid place-content-center">
					<Auth view={view} supabaseClient={supabase} className="" />
				</div>
			)}
		</>
	);
}
