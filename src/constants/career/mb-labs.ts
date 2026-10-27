import CareerIcon from "@/assets/icons/location-on.svg";
import type { CareerExperience } from "@/types/career";

export const mbLabs: CareerExperience = {
	icon: CareerIcon,
	id: "mb-labs",
	period: "Nov 2022 — Present",
	location: "Campinas, São Paulo, Brazil · Remote",
	title: "Frontend Software Engineer",
	company: "MB Labs",
	color: "#4cd7f6",
	description:
		"Led a full-stack team, improving feature delivery speed by 4x. Built web and " +
		"mobile fintech features, reducing onboarding abandonment by 60%.",
	fullDescription: {
		introduction:
			"MB Labs is a global fintech specializing in financial technology and the " +
			"development of high-performance digital systems and applications for the " +
			"financial market. Founded in 2013 as a startup, the company now has over 300 " +
			"professionals across Brazil, transforming complex challenges into secure, " +
			"scalable solutions that deliver real impact for businesses and individuals.",
		achievements: [
			"Built the Knowledge Paths module for a mobile app using React, React Native, " +
				"and Sass, providing students with a clear visual roadmap of required " +
				"materials. The new interface increased engagement by 5x within the first " +
				"month.",
			"Acted as Lead Software Engineer for a full-stack team, guiding, monitoring, " +
				"and developing alongside the team while helping define development " +
				"standards. Used React, React Native, Node.js, Next.js, Prisma, PostgreSQL, " +
				"MongoDB, Firebase, and GraphQL to organize the team and improve feature " +
				"delivery speed by 4x.",
			"Developed the frontend of an installment payment module for a real estate " +
				"app where clients pay their property financing. Improved visibility into " +
				"paid and upcoming bank slips, reducing overdue payments by 80% compared with " +
				"sending slips only by email or mail. Used React Native and Styled " +
				"Components.",
			"Refactored the onboarding module of a fintech mobile app to make the " +
				"experience more intuitive and fluid, reducing abandonment by 60% among new " +
				"users. Used React, Sass, and React Native.",
			"Developed the frontend of a Refer and Earn module in a fintech app, allowing " +
				"users to refer new customers to the bank and earn points. Increased user " +
				"acquisition by 3x using React and React Native.",
			"Maintained legacy systems and refactored older code, reducing bug incidence " +
				"and improving application performance using React and React Native.",
		],
	},
	technologies: [
		"React",
		"React Native",
		"Next.js",
		"TypeScript",
		"Sass",
		"Styled Components",
		"Node.js",
		"Prisma",
		"PostgreSQL",
		"MongoDB",
		"Firebase",
		"GraphQL",
	],
};
