import Image from "next/image";
const Linkdash = ({ text }) => {
	return (
		<button className="flex items-center gap-1 rounded-md py-1 px-2 hover:bg-slate-600 ">
			<div className="relative h-6 w-6">
				<Image src="/1.png" layout="fill" alt="" />
			</div>
			<span className="text-medium text-white">{text}</span>
		</button>
	);
};

export default Linkdash;
