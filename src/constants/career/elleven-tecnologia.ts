import CareerIcon from "@/assets/icons/apartment.svg";
import type { CareerExperience } from "@/types/career";

export const ellevenTecnologia: CareerExperience = {
	icon: CareerIcon,
	id: "elleven-tecnologia",
	period: "Jan 2022 — Nov 2022",
	location: "Vitória da Conquista, Bahia, Brazil · On-site",
	employmentType: "Full-time",
	title: "Frontend Software Engineer",
	company: "Elleven Tecnologia",
	color: "#d0bcff",
	description:
		"Built web and mobile solutions for transportation operations. Reduced meal " +
		"ticket queues from 35 to 8 minutes and increased ticket sales by 25% through " +
		"a commission system.",
	fullDescription: {
		introduction:
			"Elleven Tecnologia focuses on leading technological solutions for " +
			"transportation and mobility. With a united team, the company seeks to learn, " +
			"encourage creativity, and make a difference through intelligent and " +
			"efficient systems.",
		achievements: [
			"Developed a mobile application for issuing meal tickets to workers at the " +
				"bus company Novo Horizonte, streamlining the daily process and reducing " +
				"queue time from 35 to 8 minutes. Used React, Bootstrap, React Native, " +
				"Node.js, and MySQL.",
			"Developed a commission processing and withdrawal system for ticket sales at " +
				"Novo Horizonte. Gave sellers visibility into commissions earned from each " +
				"sale and allowed them to withdraw accumulated funds whenever they wished. " +
				"Encouraged better customer service and increased sales by 25%. Used React, " +
				"Bootstrap, Node.js, and MySQL.",
			"Developed a module for Novo Horizonte administrators to manage money " +
				"received through paid bank slips, making reconciliation 10x faster than the " +
				"previous process of receiving and manually counting cash. Used React, " +
				"Bootstrap, Node.js, and MySQL.",
		],
	},
	technologies: [
		"React",
		"React Native",
		"Bootstrap",
		"Node.js",
		"MySQL",
		"Laravel",
		"CodeIgniter",
		"Angular",
		"PHP",
	],
};
