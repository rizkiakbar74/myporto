import { githubAssets, oldPortfolioLinks } from "./assets";

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
    image: githubAssets.keyboardGallery[0],
    href: oldPortfolioLinks.livePortfolio,
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
    href: oldPortfolioLinks.livePortfolio,
    status: "Content source",
  },
  {
    title: "Company Profile Website",
    category: "Company Profile",
    description:
      "A company profile concept focused on presenting business information, services, brand visuals, and clear contact actions in a responsive layout.",
    stack: ["HTML", "CSS", "Responsive UI", "Landing Page"],
    image: githubAssets.keyboardGallery[2],
    href: oldPortfolioLinks.livePortfolio,
    status: "Legacy project",
  },
  {
    title: "Coffee Shop Website",
    category: "Business Website",
    description:
      "A simple business website for showing brand identity, products, shop information, and contact/order actions in a mobile-friendly design.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: githubAssets.keyboardGallery[3],
    href: oldPortfolioLinks.livePortfolio,
    status: "Legacy project",
  },
];
