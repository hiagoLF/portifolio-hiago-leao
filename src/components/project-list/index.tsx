import ProjectCard from "@/components/project-card";
import type { Project } from "@/types/portfolio";
import styles from "@/components/project-list/styles.module.css";

export default function ProjectList({ projects }: { projects: Project[] }) {
	return (
		<ul className={styles.list}>
			{projects.map((project) => (
				<li key={project.id}>
					<ProjectCard project={project} />
				</li>
			))}
		</ul>
	);
}
