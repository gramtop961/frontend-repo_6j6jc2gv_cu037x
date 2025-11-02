import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollY } = useScroll();
  // Parallax for headline content relative to page scroll
  const y = useTransform(scrollY, [0, 400], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85]);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient tint that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-28 sm:py-36 w-full">
        <motion.div style={{ y, opacity }} className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Building delightful, performant web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-slate-700"
          >
            Frontend-focused developer crafting elegant interfaces with React, Tailwind, and motion.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="inline-flex items-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
