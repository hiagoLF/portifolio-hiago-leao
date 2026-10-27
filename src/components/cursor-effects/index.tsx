"use client";

import { useEffect, useRef } from "react";
import styles from "@/components/cursor-effects/styles.module.css";

export default function CursorEffects() {
	const layer = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const query = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
		if (!query.matches) return;
		let frame = 0;
		const move = (event: PointerEvent) => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const element = layer.current;
				if (!element) return;
				element.style.setProperty("--cursor-x", `${event.clientX}px`);
				element.style.setProperty("--cursor-y", `${event.clientY}px`);
				element.dataset.visible = "true";
			});
		};
		const leave = () => {
			if (layer.current) layer.current.dataset.visible = "false";
		};
		window.addEventListener("pointermove", move);
		document.addEventListener("pointerleave", leave);
		window.addEventListener("blur", leave);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("pointermove", move);
			document.removeEventListener("pointerleave", leave);
			window.removeEventListener("blur", leave);
		};
	}, []);
	return (
		<div ref={layer} className={styles.effects} aria-hidden="true">
			<div className={styles.glow} />
			<div className={styles.ring} />
		</div>
	);
}
