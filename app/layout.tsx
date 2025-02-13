import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
	subsets: ["latin"],
});

const oliver = localFont({
	src: "../public/Oliver.ttf",
	display: "swap",
	variable: "--font-oliver",
});

export const metadata: Metadata = {
	title: "Soltoshi | Fast, Cheap, Secure - Future of Trading",
	description: "Soltoshi | Fast, Cheap, Secure - Future of Trading",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${outfit.className} ${oliver.variable} text-black selection:bg-brand-yellow antialiased break-words`}
			>
				<main>{children}</main>
			</body>
		</html>
	);
}
