import "../styles/globals.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/lib/auth";
import { supabase } from "@/lib/client";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<AuthProvider supabase={supabase}>
			<Head>
				<link rel="icon" type="image/svg+xml" href="favicon.svg" />
			</Head>
			{router.pathname == "/" || router.pathname == "/account" ? (
				<Component {...pageProps} />
			) : (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</AuthProvider>
	);
}

export default MyApp;
