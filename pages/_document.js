import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
	return (
		<Html lang="en" className="">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/Personnal Logo.png" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			</Head>
			<body className="">
				<Main className="" />
				<NextScript />
				{/* <Footer /> */}
			</body>
		</Html>
	);
}
