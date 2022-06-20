const TaskComponent = ({ children, number = "01", state = "active" }) => {
	return (
		<div
			className={`${
				state === "complete"
					? "border-gray-400 bg-cyan-300 opacity-60"
					: ""
			} ${state === "active" ? "border-blue-500 bg-cyan-100" : ""}${
				state === "next" ? "bg-blue-300" : ""
			} ${
				state === "remain" ? "bg-indigo-300" : ""
			} flex items-center justify-between rounded  border-2 p-2 text-gray-800 `}
		>
			<div
				className={`
				 flex  items-center justify-start gap-3  `}
			>
				<span className="text-lg font-semibold">{number}</span>
				<span className="md:text-md  text-sm ">{children}</span>
			</div>
			<div>
				{" "}
				{state == "complete" ? (
					<input
						id="default-checkbox"
						type="checkbox"
						value=""
						className=" h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						disabled
						checked
					/>
				) : (
					<input
						id="default-checkbox"
						type="checkbox"
						value=""
						className=" h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						disabled
					/>
				)}
			</div>
		</div>
	);
};

export default TaskComponent;
