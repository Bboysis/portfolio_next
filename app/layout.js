 import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Backtotop from "@/components/ui/Backtotop";
import InteractiveBackground from "@/components/ui/InteractivBackground";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CommandPalette from "@/components/ui/CommandPalette";
import ScrollProgress from "../components/ui/ScrollProgress";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import InstallPrompt from "@/components/InstallPrompt";
import OnlineStatus from "@/components/OnlineStatus";
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

  // Google Search Console verification
  verification: {
    google: "lv5Rs3lAD5sJLCrshEz_bPfhwYErs8a0s8gXBhOUoAo",
  },

  title: {
    default: "Sisay Abebayew | Full-Stack Developer",
    template: "%s | Sisay Abebayew",
  },

  description:
    "Developer portfolio showcasing projects, skills, and digital experiences.",

  applicationName: "Sisay Portfolio",

  manifest: "/manifest.webmanifest",
   appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sisay Portfolio",
  },

  icons: {
    icon: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },

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

// PWA / browser theme configuration
export const viewport = {
  themeColor: "#4ECDC4",
  width: "device-width",
  initialScale: 1,
};

// ============================================================
// STRUCTURED DATA — GOOGLE KNOWLEDGE PANEL
// ============================================================
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sisay Abebayew",
  alternateName: "Sisay",
  url: "https://sisaydev-portfolio.netlify.app",
  image: "https://sisaydev-portfolio.netlify.app/images/1.jpg",
  jobTitle: "Full-Stack Developer & Digital Solutions Architect",
  description:
    "Full-Stack Developer from Addis Ababa, Ethiopia building complete, practical, and user-friendly digital solutions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "Ethiopia",
  },
  email: "sisayabebayew@gmail.com",
  telephone: "+251965681966",
  sameAs: [
    "https://linkedin.com/in/sisay-abebayew",
    "https://t.me/bboysis",
    "https://instagram.com/bboysis",
    "https://x.com/bboysis",
    "https://github.com/bboysis",
    "https://sisaydev-portfolio.netlify.app",
  ],
  knowsAbout: [
    "Web Development",
    "Full-Stack Development",
    "PHP",
    "JavaScript",
    "MySQL",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
<head>
  <script
    id="structured-data-person"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData),
    }}
  />
</head>

      <body className="flex min-h-screen flex-col">
        <ServiceWorkerRegister />
<InstallPrompt/>
        <ScrollProgress />

        <LoadingScreen />

        <Navbar />

        <InteractiveBackground />
        <OnlineStatus/>

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <Backtotop />

        <CommandPalette />
      </body>
    </html>
  );
}