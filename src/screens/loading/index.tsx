import styles from "@/screens/loading/styles.module.css";

export default function LoadingScreen() {
	return (
		<main id="main-content" className={styles.screen}>
			<p role="status" className={styles.text}>
				Loading
			</p>
		</main>
	);
}
