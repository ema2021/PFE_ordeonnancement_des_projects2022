import Link from "next/link";
import BzButton from "../../components/dashboard/BzButton";
const Project = () => {
	return (
		<div className="space-y-4">
			<Link href="/dashboard" passHref={true}>
				<a className="flex w-24 items-center  gap-1 rounded bg-red-500 py-[4px] px-3 font-semibold text-white ring-red-600 hover:bg-red-600 focus:ring-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
						/>
					</svg>
					Back
				</a>
			</Link>

			<div className="grid md:grid-cols-3  ">
				<div className="grid gap-3 md:col-span-2">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
						Creer une Ligne de commande
					</h1>
					<div className=" flex w-full items-center gap-8   text-gray-700">
						<h2>
							<span className="font-semibold text-cyan-600">
								starts :
							</span>{" "}
							Monday, 12 January 2021
						</h2>
						<h2>
							<span className="font-semibold text-cyan-600">
								Ends :
							</span>{" "}
							Monday, 12 January 2021
						</h2>
					</div>
					<p className="px-4 py-2 leading-6 md:px-2">
						Lorem ipsum dolor sit amet, officia excepteur ex fugiat
						reprehenderit enim labore culpa sint ad nisi Lorem
						pariatur mollit ex esse exercitation amet. Nisi
						animcupidatat excepteur officia. Reprehenderit nostrud
						nostrud ipsum Lorem est aliquip amet voluptate voluptate
						dolor minim nulla est laboris sint cupidatat ullamco ut
						ea consectetur et est culpa et culpa duis.
					</p>
				</div>
				<div className="flex h-full w-full items-center justify-center p-2  md:items-start">
					<BzButton className="bg-blue-600 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Add new Task
					</BzButton>
				</div>
			</div>
		</div>
	);
};

export default Project;
