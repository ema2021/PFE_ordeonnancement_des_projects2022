const TaskComponent = ({ children, number = "01", state = "active" }) => {
	return (
		<div
			className={`${state === "done" ? "bg-gray-300 opacity-60" : ""} ${
				state === "active" ? "bg-cyan-300" : ""
			}${state === "next" ? "bg-blue-300" : ""} ${
				state === "remain" ? "bg-indigo-300" : ""
			} justify-between  flex items-center gap-3 rounded p-2 text-gray-800 `}
		>
			<span className="text-lg font-semibold">{number}</span>
			<span className="md:text-md  text-sm ">{children}</span>
			{state == "done" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="h-8 w-8"
					viewBox="0 0 16 16"
				>
					<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
				</svg>
			) : (
				<input
					id="default-checkbox"
					type="checkbox"
					value=""
					className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
			)}
		</div>
	);
};

export default TaskComponent;
