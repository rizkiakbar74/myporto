import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizkiakbar74.Dev — Portfolio",
  description:
    "Personal portfolio of Muhammad Rizki Akbar, Staff Programmer & IT Operation at Pusat Data Sistem Informasi, Institut Teknologi Indonesia.",
  keywords: [
    "Muhammad Rizki Akbar",
    "Rizkiakbar74",
    "portfolio",
    "web developer",
    "staff programmer",
    "IT operation",
    "Institut Teknologi Indonesia",
  ],
  authors: [{ name: "Muhammad Rizki Akbar" }],
  openGraph: {
    title: "Rizkiakbar74.Dev — Portfolio",
    description:
      "A cinematic personal portfolio featuring profile, experience, projects, skills, gallery, and professional contact links.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070D",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
