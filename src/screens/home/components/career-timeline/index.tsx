import { career } from "@/constants/career";
import TechnologyTags from "@/components/technology-tags";
import type { AccentStyle } from "@/types/portfolio";
import styles from "@/screens/home/components/career-timeline/styles.module.css";

export default function CareerTimeline() {
	return (
		<ol className={styles.timeline}>
			{career.map((item) => (
				<li key={item.period} style={{ "--accent": item.color } as AccentStyle}>
					<article className={styles.card}>
						<div className={styles.meta}>
							<span className={styles.period}>{item.period}</span>
							<span className={styles.location}>
								<item.icon aria-hidden="true" />
								{item.location}
							</span>
						</div>
						<h3>{item.title}</h3>
						<p className={styles.company}>{item.company}</p>
						<p className={styles.description}>{item.description}</p>
						<TechnologyTags
							items={item.technologies.map((label) => ({ label, color: item.color }))}
						/>
					</article>
				</li>
			))}
		</ol>
	);
}
