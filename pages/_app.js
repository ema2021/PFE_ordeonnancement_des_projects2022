import "../styles/globals.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/lib/auth";
import { supabase } from "@/lib/client";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<AuthProvider supabase={supabase}>
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
