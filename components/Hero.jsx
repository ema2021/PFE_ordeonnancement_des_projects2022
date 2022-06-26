import Image from "next/image";
import Link from "next/link";
export default function Hero() {
	return (
		<div className="space-y-12">
			<section className="lg: grid gap-8  lg:grid-cols-2 ">
				<div className=" relative drop-shadow-2xl lg:order-last  m-6  aspect-square md:auto  sm:mx-auto md:w-full h-96 w-full">
					<Image
						src="/2.png"
						alt=" Bezier Ordonnancer projects"
						// width={800}
						// height={616}
						layout="fill"
						className="  drop-shadow"
					/>
				</div>
				<div className="grid gap-6  px-4 py-4">
					<h1 className="text-center text-4xl font-extrabold uppercase sm:text-5xl md:text-left ">
						Planifier et ordonnancer vos projets en toute{" "}
						<span className="text-[#1053EB]">
							liberté et toujours !
						</span>
					</h1>
					<p className="text-xl sm:text-2xl">
						Bezier permet de planifier et de programmer des projets
						avec étapes très simples et intuitives
					</p>
					<Link href="/account" passHref={true}>
						<button className="rounded-full  border-2 border-[#1053EB] bg-[#1053EB] py-1 text-3xl font-bold text-white shadow shadow-blue-500  transition ease-in hover:border-2 hover:bg-white hover:text-[#1053EB] flex items-center justify-center uppercase">
							Commencer
						</button>
					</Link>
				</div>
			</section>
			<section className="grid  gap-8  lg:grid-cols-2 ">
				<div className="relative drop-shadow-2xl     m-6  aspect-square h-96  flex items-center justify-center">
					<Image
						src="/1.png"
						alt="Log Bezier Ordonnancer projects"
						// width={800}
						// height={616}
						layout="fill"
						className=""
					/>
				</div>
				<div className="flex flex-col justify-center space-y-8  px-6 py-4">
					<h1 className=" text-center text-4xl font-extrabold">
						Passage d'un diagramme de Gantt à un graphe de Pert ou à
						un calendrier.
					</h1>
					<Link href="/account">
						<button className=" mx-auto flex items-center   gap-2 rounded-full border-2 border-[#1053EB] py-3   px-4 text-xl font-medium text-[#1053EB] shadow shadow-blue-500 transition ease-in hover:border-2 hover:bg-[#1053EB]  hover:text-white">
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
									d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							Lancer un projet
						</button>
					</Link>
					<p className="text-xl sm:text-2xl">
						Bezier donne un planificateur de projet et une
						planification incroyable avec étapes très simples et
						intuitives.
					</p>
				</div>
			</section>
		</div>
	);
}
