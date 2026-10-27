import Link from "next/link";
import ArrowIcon from "@/assets/icons/arrow-right-alt.svg";
import ProjectMedia from "@/components/project-media";
import ChannelCard from "@/screens/project-details/components/channel-card";
import DetailCard from "@/screens/project-details/components/detail-card";
import TechnologyCard from "@/screens/project-details/components/technology-card";
import type { Project } from "@/types/portfolio";
import styles from "@/screens/project-details/styles.module.css";

export default function ProjectDetailsScreen({ project }: { project: Project }) {
	return (
		<main id="main-content" className={styles.screen} aria-labelledby="project-title">
			<Link href="/projects" className={styles.back}>
				<ArrowIcon aria-hidden="true" /> Back to projects
			</Link>
			<section className={styles.hero} aria-labelledby="project-title">
				<div>
					<h1 id="project-title">{project.title}</h1>
					<p>{project.description}</p>
				</div>
				<ProjectMedia project={project} />
			</section>
			{project.channels.length > 0 && (
				<section aria-labelledby="channels-title" className={styles.section}>
					<h2 id="channels-title">Channels & quick access</h2>
					<div className={styles.channels}>
						{project.channels.map((item) => (
							<ChannelCard key={item.title} item={item} />
						))}
					</div>
				</section>
			)}
			<section aria-labelledby="details-title" className={styles.section}>
				<h2 id="details-title">Details & technical challenges</h2>
				<div className={styles.details}>
					{project.details.map((item) => (
						<DetailCard key={item.title} item={item} />
					))}
				</div>
			</section>
			<section aria-labelledby="stack-title" className={styles.section}>
				<h2 id="stack-title">Technology stack & tools</h2>
				<ul className={styles.stack}>
					{project.stack.map((item) => (
						<TechnologyCard key={item.label} item={item} />
					))}
				</ul>
			</section>
			<footer className={styles.footer}>Hiago Leão Ferreira © 2026</footer>
		</main>
	);
}
