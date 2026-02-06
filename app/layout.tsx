import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daryl Finkton Jr. - Rhodes Scholar, Author, Strategic Advisor",
  description: "Daryl Finkton Jr. is a Rhodes Scholar, former hedge fund manager, and author of 'End Poverty. Make Trillions.' Strategic advisor focused on human-centered collaboration and poverty eradication through economic empowerment.",
  keywords: [
    "Daryl Finkton Jr",
    "Rhodes Scholar",
    "End Poverty Make Trillions",
    "Strategic Advisor",
    "Harvard",
    "Oxford",
    "Hedge Fund Manager",
    "Community Organizer",
    "Poverty Eradication",
    "AI Ethics",
    "Human Connection",
    "On Wealth Podcast",
  ],
  authors: [{ name: "Daryl Finkton Jr." }],
  openGraph: {
    title: "Daryl Finkton Jr. - Rhodes Scholar, Author, Strategic Advisor",
    description: "Strategic advisor, visionary thinker, and advocate for human connection in the Age of AI. Author of 'End Poverty. Make Trillions.'",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daryl Finkton Jr. - Rhodes Scholar, Author, Strategic Advisor",
    description: "Strategic advisor, visionary thinker, and advocate for human connection in the Age of AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
