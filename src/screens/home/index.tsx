import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/arrow-right-alt.svg";
import HistoryIcon from "@/assets/icons/history-edu.svg";
import ProjectList from "@/components/project-list";
import { profile } from "@/constants/profile";
import { featuredProjects } from "@/constants/projects";
import { socialLinks } from "@/constants/social-links";
import CoreTechnologies from "@/screens/home/components/core-technologies";
import CareerTimeline from "@/components/career-timeline";
import styles from "@/screens/home/styles.module.css";

export default function HomeScreen() {
	return (
		<main id="main-content" className={styles.screen}>
			<section className={styles.hero} aria-labelledby="profile-title">
				<div className={styles.avatar}>
					<Image
						src={profile.image}
						alt={profile.name}
						width={176}
						height={176}
						sizes="(max-width: 850px) 144px, 176px"
						preload
					/>
				</div>
				<div className={styles.bio}>
					<span className={styles.eyebrow}>{profile.headline}</span>
					<h1 id="profile-title">{profile.name}</h1>
					<p className={styles.role}>{profile.role}</p>
					<p className={styles.description}>{profile.description}</p>
				</div>
			</section>
			<CoreTechnologies />
			<section className={styles.section} aria-labelledby="projects-title">
				<h2 id="projects-title">Featured Projects</h2>
				<ProjectList projects={featuredProjects} />
				<Link className={styles.allProjects} href="/projects">
					View all projects
					<ArrowIcon aria-hidden="true" />
				</Link>
			</section>
			<section className={styles.section} aria-labelledby="career-title">
				<div className={styles.heading}>
					<h2 id="career-title">Career Journey & Roadmap</h2>
					<Link className={styles.experienceLink} href="/experience">
						<HistoryIcon aria-hidden="true" />
						View all experience
					</Link>
				</div>
				<CareerTimeline />
			</section>
			<section className={styles.socials} aria-label="Connect with Hiago">
				{socialLinks.map(({ label, href, icon: Icon }) => (
					<a
						href={href}
						key={label}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${label} (opens in a new tab)`}
					>
						<span>
							<Icon aria-hidden="true" />
						</span>
						{label}
					</a>
				))}
			</section>
		</main>
	);
}
