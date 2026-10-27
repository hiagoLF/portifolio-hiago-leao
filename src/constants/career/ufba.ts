import CareerIcon from "@/assets/icons/bolt.svg";
import type { CareerExperience } from "@/types/career";

export const ufba: CareerExperience = {
	icon: CareerIcon,
	id: "ufba",
	period: "Jul 2021 — Jan 2022",
	location: "Vitória da Conquista, Bahia, Brazil · Hybrid",
	employmentType: "Internship",
	title: "Bioinformatics Software Engineer Intern",
	company: "Universidade Federal da Bahia (UFBA)",
	color: "#bdc8ca",
	description:
		"Built a full-stack application for predicting transmembrane regions in " +
		"proteins. Adopted by researchers and students to accelerate molecular " +
		"biology research.",
	fullDescription: {
		introduction:
			"Developed a full-stack web application for predicting transmembrane regions " +
			"in proteins. University researchers and students adopted it as their " +
			"analysis tool, accelerating molecular biology research and improving " +
			"research development efficiency. Used React, TypeScript, and Node.js.",
		achievements: [],
	},
	technologies: ["React", "TypeScript", "Node.js", "Next.js", "Python", "Pandas", "Matplotlib"],
};
