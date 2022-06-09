import Image from "next/image";
const Img = ({ src ,}) => {
	return (
		<div className="  drop-shadow-2xl lg:order-last">
			<Image
				src={src}
				alt=" Bezier Ordonnancer projects"
				width={800}
				height={616}
				className="  drop-shadow"
			/>
		</div>
	);
};

export default Img;
