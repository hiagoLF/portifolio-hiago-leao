import { notFound } from "next/navigation";
import { featuredProjects } from "@/constants/projects";
import ProjectDetailsScreen from "@/screens/project-details";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return featuredProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
	const { slug } = await params;
	const project = featuredProjects.find((item) => item.slug === slug);
	if (!project) notFound();
	return { title: `${project.title} | Hiago Leão Ferreira`, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
	const { slug } = await params;
	const project = featuredProjects.find((item) => item.slug === slug);
	if (!project) notFound();
	return <ProjectDetailsScreen project={project} />;
}
