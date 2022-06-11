const TaskComponent = ({ children, number = "01", state = "active" }) => {
	return (
		<div
			className={`${state === "done" ? "bg-gray-300 opacity-60" : ""} ${
				state === "active" ? "bg-cyan-300" : ""
			}${state === "next" ? "bg-blue-300" : ""} ${
				state === "remain" ? "bg-indigo-300" : ""
			} justify-between  flex items-center gap-3 rounded p-2 text-gray-800 `}
		>
			<span className="font-semibold">{number}</span>
			<span className=" ">{children}</span>
			{state == "done" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="h-6 w-6"
					viewBox="0 0 16 16"
				>
					<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="h-6 w-6 "
					viewBox="0 0 16 16"
				>
					<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
				</svg>
			)}
		</div>
	);
};

export default TaskComponent;
