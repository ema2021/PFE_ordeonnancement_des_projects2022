import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="bg-red-200">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
