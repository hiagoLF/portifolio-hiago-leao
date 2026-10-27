import type { ProjectTechnology, AccentStyle } from "@/types/portfolio";
import styles from "@/screens/project-details/components/technology-card/styles.module.css";

export default function TechnologyCard({ item }: { item: ProjectTechnology }) {
	const Icon = item.icon;
	return (
		<li className={styles.card} style={{ "--accent": item.color } as AccentStyle}>
			<span className={styles.icon}>
				<Icon aria-hidden="true" />
			</span>
			<h3>{item.label}</h3>
			<p>{item.description}</p>
		</li>
	);
}
