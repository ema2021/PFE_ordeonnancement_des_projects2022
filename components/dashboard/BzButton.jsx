import Image from "next/image";
const BzButton = ({
	icon,
	handleClick,
	className = "",
	alt = "",
	children = "",
}) => {
	return (
		<button
			className={`${className} md:text-md  flex items-center justify-center gap-2 rounded py-2   px-1 text-sm font-semibold uppercase shadow-lg focus:ring-2 sm:px-2 md:px-4 lg:px-6`}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default BzButton;
