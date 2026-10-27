import GridIcon from "@/assets/icons/grid-view.svg";
import BoltIcon from "@/assets/icons/bolt.svg";
import SafetyIcon from "@/assets/icons/health-and-safety.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { designImages } from "@/constants/design-images";
import type { Project } from "@/types/portfolio";

export const aurapay: Project = {
	id: "aurapay",
	slug: "aurapay",
	title: "AuraPay NeoBanking Suite",
	description:
		"An instant banking concept exploring responsive payments and resilient offline experiences.",
	imageUrl: designImages[1],
	videoUrl: null,
	label: "Concept project",
	color: "#4cd7f6",
	channels: [],
	technologies: [
		{ label: "React Native", color: "#4cd7f6" },
		{ label: "TypeScript", color: "#4cd7f6" },
		{ label: "Reanimated 3", color: "#4cd7f6" },
		{ label: "Redux Toolkit", color: "#4cd7f6" },
	],
	details: [
		{
			icon: SafetyIcon,
			title: "The challenge",
			description:
				"Keep payment history usable on unstable mobile networks without blocking navigation.",
			color: "#4cd7f6",
		},
		{
			icon: GridIcon,
			title: "Technical approach",
			description:
				"Explore an offline-first data flow, cached statements, and virtualized transaction lists.",
			color: "#d0bcff",
		},
		{
			icon: BoltIcon,
			title: "Expected outcomes",
			description:
				"Aim for responsive statements and clear transaction states. This concept " +
				"has no verified production metrics.",
			color: "#4edea3",
		},
	],
	stack: [
		{ icon: ReactIcon, label: "React Native", description: "UI foundation", color: "#4cd7f6" },
		{ icon: GridIcon, label: "TypeScript", description: "Application tooling", color: "#4cd7f6" },
		{ icon: GridIcon, label: "Reanimated 3", description: "Interaction layer", color: "#4cd7f6" },
		{ icon: GridIcon, label: "Redux Toolkit", description: "State and styling", color: "#4cd7f6" },
	],
};
