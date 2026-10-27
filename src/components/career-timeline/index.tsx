import { career } from "@/constants/career";
import CareerCard from "@/components/career-card";
import type { AccentStyle } from "@/types/portfolio";
import styles from "@/components/career-timeline/styles.module.css";

export default function CareerTimeline({ expanded = false }: { expanded?: boolean }) {
	return (
		<ol className={styles.timeline}>
			{career.map((item) => (
				<li key={item.id} style={{ "--accent": item.color } as AccentStyle}>
					<CareerCard experience={item} expanded={expanded} />
				</li>
			))}
		</ol>
	);
}
