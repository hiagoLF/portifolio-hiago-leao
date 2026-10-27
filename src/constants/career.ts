import LocationIcon from "@/assets/icons/location-on.svg";
import ApartmentIcon from "@/assets/icons/apartment.svg";
import BoltIcon from "@/assets/icons/bolt.svg";

export const career = [
	{
		period: "2022 — Present",
		location: "Remote • Global Fintech",
		icon: LocationIcon,
		title: "Senior Frontend Engineer & Tech Lead",
		company: "Fintech Global Tech Hub",
		color: "#4cd7f6",
		description:
			"Technical leadership across React Native mobile and Next.js web applications. " +
			"Standardized micro-frontends, improved Core Web Vitals by 38%, and mentored 12 engineers.",
		technologies: ["React Native", "TypeScript", "Design Systems", "CI/CD Fastlane"],
	},
	{
		period: "2020 — 2022",
		location: "São Paulo / Hybrid",
		icon: ApartmentIcon,
		title: "Senior Frontend Specialist",
		company: "Enterprise Software Labs",
		color: "#d0bcff",
		description:
			"Built data-intensive dashboards with React and Redux Toolkit. Refactored " +
			"a monolith into scalable, decoupled modules with automated testing and coverage pipelines.",
		technologies: ["React", "Next.js", "Data Visualization", "Jest & Cypress"],
	},
	{
		period: "2018 — 2020",
		location: "Tech Startup",
		icon: BoltIcon,
		title: "Frontend & Mobile Engineer",
		company: "Mobile Studio Labs",
		color: "#869397",
		description:
			"Delivered React Native and Expo applications from concept to production. " +
			"Integrated payments, native facial biometrics, and high-performance Reanimated animations.",
		technologies: ["React Native", "Expo", "REST APIs", "Firebase"],
	},
];
