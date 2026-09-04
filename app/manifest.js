 export default function manifest() {
  return {
    name: "Sisay Abebayew Portfolio",
    short_name: "Sis app",
    description:
      "Full-Stack Developer & Digital Solutions Architect — showcasing projects, skills, and digital experiences.",
    start_url: "/",
    id: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a192f",
    theme_color: "#64ffda",
    orientation: "portrait-primary",
    categories: ["portfolio", "developer", "technology"],

    screenshots: [
      {
        src: "/screenshots/desktop.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Sisay Abebayew Portfolio — Desktop View",
      },
      {
        src: "/screenshots/mobile.png",
        sizes: "390x844",
        type: "image/png",
        label: "Sisay Abebayew Portfolio — Mobile View",
      },
    ],

    icons: [
      {
        src: "/icons/sisay-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/sisay-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}