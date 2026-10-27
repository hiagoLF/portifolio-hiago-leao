import type { ProjectDetail, AccentStyle } from "@/types/portfolio";
import styles from "@/screens/project-details/components/detail-card/styles.module.css";

export default function DetailCard({ item }: { item: ProjectDetail }) {
	const Icon = item.icon;
	return (
		<article className={styles.card} style={{ "--accent": item.color } as AccentStyle}>
			<span className={styles.icon}>
				<Icon aria-hidden="true" />
			</span>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
		</article>
	);
}
