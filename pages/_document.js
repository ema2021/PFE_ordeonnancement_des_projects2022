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
			<body className="">
				<Main className="" />
				<NextScript />
				<Footer />
			</body>
		</Html>
	);
}
