import type { ComponentType, CSSProperties, SVGProps } from "react";

export type Technology = { label: string; color: string };
export type Icon = ComponentType<SVGProps<SVGSVGElement>>;
export type Project = {
	id: string;
	slug: string;
	imageUrl: string;
	videoUrl: string | null;
	title: string;
	description: string;
	technologies: Technology[];
	label: string;
	color: string;
	channels: ProjectChannel[];
	details: ProjectDetail[];
	stack: ProjectTechnology[];
};
export type AccentStyle = CSSProperties & { "--accent": string };

export type ProjectChannel = {
	icon: Icon;
	title: string;
	description: string;
	href: string;
};
export type ProjectDetail = {
	icon: Icon;
	title: string;
	description: string;
	color: string;
};
export type ProjectTechnology = Technology & { icon: Icon; description: string };
