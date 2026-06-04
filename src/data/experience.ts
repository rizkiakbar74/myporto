import { githubAssets, oldPortfolioLinks } from "./assets";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  href?: string;
  image?: string;
  current?: boolean;
};

export const experiences: ExperienceItem[] = [
  {
    company: "Institut Teknologi Indonesia",
    role: "Staff Programmer & IT Operation — Pusat Data Sistem Informasi",
    period: "February 2023 — Present",
    location: "South Tangerang",
    href: oldPortfolioLinks.iti,
    image: githubAssets.experienceImages[0],
    current: true,
    description: [
      "Support the development and maintenance of campus information system needs.",
      "Handle IT operations, user support, and internal technical requests.",
      "Help turn work requirements into cleaner, more structured digital solutions.",
    ],
  },
  {
    company: "PT Kreasi Nostra Mandiri (Sayurbox)",
    role: "Production",
    period: "January 2021 — December 2022",
    href: oldPortfolioLinks.sayurbox,
    image: githubAssets.experienceImages[1],
    description: [
      "Prepared materials and helped maintain production quality.",
      "Ensured product delivery to the next process according to the workflow.",
      "Maintained work areas, production targets, and reporting needs.",
    ],
  },
  {
    company: "PT Dom Pizza Indonesia",
    role: "Deliveryman",
    period: "February 2020 — April 2020",
    href: oldPortfolioLinks.dominos,
    image: githubAssets.experienceImages[2],
    description: [
      "Delivered products based on invoice and supervisor instructions.",
      "Handled delivery speed, accuracy, and customer-facing responsibility.",
      "Checked vehicles before and after delivery activities.",
    ],
  },
  {
    company: "CV Central Jaya Teknik",
    role: "Technician Helper",
    period: "March 2019 — June 2019",
    href: oldPortfolioLinks.centralJayaTeknik,
    image: githubAssets.experienceImages[3],
    description: [
      "Assisted technicians during field work.",
      "Prepared work reports based on SPK requirements.",
      "Supported technical work so client needs could be completed properly.",
    ],
  },
  {
    company: "PT Federal International Finance",
    role: "Marketing",
    period: "March 2017 — September 2017",
    href: oldPortfolioLinks.fif,
    image: githubAssets.experienceImages[4],
    description: [
      "Worked on customer acquisition and target achievement.",
      "Built customer relationships and supported feasibility surveys.",
      "Handled collection follow-up and customer quality monitoring.",
    ],
  },
];
