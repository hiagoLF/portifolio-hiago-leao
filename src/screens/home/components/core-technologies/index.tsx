import { coreTechnologies } from "@/constants/technologies";
import type { AccentStyle } from "@/types/portfolio";
import styles from "@/screens/home/components/core-technologies/styles.module.css";

export default function CoreTechnologies() {
	return (
		<section aria-labelledby="technologies-title" className={styles.section}>
			<h2 id="technologies-title">Core Technologies</h2>
			<ul className={styles.grid}>
				{coreTechnologies.map(({ icon: Icon, label, color }) => (
					<li key={label} style={{ "--accent": color } as AccentStyle}>
						<span>
							<Icon aria-hidden="true" />
						</span>
						<span>{label}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
