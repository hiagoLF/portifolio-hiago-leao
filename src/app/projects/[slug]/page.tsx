import { connection } from "next/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { featuredProjects } from "@/constants/projects";
import LoadingScreen from "@/screens/loading";
import ProjectDetailsScreen from "@/screens/project-details";

type Props = { params: Promise<{ slug: string }> };

const ENABLE_LOADING_PREVIEW = true;
const LOADING_PREVIEW_DELAY_MS = 3000;

export function generateStaticParams() {
	return featuredProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
	const { slug } = await params;
	const project = featuredProjects.find((item) => item.slug === slug);
	if (!project) notFound();
	return { title: `${project.title} | Hiago Leão Ferreira`, description: project.description };
}

export default function ProjectPage({ params }: Props) {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<ProjectContent params={params} />
		</Suspense>
	);
}

async function ProjectContent({ params }: Props) {
	if (process.env.NODE_ENV === "development" && ENABLE_LOADING_PREVIEW) {
		await connection();
		await new Promise((resolve) => setTimeout(resolve, LOADING_PREVIEW_DELAY_MS));
	}

	const { slug } = await params;
	const project = featuredProjects.find((item) => item.slug === slug);
	if (!project) notFound();
	return <ProjectDetailsScreen project={project} />;
}
