import React from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f14]/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <button
          onClick={() => handleScroll('home')}
          className="group inline-flex items-center gap-2 rounded-md px-2 py-1 text-white/90 transition hover:text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <Rocket className="h-4 w-4" />
          </span>
          <span className="font-semibold tracking-wide">Insigns</span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleScroll(l.id)}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-white/70 transition hover:bg-white/5 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-white/70 transition hover:bg-white/5 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
