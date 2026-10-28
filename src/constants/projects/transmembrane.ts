import BoltIcon from "@/assets/icons/bolt.svg";
import GearIcon from "@/assets/icons/gear.svg";
import HealthIcon from "@/assets/icons/health-and-safety.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import MatplotlibIcon from "@/assets/icons/matplotlib.svg";
import NextIcon from "@/assets/icons/next.svg";
import OpenIcon from "@/assets/icons/open-in-new.svg";
import PandasIcon from "@/assets/icons/pandas.svg";
import PythonIcon from "@/assets/icons/python.svg";
import ReactIcon from "@/assets/icons/react.svg";
import type { Project } from "@/types/portfolio";

const color = "#80cbc4";

export const transmembraneSequencePrediction: Project = {
	id: "transmembrane-sequence-prediction",
	slug: "transmembrane-sequence-prediction",
	title: "Transmembrane Sequence Prediction",
	description:
		"A bioinformatics web application that identifies candidate transmembrane regions " +
		"in protein sequences uploaded as a FASTA file. Developed during my bioinformatics " +
		"internship at the Federal University of Bahia (UFBA), it combines a simple interface " +
		"with probability-based scoring to help researchers select promising segments.",
	imageUrl: "",
	videoUrl: "/videos/membrane-protein.mp4",
	label: "Bioinformatics research tool",
	color,
	channels: [
		{
			icon: OpenIcon,
			title: "Live demo",
			description: "Upload a FASTA file and explore the prediction tool.",
			href: "https://membrane-protein.vercel.app/",
		},
		{
			icon: LinkedInIcon,
			title: "LinkedIn post",
			description: "Read more about the project and its development.",
			href: "https://lnkd.in/p/d_69pDPh",
		},
	],
	technologies: [
		{ label: "Python", color },
		{ label: "pandas", color },
		{ label: "Matplotlib", color },
		{ label: "React", color },
		{ label: "Next.js", color },
	],
	details: [
		{
			icon: HealthIcon,
			title: "The challenge",
			description:
				"Researchers at UFBA often selected protein segments manually and checked them " +
				"with probability tools. More advanced software introduced complexity that " +
				"made it harder to use. The challenge was to simplify candidate selection " +
				"through an accessible interface and a straightforward prediction method.",
			color,
		},
		{
			icon: GearIcon,
			title: "Technical approach",
			description:
				"Used Python, pandas, and Matplotlib to process known transmembrane segments " +
				"from multiple proteins and analyze amino acid co-occurrence. The resulting " +
				"probability lookup assigns scores to amino acid groups. Built the interface " +
				"and analysis algorithm in Next.js to score uploaded sequences and identify " +
				"the most promising transmembrane candidates.",
			color,
		},
		{
			icon: BoltIcon,
			title: "Results",
			description:
				"In the evaluated set, 100% of the extracted segments were also classified " +
				"as transmembrane by the probability tools used for cross-checking. This " +
				"agreement supported the method's ability to select promising candidates " +
				"for the tested sequences.",
			color: "#4edea3",
		},
	],
	stack: [
		{ icon: ReactIcon, label: "React", description: "Interactive web interface", color },
		{ icon: NextIcon, label: "Next.js", description: "Web app and prediction algorithm", color },
		{ icon: PythonIcon, label: "Python", description: "Protein data processing", color },
		{ icon: PandasIcon, label: "pandas", description: "Sequence dataset analysis", color },
		{
			icon: MatplotlibIcon,
			label: "Matplotlib",
			description: "Research data visualization",
			color,
		},
	],
};
