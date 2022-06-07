import { Html, Head, Main, NextScript } from "next/document";
// import Image from "next/image";
import Footer from "./Footer";
export default function Document() {
	return (
		<Html lang="en" className="">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/Personnal Logo.png" />
			</Head>
			<body className="mx-auto w-4/5">
				<Main className="" />
				<NextScript />
				<Footer />
			</body>
		</Html>
	);
}
