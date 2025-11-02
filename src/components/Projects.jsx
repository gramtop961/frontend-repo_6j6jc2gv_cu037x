import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Portfolio Experience',
    desc: 'A modern, animated portfolio with 3D hero and smooth scroll navigation.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Product Dashboard UI',
    desc: 'Clean, responsive analytics dashboard with tasteful micro-interactions.',
    tags: ['React', 'Tailwind', 'Charts'],
    link: '#',
  },
  {
    title: 'Marketing Landing Page',
    desc: 'High-converting landing with bold typography and subtle parallax.',
    tags: ['Vite', 'Tailwind', 'A11y'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected Projects</h2>
          <p className="mt-2 text-white/60">A few highlights that show craft, motion, and attention to detail.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target={p.link.startsWith('http') ? '_blank' : undefined}
            rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
            className="group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="h-36 w-full rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/20 ring-1 ring-inset ring-white/10 transition group-hover:from-indigo-500/30 group-hover:to-purple-600/30" />
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/60">{p.desc}</p>
              </div>
              <ExternalLink className="mt-1 h-4 w-4 text-white/40 transition group-hover:text-white/70" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
