 "use client";
 
import { image } from "framer-motion/client";
 import Link from "next/link";
 
 const projects = [
   {
    image: "/images/projects/Sisay Abebayew — Portfolio - Google Chrome 8_5_2026 5_25_43 PM.png",
     number: "01",
     title: "SIS Missford School Management",
     category: "School Management",
     description:
       "A web-based school management solution designed to organize students, academic information, administration, and school operations.",
     technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
     status: "Completed",
     liveUrl: "http://sis-missford.infinityfreeapp.com/",
     githubUrl: "#",
   },
    {
        image: "/images/projects/🏨 Hotel Management - Google Chrome 8_5_2026 5_22_51 PM.png",
     number: "02",
     title: "Hotel Management System",
     category: "Hospitality",
     description:
       "A modern hotel management platform for presenting rooms, managing bookings, and providing a professional hotel experience online.",
     technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
     status: "Completed",
     liveUrl: "https://trinity-hotel.infinityfree.io",
     githubUrl: "#",
   },
    {
        image: "/images/projects/Coach Tesfaye _ Personal Trainer - Google Chrome 7_29_2026 10_50_38 PM.png",
     number: "03",
     title: "Personal Gym Trainer Website",
     category: "Business Website",
     description:
       "A premium personal trainer website showcasing fitness programs, services, transformation results, testimonials, nutrition guidance, and contact options.",
     technologies: ["HTML", "CSS", "JavaScript"],
     status: "Completed",
      liveUrl: "https://coach-tesfayecom.netlify.app/",
     githubUrl: "#",
   },
   {
    image: "/images/projects/pharmacy.png",
     number: "04",
     title: "Pharmacy Management System",
     category: "Management System",
     description:
       "A complete pharmacy management system for managing medicines, inventory, customers, suppliers, sales, purchases, users, and reports.",
     technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
     status: "Completed",
     liveUrl: "https://portfolio-next-orpin-gamma.vercel.app",
     githubUrl: "#",
   },

 
   {
        image: "/images/projects/e-commers.png",
     number: "05",
     title: "E-Commerce Website",
     category: "E-Commerce",
     description:
       "A modern e-commerce platform designed to provide customers with an easy way to browse products and interact with an online store.",
     technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
     status: "Completed",
      liveUrl: "https://portfolio-next-orpin-gamma.vercel.app",
     githubUrl: "#",
   },
 
   {
        image: "/images/projects/hero6.jpg",
     number: "06",
     title: "QR Menu System",
     category: "Digital Solution",
     description:
       "A digital QR menu solution that allows restaurants and businesses to provide customers with quick access to their menu through a QR code.",
     technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
     status: "Completed",
     liveUrl: "https://portfolio-next-orpin-gamma.vercel.app",
     githubUrl: "#",
   },
 ];
 
 function ProjectIcon() {
   return (
     <svg
       width="28"
       height="28"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="1.6"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <rect x="3" y="4" width="18" height="14" rx="2" />
       <path d="M8 21h8" />
       <path d="M12 18v3" />
       <path d="m8 9 2.5 2L8 13" />
       <path d="M13 13h3" />
     </svg>
   );
 }
 
 export default function Projects() {
   return (
     <section
       id="projects"
       className="relative overflow-hidden py-24 sm:py-32"
     >
       {/* Background glow */}
       <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />
 
       <div className="section-container relative z-10">
 
         {/* Heading */}
         <div className="mx-auto max-w-3xl text-center">
 
           <p className="eyebrow mb-4">
             Featured Projects
           </p>
 
           <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl light:text-navy">
             Turning Ideas Into
             <span className="text-accent"> Real Solutions</span>
           </h2>
 
           <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg light:text-navy/60">
             A selection of projects I have designed and developed,
             focused on solving practical problems through technology.
           </p>
 
         </div>
 
         
         {/* Projects */}
         <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
         {projects.map((project) => (
          <article
               key={project.number}
               className="
                 group
                 relative
                 overflow-hidden
                 rounded-3xl
                 border
                 border-slate-line
                 bg-white/[0.03]
                 backdrop-blur-md
                 transition-all
                 duration-500
                 hover:-translate-y-2
                 hover:border-accent/40
                 hover:shadow-2xl
                 hover:shadow-accent/10
               " 
               >
               {/* Top visual area */}
<div
  className="
    relative
    flex
    h-52
    items-center
    justify-center
    overflow-hidden
    border-b
    border-slate-line
    bg-gradient-to-br
    from-accent/[0.08]
    via-transparent
    to-white/[0.02]
  "
>
  {project.image && (
    <img
      src={project.image}
      alt={project.title}
      className="
        h-full
        w-full
        object-cover
        transition-all
        duration-500
        group-hover:scale-105
      "
    />
  )}

  {/* Decorative grid */}
  <div
    className="
      absolute
      inset-0
      opacity-20
      [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
      [background-size:32px_32px]
    "
  />
 
               
 
                 
                 {/* Glow */}
                 <div
                   className="
                     absolute
                     h-32
                     w-32
                     rounded-full
                     bg-accent/20
                     blur-3xl
                     transition-all
                     duration-500
                     group-hover:h-44
                     group-hover:w-44
                   "
                 />
 
                 {/* Project icon */}
                 <div
                   className="
                     relative
                     flex
                     h-20
                     w-20
                     items-center
                     justify-center
                     rounded-2xl
                     border
                     border-accent/30
                     bg-navy/60
                     text-accent
                     shadow-xl
                     shadow-accent/10
                     backdrop-blur-xl
                     transition-all
                     duration-500
                     group-hover:rotate-3
                     group-hover:scale-110
                   "
                 >
                   <ProjectIcon />
                 </div>
 
                 {/* Project number */}
                 <span
                   className="
                     absolute
                     right-5
                     top-5
                     font-mono
                     text-xs
                     tracking-widest
                     text-accent/60
                   "
                 >
                   {project.number}
                 </span>
 
                 {/* Status */}
                 <span
                   className="
                     absolute
                     bottom-5
                     left-5
                     rounded-full
                     border
                     border-accent/20
                     bg-accent/10
                     px-3
                     py-1
                     text-[11px]
                     font-medium
                     text-accent
                   "
                 >
                   {project.status}
                 </span>
 
               </div>
 
               {/* Content */}
               <div className="p-6 sm:p-7">
 
                 {/* Category */}
                 <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent/70">
                   {project.category}
                 </p>
                 {/* Title */}
                 <h3 className="mt-3 font-display text-2xl font-bold text-paper light:text-navy">
                   {project.title}
                 </h3>
 
                 {/* Description */}
                 <p className="mt-4 text-sm leading-6 text-paper/55 light:text-navy/55">
                   {project.description}
                 </p>
 
                 {/* Technologies */}
                 <div className="mt-6 flex flex-wrap gap-2">
 
                   {project.technologies.map((technology) => (
                     <span
                       key={technology}
                       className="
                         rounded-full
                         border
                         border-slate-line
                         bg-white/[0.03]
                         px-3
                         py-1.5
                         text-xs
                         text-paper/65
                         transition
                         group-hover:border-accent/20
                         light:text-navy/65
                       "
                     >
                       {technology}
                     </span>
                   ))}
 
                 </div>
 
                 {/* Buttons */}
                 <div className="mt-7 flex flex-wrap gap-3">
 
                   {project.liveUrl !== "#" && (
                     <a
                       href={project.liveUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="
                         inline-flex
                         items-center
                         gap-2
                         rounded-full
                         bg-accent
                         px-5
                         py-2.5
                         text-xs
                         font-semibold
                         text-navy
                         transition-all
                         hover:scale-105
                         hover:bg-accent-bright
                       "
                     >
                       Live Demo
 
                       <svg
                         width="14"
                         height="14"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       >
                         <path d="M7 17 17 7" />
                         <path d="M7 7h10v10" />
                       </svg>
                     </a>
                   )}
 
                   {project.githubUrl !== "#" && (
                     <a
                       href={project.githubUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="
                         inline-flex
                         items-center
                         gap-2
                         rounded-full
                         border
                         border-slate-line
                         px-5
                         py-2.5
                         text-xs
                         font-semibold
                         text-paper
                         transition-all
                         hover:border-accent
                         hover:text-accent
                         light:text-navy
                       "
                     >
                       GitHub
                     </a>
                   )}
 
                   {project.liveUrl === "#" &&
                     project.githubUrl === "#" && (
                       <span className="text-xs text-paper/30 light:text-navy/30">
                         Links coming soon
                       </span>
                     )}
 
                 </div>
 
               </div>
             </article>
           ))}
 
         </div>
 
         {/* View all */}
         <div className="mt-14 text-center">
             <Link
             href="/projects"
             className="
               inline-flex
               items-center
               gap-2
               rounded-full
               border
               border-slate-line
               px-6
               py-3
               text-sm
               font-semibold
               text-paper
               transition-all
               hover:border-accent
               hover:text-accent
               light:text-navy
             "
           >
             View All Projects
 
             <svg
               width="17"
               height="17"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
             >
               <path d="M5 12h14" />
               <path d="m13 6 6 6-6 6" />
             </svg>
           </Link>
 
         </div>
 
       </div>
     </section>
   );
 }