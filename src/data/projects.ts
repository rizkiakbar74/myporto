import { githubAssets } from "./assets";

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: string;
  href?: string;
  status: string;
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    title: "Cinematic Portfolio 2026",
    category: "Personal Website",
    description:
      "A full redesign of my old GitHub Pages portfolio into a cinematic website powered by Next.js, TypeScript, Tailwind CSS, and Framer Motion, ready for Vercel deployment.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/portfolio-cinematic.svg",
    href: "https://rizkiakbar74.vercel.app/",
    status: "New version",
    featured: true,
  },
  {
    title: "Old Portfolio Website",
    category: "Static Website",
    description:
      "My earlier HTML, CSS, and JavaScript portfolio. It became the content base for this new version, including profile, experience, projects, gallery, and contact sections.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    image: githubAssets.keyboardGallery[1],
    href: "https://rizkiakbar74.github.io/",
    status: "Content source",
  },
  {
    title: "Company Profile Website",
    category: "Company Profile",
    description:
      "A company profile concept focused on presenting business information, services, brand visuals, and clear contact actions in a responsive layout.",
    stack: ["HTML", "CSS", "Responsive UI", "Landing Page"],
    image: "/images/projects/company-profile.svg",
    href: "https://rizkiakbar74.github.io/rizkiakbarcompany/",
    status: "Legacy project",
  },
  {
    title: "Coffee Shop Website",
    category: "Business Website",
    description:
      "A simple business website for showing brand identity, products, shop information, and contact/order actions in a mobile-friendly design.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/images/projects/kedai-kopi.svg",
    href: "https://rizkiakbar74.github.io/kedai-kopi-rizki/",
    status: "Legacy project",
  },
  {
    title: "Personal Finance App",
    category: "Finance Application",
    description:
      "A personal finance application for tracking transactions, budgets, recurring bills, subscriptions, wallets, and financial goals.",
    stack: ["Next.js", "TypeScript", "Finance Dashboard", "Vercel"],
    image: githubAssets.keyboardGallery[4],
    href: "https://finova-sooty.vercel.app/",
    status: "Live application",
  },
  {
    title: "Project Management System",
    category: "Management Application",
    description:
      "A project management system designed to organize tasks, monitor project progress, and support team collaboration.",
    stack: ["Web Application", "Project Tracking", "Dashboard", "Vercel"],
    image: "/images/projects/iti-project-manager.svg",
    href: "https://iti-project-manajer.vercel.app/",
    status: "Live application",
  },
  {
    title: "PSPPI ITI Website",
    category: "Institution Website",
    description:
      "An official website built for PSPPI Institut Teknologi Indonesia to present program information and institutional services.",
    stack: ["Institution Website", "Responsive UI", "Content Management", "Production"],
    image: githubAssets.keyboardGallery[5],
    href: "https://psppi.iti.ac.id",
    status: "Production website",
  },
];
