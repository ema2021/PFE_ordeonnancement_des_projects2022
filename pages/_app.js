import "../styles/globals.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			{router.pathname == "/" ? (
				<Component {...pageProps} />
			) : (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</>
	);
}

export default MyApp;
