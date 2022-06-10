import Image from "next/image";
const dashhead = ({ children }) => {
	return (
		<nav className="xs:gap-8  xs:px-4 flex items-center  justify-between gap-1 px-2 py-1">
			{children}
			<form className="flex  w-full items-center sm:w-3/4 lg:w-1/2">
				<label htmlFor="simple-search" className="sr-only">
					Search
				</label>
				<div className="relative w-full">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							className="h-5 w-5 text-gray-500 dark:text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<input
						type="text"
						id="simple-search"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						placeholder="Search"
						required
					/>
				</div>
			</form>
			<div className="flex items-center gap-1">
				<div className="  full relative h-8 w-8 rounded drop-shadow-2xl lg:order-last">
					<Image
						src="/2.png"
						alt=" Bezier Ordonnancer projects"
						// width={800}
						// height={616}
						layout="fill"
						className="  drop-shadow"
					/>
				</div>{" "}
				<span>User Name</span>
			</div>
		</nav>
	);
};

export default dashhead;
