import TechnologyTags from "@/components/technology-tags";
import type { CareerExperience } from "@/types/career";
import styles from "@/components/career-card/styles.module.css";

type CareerCardProps = {
	experience: CareerExperience;
	expanded: boolean;
};

export default function CareerCard({ experience, expanded }: CareerCardProps) {
	const { icon: Icon, fullDescription } = experience;

	return (
		<article className={styles.card}>
			<div className={styles.meta}>
				<span className={styles.period}>{experience.period}</span>
				<span className={styles.location}>
					<Icon aria-hidden="true" />
					{experience.location}
				</span>
			</div>
			<h3>{experience.title}</h3>
			<p className={styles.company}>
				{experience.company}
				{expanded && experience.employmentType && ` · ${experience.employmentType}`}
			</p>
			<div className={styles.description}>
				<p>{expanded ? fullDescription.introduction : experience.description}</p>
				<br />
				{expanded && fullDescription.achievements.length > 0 && (
					<ul className={styles.achievements}>
						{fullDescription.achievements.map((achievement) => (
							<li key={achievement}>{achievement}</li>
						))}
					</ul>
				)}
			</div>
			<TechnologyTags
				items={experience.technologies.map((label) => ({ label, color: experience.color }))}
			/>
		</article>
	);
}
