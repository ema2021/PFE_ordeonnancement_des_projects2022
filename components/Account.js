import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Account({ session }) {
	const [loading, setLoading] = useState(true);
	const [username, setUsername] = useState(null);
	const [website, setWebsite] = useState(null);
	const [avatar_url, setAvatarUrl] = useState(null);

	useEffect(() => {
		getProfile();
	}, [session]);

	async function getProfile() {
		try {
			setLoading(true);
			const user = supabase.auth.user();

			let { data, error, status } = await supabase
				.from("profiles")
				.select(`username, website, avatar_url`)
				.eq("id", user.id)
				.single();

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				setUsername(data.username);
				setWebsite(data.website);
				setAvatarUrl(data.avatar_url);
			}
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}

	async function updateProfile({ username, website, avatar_url }) {
		try {
			setLoading(true);
			const user = supabase.auth.user();

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url,
				updated_at: new Date(),
			};

			let { error } = await supabase.from("profiles").upsert(updates, {
				returning: "minimal", // Don't return the value after inserting
			});

			if (error) {
				throw error;
			}
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className=" w-1/3 space-y-2">
			<div className="border-2 bg-gray-200  w-full rounded grid grid-cols-[5rem_auto] focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent ">
				<label
					htmlFor="email"
					className="px-2 py-1 font-semibold flex items-center"
				>
					Email
				</label>
				<input
					id="email"
					type="text"
					value={session.user.email}
					disabled
					className="w-full border-none outline-none rounded-r"
				/>
			</div>
			<div className="border-2 bg-gray-200  w-full rounded grid grid-cols-[5rem_auto] focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent ">
				<label
					htmlFor="username"
					className="px-2 py-1 font-semibold flex items-center"
				>
					Name
				</label>
				<input
					id="username"
					type="text"
					value={username || ""}
					onChange={(e) => setUsername(e.target.value)}
					className="w-full border-none outline-none rounded-r"
				/>
			</div>
			<div className="border-2 bg-gray-200  w-full rounded grid grid-cols-[5rem_auto] focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent ">
				<label
					htmlFor="website"
					className="px-2 py-1 font-semibold flex items-center"
				>
					Website
				</label>
				<input
					id="website"
					type="text"
					value={website || ""}
					onChange={(e) => setWebsite(e.target.value)}
					className="w-full border-none outline-none rounded-r"
				/>
			</div>

			<div className="grid grid-cols-2">
				<button
					onClick={() =>
						updateProfile({ username, website, avatar_url })
					}
					disabled={loading}
					className="bg-green-600 py-2 px-3 rounded focus:ring-2 focus:ring-green-800 text-white font-semibold"
				>
					{loading ? "Loading ..." : "Update"}
				</button>

				<button
					onClick={() => supabase.auth.signOut()}
					className="bg-red-600 py-2 px-3 rounded focus:ring-2 focus:ring-red-800 text-white font-semibold"
				>
					Sign Out
				</button>
			</div>
		</div>
	);
}
