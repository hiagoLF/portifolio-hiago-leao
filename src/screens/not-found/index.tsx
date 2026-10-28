import Link from "next/link";
import ArrowIcon from "@/assets/icons/arrow-right-alt.svg";
import styles from "@/screens/not-found/styles.module.css";

export default function NotFoundScreen() {
	return (
		<main id="main-content" className={styles.screen}>
			<h1 className={styles.title}>Page not found</h1>
			<Link className={styles.homeLink} href="/">
				<ArrowIcon aria-hidden="true" />
				Back to Home
			</Link>
		</main>
	);
}
