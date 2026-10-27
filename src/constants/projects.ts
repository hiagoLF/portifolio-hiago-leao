import { designImages } from "@/constants/design-images";
import type { Project } from "@/types/portfolio";

const projectDetails = [
	{
		title: "AuraPay NeoBanking Suite",
		label: "Live Demo",
		color: "#4cd7f6",
		description:
			"High-frequency instant payments. Reduced financial statement rendering time " +
			"by 45% through optimized virtualization and an offline-first architecture.",
		technologies: ["React Native", "TypeScript", "Reanimated 3", "Redux Toolkit"],
	},
	{
		title: "OmniPulse Video & Audio Stream",
		label: "Case Study",
		color: "#d0bcff",
		description:
			"A hybrid native media player with hardware-accelerated rendering, " +
			"picture-in-picture support, and real-time playback synchronization over WebSockets.",
		technologies: ["React", "Expo AV", "WebRTC", "Tailwind CSS"],
	},
	{
		title: "TaskMatrix Enterprise Sync",
		label: "Live Demo",
		color: "#4edea3",
		description:
			"A real-time collaborative canvas for remote teams. Distributed conflict " +
			"resolution with Yjs CRDTs and fluid 60fps synchronization with custom drag and drop.",
		technologies: ["Next.js", "CRDT / Yjs", "Zustand", "Tailwind"],
	},
	{
		title: "Lumina DS — Universal Design Tokens",
		label: "Open Source",
		color: "#4cd7f6",
		description:
			"A shared library of 60+ accessible components for React and React Native, " +
			"unified in a Turborepo monorepo and reducing code duplication by 65%.",
		technologies: ["Turborepo", "Storybook", "Radix UI", "Jest / Playwright"],
	},
	{
		title: "Vitalis Telemedicine & Vitals",
		label: "Case Study",
		color: "#d0bcff",
		description:
			"A medical platform with end-to-end encrypted consultations, Bluetooth " +
			"wearable integration, and a simplified interface resilient to slow mobile connections.",
		technologies: ["React Native", "BLE (Bluetooth)", "WebRTC", "E2E Encrypted"],
	},
];

export const featuredProjects: Project[] = projectDetails.map((project, index) => ({
	...project,
	id: project.title,
	imageUrl: designImages[index + 1],
	videoUrl: null,
	technologies: project.technologies.map((label) => ({ label, color: project.color })),
}));
