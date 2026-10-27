"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";
import styles from "@/components/header/styles.module.css";

export default function Header() {
	const pathname = usePathname();
	return (
		<header className={styles.header}>
			<nav aria-label="Main navigation" className={styles.navigation}>
				{navigation.map(({ label, href }) => (
					<Link
						key={href}
						href={href}
						aria-current={
							pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
								? "page"
								: undefined
						}
					>
						{label}
					</Link>
				))}
			</nav>
		</header>
	);
}
