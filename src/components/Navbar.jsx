import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />

      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <span className="text-slate-800">My Portfolio</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-slate-700">
          <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-slate-100">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
