import Image from "next/image";
import TechnologyTags from "@/components/technology-tags";
import type { AccentStyle, Project } from "@/types/portfolio";
import styles from "@/components/project-list/styles.module.css";

export default function ProjectList({ projects }: { projects: Project[] }) {
	return (
		<ul className={styles.list}>
			{projects.map((project) => (
				<li key={project.id}>
					<article className={styles.card} style={{ "--accent": project.color } as AccentStyle}>
						<div className={styles.media}>
							{project.videoUrl ? (
								<video
									src={project.videoUrl}
									poster={project.imageUrl}
									autoPlay
									muted
									loop
									playsInline
									aria-label={`${project.title} preview`}
								/>
							) : (
								<Image
									src={project.imageUrl}
									alt={`${project.title} interface`}
									fill
									unoptimized
									sizes="(max-width: 700px) 100vw, 380px"
								/>
							)}
							<span className={styles.label}>{project.label}</span>
						</div>
						<div className={styles.content}>
							<div>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
							</div>
							<TechnologyTags items={project.technologies} />
						</div>
					</article>
				</li>
			))}
		</ul>
	);
}
