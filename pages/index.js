import Head from "next/head";
import Hero from "../components/Hero.jsx";
import Navabar from "../components/Navabar.jsx";
export default function Home() {
	return (
		<div className="w-full space-y-32">
			<Navabar />
			<Hero />
		</div>
	);
}
