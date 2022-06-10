import Layout from "../../components/Layout";
import ProjectCard from "../../components/dashboard/projectCard";
const index = () => {
	return (
		<Layout>
			<div className="flex  items-center">
				<div className="grid gap-2 px-4 py-2">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</Layout>
	);
};

export default index;
