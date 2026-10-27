import type { ProjectChannel } from "@/types/portfolio";
import ExternalIcon from "@/assets/icons/open-in-new.svg";
import styles from "@/screens/project-details/components/channel-card/styles.module.css";

export default function ChannelCard({ item }: { item: ProjectChannel }) {
	const Icon = item.icon;
	return (
		<a
			className={styles.card}
			href={item.href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${item.title} (opens in a new tab)`}
		>
			<div className={styles.icons}>
				<Icon aria-hidden="true" />
				<ExternalIcon aria-hidden="true" />
			</div>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
		</a>
	);
}
