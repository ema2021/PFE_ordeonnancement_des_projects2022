import Image from "next/image";
import Link from "next/link";
const Navabar = () => {
	return (
		<nav className="flex items-center justify-between  px-8">
			<Link href="/" alt="Home" className="" passHref={true}>
				<div className="flex">
					<Image
						src="/logo.png"
						alt="Log Bezier Ordonnancer projects"
						width={300}
						height={80}
						className=" bg-white drop-shadow"
					/>
				</div>
			</Link>
			<div className="flex gap-4">
				<button className="rounded border-2 border-blue-600 px-8 py-2 text-blue-600">
					Login
				</button>
				<button className="rounded bg-blue-600 px-8 py-2 text-white">
					Sign up
				</button>
			</div>
		</nav>
	);
};

export default Navabar;
