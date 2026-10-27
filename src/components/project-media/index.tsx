import Image from "next/image";
import type { AccentStyle, Project } from "@/types/portfolio";
import styles from "@/components/project-media/styles.module.css";

export default function ProjectMedia({
	project,
	controls = true,
	framed = true,
}: {
	project: Project;
	controls?: boolean;
	framed?: boolean;
}) {
	return (
		<div
			className={`${styles.media} ${framed ? styles.frame : ""}`}
			style={{ "--accent": project.color } as AccentStyle}
		>
			{project.videoUrl ? (
				<video
					src={project.videoUrl}
					poster={project.imageUrl}
					controls={controls}
					className={controls ? undefined : styles.preview}
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					aria-label={`${project.title} preview`}
				>
					Your browser does not support video.
				</video>
			) : (
				<Image
					src={project.imageUrl}
					alt={`${project.title} interface`}
					width={960}
					height={640}
					unoptimized
					sizes="(max-width: 700px) 100vw, 900px"
				/>
			)}
		</div>
	);
}
