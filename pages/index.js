import Head from "next/head";
import Hero from "../components/Hero.jsx";
import Navabar from "../components/Navabar.jsx";
export default function Home() {
	return (
		<div className="space-y-32 pt-4 md:px-16 lg:px-12 xl:px-24">
			<Navabar />
			<Hero />
		</div>
	);
}
