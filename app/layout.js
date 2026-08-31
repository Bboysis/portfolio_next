 import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Backtotop from "@/components/ui/Backtotop";
 import InteractiveBackground from "@/components/ui/InteractivBackground";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CommandPalette from "@/components/ui/CommandPalette";
import ScrollProgress from "../components/ui/ScrollProgress";
 
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    "https://sisaydev-portfolio.netlify.app"
  ),

  title: {
    default: "Sisay Abebayew | Full-Stack Developer",
    template: "%s | Sisay Abebayew",
  },

  description:
    "Sisay Abebayew is a Full-Stack Developer and Digital Solutions Architect building modern websites, web applications, management systems, and practical digital solutions.",

  keywords: [
    "Sisay Abebayew",
    "Sisay Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Software Developer",
    "Digital Solutions Architect",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "PHP Developer",
    "MySQL Developer",
    "Web Development",
    "Ethiopia Developer",
  ],

  authors: [
    {
      name: "Sisay Abebayew",
      url: "https://sisaydev-portfolio.netlify.app",
    },
  ],

  creator: "Sisay Abebayew",
  publisher: "Sisay Abebayew",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sisaydev-portfolio.netlify.app",
    siteName: "Sisay Abebayew Portfolio",

    title: "Sisay Abebayew | Full-Stack Developer",

    description:
      "Full-Stack Developer & Digital Solutions Architect building practical, modern, and user-friendly digital solutions.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sisay Abebayew — Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sisay Abebayew | Full-Stack Developer",

    description:
      "Full-Stack Developer & Digital Solutions Architect building practical digital solutions.",

    images: ["/images/og-image.jpg"],
  },

  alternates: {
    canonical: "https://sisaydev-portfolio.netlify.app",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <ScrollProgress/>
        <LoadingScreen />
        <Navbar />
<InteractiveBackground/>
        <main className="flex-1">
          {children}
        </main>

        <Footer />

 
        <Backtotop />
        <CommandPalette/>
      </body>
    </html>
  );
}