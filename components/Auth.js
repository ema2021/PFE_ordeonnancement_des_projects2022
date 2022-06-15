import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Auth() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");

	const handleLogin = async (email) => {
		try {
			setLoading(true);
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert("Check your email for the login link!");
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className=" flex flex-center ">
			<div className="space-y-4">
				<h2 className="text-2xl font-semibold">
					Sign in via magic link with your email below
				</h2>
				<div>
					<input
						className="w-full border-none ring-1 rounded"
						type="email"
						placeholder="Your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<button
						onClick={(e) => {
							e.preventDefault();
							handleLogin(email);
						}}
						className="w-full bg-blue-500 py-2 px-3 rounded text-white text-lg font-semibold uppercase"
						disabled={loading}
					>
						<span>{loading ? "Loading" : "Send magic link"}</span>
					</button>
				</div>
			</div>
		</div>
	);
}
