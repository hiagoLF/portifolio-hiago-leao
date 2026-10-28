import BoltIcon from "@/assets/icons/bolt.svg";
import ExpoIcon from "@/assets/icons/expo.svg";
import GearIcon from "@/assets/icons/gear.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import GridIcon from "@/assets/icons/grid-view.svg";
import MobileIcon from "@/assets/icons/stay-current-portrait.svg";
import MovieIcon from "@/assets/icons/movie.svg";
import ReactIcon from "@/assets/icons/react.svg";
import type { Project } from "@/types/portfolio";

const color = "#d0bcff";

export const myLoveFlix: Project = {
	id: "myloveflix",
	slug: "myloveflix",
	title: "MyLoveFlix",
	description:
		"A mobile streaming app built with Expo and React Native, inspired by TargetVideo's " +
		"DramaFlash. Explore series by genre, discover featured stories, browse episodes, and " +
		"watch in an immersive player. Built independently with a focus on interface design; " +
		"all app flows are simulated, including favorites and credit purchases.",
	imageUrl: "https://github.com/hiagoLF/MyLoveFlix/raw/main/demo/details.gif",
	imageWidth: 1080,
	imageHeight: 2400,
	videoUrl: null,
	label: "Mobile UI showcase",
	color,
	channels: [
		{
			icon: GitHubIcon,
			title: "Source code",
			description: "Explore the project on GitHub.",
			href: "https://github.com/hiagoLF/MyLoveFlix",
		},
		{
			icon: MobileIcon,
			title: "Download Android APK",
			description: "Open the Expo build page to download the Android app.",
			href:
				"https://expo.dev/accounts/hiagolf/projects/MyLoveFlix/builds/" +
				"cbe4448a-4aa0-4c57-a8f5-a8f54c3ccf25",
		},
	],
	technologies: [
		{ label: "React Native", color },
		{ label: "Expo", color },
		{ label: "Expo Router", color },
		{ label: "FlatList", color },
		{ label: "react-native-svg", color },
		{ label: "expo-image", color },
		{ label: "expo-video", color },
	],
	details: [
		{
			icon: MobileIcon,
			title: "The challenge",
			description:
				"Build a responsive mobile interface that connects series discovery, favorites, " +
				"and credit purchases for unlocking more episodes. Keep each step clear and " +
				"touch interactions responsive within a simulated streaming experience.",
			color,
		},
		{
			icon: GearIcon,
			title: "Technical approach",
			description:
				"Built with React Native and Expo, using Expo Router for simple, file-based " +
				"navigation similar to Next.js. FlatList virtualizes series and episode lists, " +
				"expo-image handles images, expo-video powers playback, and react-native-svg " +
				"renders vector graphics.",
			color,
		},
		{
			icon: BoltIcon,
			title: "Results",
			description:
				"A cohesive interface with responsive touch interactions and clear paths from " +
				"discovery to playback. Simulated favorites and credit purchases demonstrate " +
				"the complete user journey. Performance has not been formally measured.",
			color: "#4edea3",
		},
	],
	stack: [
		{ icon: ReactIcon, label: "React Native", description: "Native mobile interface", color },
		{ icon: ExpoIcon, label: "Expo", description: "Mobile development platform", color },
		{ icon: GridIcon, label: "Expo Router", description: "File-based navigation", color },
		{
			icon: GridIcon,
			label: "FlatList",
			description: "Virtualized series and episode lists",
			color,
		},
		{ icon: ReactIcon, label: "react-native-svg", description: "Vector graphics", color },
		{ icon: ExpoIcon, label: "expo-image", description: "Image rendering", color },
		{ icon: MovieIcon, label: "expo-video", description: "Immersive video playback", color },
	],
};
