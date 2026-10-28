import type { Metadata } from "next";
import NotFoundScreen from "@/screens/not-found";

export const metadata: Metadata = {
	title: "Page not found | Hiago Leao",
};

export default function NotFoundPage() {
	return <NotFoundScreen />;
}
