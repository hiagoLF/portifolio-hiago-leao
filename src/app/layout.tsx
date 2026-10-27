import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import Header from "@/components/header";
import CursorEffects from "@/components/cursor-effects";
import "@/app/globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-code" });

export const metadata: Metadata = {
	title: "Hiago Leao",
	description: "Hiago Leao's portfolio.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${sans.variable} ${mono.variable}`}>
			<body>
				<Header />
				<CursorEffects />
				{children}
			</body>
		</html>
	);
}
