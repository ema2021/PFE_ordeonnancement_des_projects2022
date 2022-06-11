const ProjectCard = ({ percent = 35 }) => {
	return (
		<div className="flex  justify-between  rounded-lg border-2 border-cyan-500 py-2 px-2 text-gray-700 hover:bg-cyan-100">
			<h2 className="max-w-prose  sm:w-80 md:w-full lg:p-4 lg:text-xl">
				Projetcs Title here Lorem ipsum dolor sit amet, qui minim labore
			</h2>
			<div className="  hidden w-full  items-center space-x-2 px-2  pt-1 sm:flex lg:text-lg ">
				<span>11/12/22</span>

				<div className=" w-full rounded-full bg-gray-300 ">
					<div
						className={`  lg:text-md rounded-full bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-800 p-0.5 text-center text-xs font-medium leading-none text-blue-100 lg:p-1`}
						style={{ width: percent + "%" }}
					>
						{" "}
						{percent + "%"}
					</div>
				</div>

				<span>11/01/23</span>
			</div>
			<div className="flex items-center gap-2">
				{" "}
				<button className="text-cyan-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 lg:h-8 lg:w-8"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
						<path
							fillRule="evenodd"
							d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 lg:h-8 lg:w-8"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
