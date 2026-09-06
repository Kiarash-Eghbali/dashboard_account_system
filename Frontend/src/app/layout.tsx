"use client";
import { Inter, Vazirmatn } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import ChangeLangButton from "../components/ChangeLangButton";
import useChangeLang from "../hooks/useChangeLang";

const vazirMatn = Vazirmatn({ subsets: ["arabic"] });
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }: { children : ReactNode }) {
	const { lang } = useChangeLang();
	return (
		<html
			lang={lang == "english" ? "en" : "fa"}
			dir={lang == "english" ? "ltr" : "rtl"}
			className={`${vazirMatn.className} text-white h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<ChangeLangButton />
				{children}
			</body>
		</html>
	);
}
