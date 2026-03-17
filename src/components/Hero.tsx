import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import headshot from '../assets/headshot.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

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

        <motion.div
          custom={-1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex justify-center mb-6"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-indigo-500/20">
            <img
              src={headshot}
              alt="Leonardo Soares"
              className="w-full h-full object-cover object-top scale-150"
            />
          </div>
        </motion.div>

        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-indigo-400 font-mono text-sm mb-4 tracking-widest uppercase"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-7xl font-bold mb-4 text-gradient leading-tight"
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
          {t.hero.subtitle}
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
          {t.hero.description}
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
            {t.hero.viewProjects}
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
            { href: 'https://github.com/leodsoares', icon: <FiGithub size={20} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/leodsoares', icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
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
