import Image from "next/image";
import Link from "next/link";
const Navabar = ({ hidebuttons = "" }) => {
	return (
		<nav className="flex items-center justify-between px-2">
			<Link href="/" alt="Home" className="" passHref={true}>
				<div className=" flex">
					{" "}
					<div className="relative h-12 w-28">
						<Image
							src="/logo.png"
							// height={200}
							// width={200}
							layout="fill"
							alt=""
							// objectFit="cover"
							className=""
						/>
					</div>
				</div>
			</Link>
			<div className={`space-x-2 ${hidebuttons}`}>
				<button className="rounded  px-2  py-1 font-medium text-blue-600 hover:bg-gray-200">
					Login
				</button>
				<Link href="/account">
					<a className="rounded border-2 border-[#1053EB]  bg-[#1053EB] px-2 py-1 py-1 font-semibold  text-white shadow-blue-500 transition  ease-in hover:border-2 hover:bg-white hover:text-[#1053EB] hover:shadow">
						Sign Up
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navabar;
