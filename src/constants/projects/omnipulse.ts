import PlayIcon from "@/assets/icons/play-arrow.svg";
import GridIcon from "@/assets/icons/grid-view.svg";
import BoltIcon from "@/assets/icons/bolt.svg";
import SafetyIcon from "@/assets/icons/health-and-safety.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { designImages } from "@/constants/design-images";
import type { Project } from "@/types/portfolio";

export const omnipulse: Project = {
	id: "omnipulse",
	slug: "omnipulse",
	title: "OmniPulse Video & Audio Stream",
	description: "A hybrid media player concept exploring seamless audio and video across devices.",
	imageUrl: designImages[2],
	videoUrl: "https://lorem.video/720p",
	label: "Concept project",
	color: "#d0bcff",
	channels: [
		{
			icon: PlayIcon,
			title: "Sample video",
			description: "Demonstration footage",
			href: "https://lorem.video/720p",
		},
	],
	technologies: [
		{ label: "React", color: "#d0bcff" },
		{ label: "Expo AV", color: "#d0bcff" },
		{ label: "WebRTC", color: "#d0bcff" },
		{ label: "Tailwind CSS", color: "#d0bcff" },
	],
	details: [
		{
			icon: SafetyIcon,
			title: "The challenge",
			description:
				"Keep playback predictable as network conditions change and users move between screens.",
			color: "#d0bcff",
		},
		{
			icon: GridIcon,
			title: "Technical approach",
			description:
				"Explore native playback, picture-in-picture, and synchronized playback " +
				"events over WebSockets.",
			color: "#d0bcff",
		},
		{
			icon: BoltIcon,
			title: "Expected outcomes",
			description:
				"Aim for smooth playback and accessible controls. Production performance " +
				"has not been measured.",
			color: "#4edea3",
		},
	],
	stack: [
		{ icon: ReactIcon, label: "React", description: "UI foundation", color: "#d0bcff" },
		{ icon: GridIcon, label: "Expo AV", description: "Application tooling", color: "#d0bcff" },
		{ icon: GridIcon, label: "WebRTC", description: "Interaction layer", color: "#d0bcff" },
		{ icon: GridIcon, label: "Tailwind CSS", description: "State and styling", color: "#d0bcff" },
	],
};
