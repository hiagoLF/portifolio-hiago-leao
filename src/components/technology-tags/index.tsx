import type { AccentStyle, Technology } from "@/types/portfolio";
import styles from "@/components/technology-tags/styles.module.css";

export default function TechnologyTags({ items }: { items: Technology[] }) {
	return (
		<ul className={styles.tags}>
			{items.map(({ label, color }) => (
				<li key={label} style={{ "--accent": color } as AccentStyle}>
					{label}
				</li>
			))}
		</ul>
	);
}
