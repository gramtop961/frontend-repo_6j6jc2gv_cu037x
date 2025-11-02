import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'A responsive analytics dashboard with real-time charts and filters.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#',
  },
  {
    title: 'E-commerce UI',
    desc: 'Product browsing experience with smooth micro-interactions and cart.',
    tags: ['Vite', 'Framer Motion', 'Stripe'],
    link: '#',
  },
  {
    title: '3D Landing Page',
    desc: 'Immersive 3D hero and scroll-triggered sections with Spline.',
    tags: ['Spline', 'React', 'Animations'],
    link: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
        >
          Selected Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-slate-600 max-w-2xl"
        >
          A few highlights showcasing interaction design, performance, and polish.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
              </div>
              <p className="mt-2 text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-slate-100 text-slate-700 px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
