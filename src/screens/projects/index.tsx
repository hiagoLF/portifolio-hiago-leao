import ProjectList from "@/components/project-list";
import { featuredProjects } from "@/constants/projects";
import styles from "@/screens/projects/styles.module.css";

export default function ProjectsScreen() {
	return (
		<main id="main-content" className={styles.screen} aria-labelledby="projects-title">
			<h1 id="projects-title" className={styles.title}>
				My Projects
			</h1>
			<ProjectList projects={featuredProjects} />
		</main>
	);
}
