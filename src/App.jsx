import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name — All rights reserved.
      </footer>
    </div>
  );
}
