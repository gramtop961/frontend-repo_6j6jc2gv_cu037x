import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-[88vh] w-full max-w-7xl items-center overflow-hidden px-4 pt-6">
      {/* 3D Scene */}
      <div className="pointer-events-auto relative h-[60vh] w-full md:h-[70vh]">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for depth; pointer events disabled so scene stays interactive */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,24,39,0)_0%,_rgba(11,15,20,0.5)_60%,_rgba(11,15,20,0.9)_100%)]" />
      </div>

      {/* Text content layered above with nice motion */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="pointer-events-auto mt-10 max-w-2xl"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Tech • Portfolio • Interactive • Modern
          </span>
          <h1 className="mt-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
            I craft smooth, professional web experiences
          </h1>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Welcome! I build fast, delightful interfaces with modern animations and 3D interactions. Scroll to
            explore selected work and ways to collaborate.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 hover:text-white"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
