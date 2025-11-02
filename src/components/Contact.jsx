import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-slate-600 max-w-2xl"
        >
          Have a project in mind or just want to say hello? I\'d love to hear from you.
        </motion.p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-400 focus:ring-slate-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-400 focus:ring-slate-400" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea required rows="5" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-400 focus:ring-slate-400" />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                type="submit"
                className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800"
              >
                Send Message
              </motion.button>
              {status && <span className="text-sm text-emerald-600">{status}</span>}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">Elsewhere</h3>
            <p className="mt-2 text-slate-600">Find me on these platforms as well.</p>
            <div className="mt-4 flex flex-col gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                <Mail className="h-4 w-4" /> hello@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                <Github className="h-4 w-4" /> github.com/yourname
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                <Linkedin className="h-4 w-4" /> linkedin.com/in/yourname
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
