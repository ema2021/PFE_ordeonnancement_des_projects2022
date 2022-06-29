import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/client";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const SearchComponent = () => {
	return (
		<div className=" w-full focus-within:ring-2 ring-blue-500 border border-cyan-600 rounded-2xl bg-white divide-y-2 text-gray-500">
			<div className=" h-10 w-full  flex  rounded-2xl px-2 items-center ">
				{" "}
				<input
					type="text"
					className="w-full border-none outline-none focus:outline-none focus:ring-0 bg-transparent caret-cyan-700"
					placeholder="Chercher les projets ...."
				/>
				<>
					<SearchIcon className="text-gray-500 h-8 w-8 border-none" />
				</>
			</div>
		</div>
	);
};

export default SearchComponent;
