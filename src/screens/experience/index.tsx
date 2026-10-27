import CareerTimeline from "@/components/career-timeline";
import styles from "@/screens/experience/styles.module.css";

export default function ExperienceScreen() {
	return (
		<main id="main-content" className={styles.screen} aria-labelledby="career-title">
			<h1 id="career-title" className={styles.title}>
				Career Journey & Roadmap
			</h1>
			<CareerTimeline />
		</main>
	);
}
