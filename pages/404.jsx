import Link from "next/link";
export default function Custom404() {
	return (
		<div className="rounded-md bg-white px-40 py-20">
			<div className="flex flex-col items-center">
				<h1 className="text-9xl font-bold text-blue-600">404</h1>

				<h6 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
					<span className="text-red-500">Oops!</span> Page not found
				</h6>

				<p className="mb-8 text-center text-gray-500 md:text-lg">
					The page you’re looking for doesn’t exist.
				</p>

				<Link href="/dashboard">
					<a className="rounded-md bg-blue-100 px-8  py-2 text-sm font-semibold text-blue-600 ring-blue-600 hover:bg-blue-200 focus:ring-2">
						{" "}
						Go home
					</a>
				</Link>
			</div>
		</div>
	);
}
