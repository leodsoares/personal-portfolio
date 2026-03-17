import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl w-full text-center relative z-10">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-indigo-400 font-mono text-sm mb-4 tracking-widest uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-7xl font-bold mb-4 text-gradient leading-tight"
        >
          Leonardo Soares
        </motion.h1>

        <motion.h2
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-xl sm:text-2xl text-gray-400 mb-2 font-light"
        >
          Mechanical Engineer-In-The-Making
        </motion.h2>

        <motion.div
          custom={2.5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-1.5 text-gray-500 text-sm mb-6"
        >
          <FiMapPin size={14} />
          <span>Vancouver, B.C.</span>
        </motion.div>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          You are looking at my latest project. The other ones involve more concrete... and contracts... and also maybe some excavators
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors text-sm"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { href: 'https://github.com', icon: <FiGithub size={20} />, label: 'GitHub' },
            { href: 'https://linkedin.com', icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
            { href: 'mailto:leo@example.com', icon: <FiMail size={20} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-500 hover:text-indigo-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
