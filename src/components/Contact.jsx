import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 pb-24">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Let’s collaborate</h2>
        <p className="mt-2 text-white/60">Have an opportunity in mind? I\'m open to freelance, full-time, and collaborations.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input
                required
                type="text"
                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-500/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input
                required
                type="email"
                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-500/50"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <textarea
                required
                rows={4}
                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-indigo-500/50"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:translate-y-[-1px]"
            >
              <Mail className="mr-2 h-4 w-4" /> Send Message
            </button>
            <p className="text-sm text-emerald-400/90">{status}</p>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 p-6"
        >
          <h3 className="text-lg font-medium text-white">Raise the wow factor</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            I focus on performance, accessibility, and immersive motion to create products that feel premium. If you
            need a portfolio that impresses hiring managers or a landing that converts, let’s chat.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> hello@example.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
