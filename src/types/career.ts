import type { Icon } from "@/types/portfolio";

export type CareerExperience = {
	id: string;
	period: string;
	location: string;
	employmentType?: string;
	icon: Icon;
	title: string;
	company: string;
	color: string;
	description: string;
	fullDescription: { introduction: string; achievements: string[] };
	technologies: string[];
};
