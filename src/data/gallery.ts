import { profile } from "./profile";

export type GalleryImage = {
  src: string;
  alt: string;
  href?: string;
};

// Instagram photos are stored locally, so they work on localhost and Vercel.
export const galleryImages: GalleryImage[] = [
  { src: "/images/instagram/instagram-01.jpg", alt: "Instagram photo 01", href: profile.instagram },
  { src: "/images/instagram/instagram-02.jpg", alt: "Instagram photo 02", href: profile.instagram },
  { src: "/images/instagram/instagram-03.jpg", alt: "Instagram photo 03", href: profile.instagram },
  { src: "/images/instagram/instagram-04.jpg", alt: "Instagram photo 04", href: profile.instagram },
  { src: "/images/instagram/instagram-05.jpg", alt: "Instagram photo 05", href: profile.instagram },
  { src: "/images/instagram/instagram-06.jpg", alt: "Instagram photo 06", href: profile.instagram },
  { src: "/images/instagram/instagram-07.jpg", alt: "Instagram photo 07", href: profile.instagram },
  { src: "/images/instagram/instagram-08.jpg", alt: "Instagram photo 08", href: profile.instagram },
  { src: "/images/instagram/instagram-09.jpg", alt: "Instagram photo 09", href: profile.instagram },
  { src: "/images/instagram/instagram-10.jpg", alt: "Instagram photo 10", href: profile.instagram },
  { src: "/images/instagram/instagram-11.jpg", alt: "Instagram photo 11", href: profile.instagram },
  { src: "/images/instagram/instagram-12.jpg", alt: "Instagram photo 12", href: profile.instagram },
  { src: "/images/instagram/instagram-13.jpg", alt: "Instagram photo 13", href: profile.instagram },
  { src: "/images/instagram/instagram-14.jpg", alt: "Instagram photo 14", href: profile.instagram },
  { src: "/images/instagram/instagram-15.jpg", alt: "Instagram photo 15", href: profile.instagram },
];
