import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-9">
      <div className="container-shell flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. Personal portfolio.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="transition hover:text-white">
            Instagram
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
