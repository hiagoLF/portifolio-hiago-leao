import Link from "next/link";
import ProjectMedia from "@/components/project-media";
import TechnologyTags from "@/components/technology-tags";
import type { AccentStyle, Project } from "@/types/portfolio";
import styles from "@/components/project-card/styles.module.css";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className={styles.card}
			style={{ "--accent": project.color } as AccentStyle}
			aria-label={`View ${project.title}`}
		>
			<ProjectMedia project={project} controls={false} framed={false} />
			<div className={styles.content}>
				<div>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
				</div>
				<TechnologyTags items={project.technologies} />
			</div>
		</Link>
	);
}
