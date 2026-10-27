import type { ComponentType, CSSProperties, SVGProps } from "react";

export type Technology = { label: string; color: string };
export type Icon = ComponentType<SVGProps<SVGSVGElement>>;
export type Project = {
	id: string;
	imageUrl: string;
	videoUrl: string | null;
	title: string;
	description: string;
	technologies: Technology[];
	label: string;
	color: string;
};
export type AccentStyle = CSSProperties & { "--accent": string };
