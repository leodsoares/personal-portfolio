import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import projectData from '../data/projects.json';
import { useLanguage } from '../context/LanguageContext';

const gradients = [
  'from-indigo-600/20 to-purple-600/20',
  'from-sky-600/20 to-cyan-600/20',
  'from-violet-600/20 to-pink-600/20',
  'from-emerald-600/20 to-teal-600/20',
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function ProjectsGallery() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + projectData.length) % projectData.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % projectData.length);
  };

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const project = projectData[current];
  const gradient = gradients[current % gradients.length];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
            {t.gallery.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">{t.gallery.heading}</h2>
        </div>

        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:border-indigo-500/50 text-gray-400 hover:text-white transition-colors"
            aria-label="Previous project"
          >
            <FiChevronLeft size={18} />
          </button>

          {/* Card */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`bg-gradient-to-br ${gradient} border border-gray-800 rounded-2xl p-8`}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-bold leading-snug">{project.project_name}</h3>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-0.5 mb-6">
                  <span className="text-xs text-gray-500">
                    <span className="text-gray-600 uppercase tracking-wider text-[10px] mr-1">Institution</span>
                    {project.company_institution}
                  </span>
                  {project.client && (
                    <span className="text-xs text-gray-500">
                      <span className="text-gray-600 uppercase tracking-wider text-[10px] mr-1">Client</span>
                      {project.client}
                    </span>
                  )}
                  {project.consultant && (
                    <span className="text-xs text-gray-500">
                      <span className="text-gray-600 uppercase tracking-wider text-[10px] mr-1">Consultant</span>
                      {project.consultant}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.gallery.projects[current].description}</p>

                {project.technologies_tools.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies_tools.map((tool) => (
                      <span key={tool} className="text-xs bg-gray-900/70 text-gray-300 px-2.5 py-1 rounded-full border border-gray-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {project.skills.length > 0 && (
                  <p className="text-xs text-gray-600 mb-5">{project.skills.join(' · ')}</p>
                )}

                {project.project_url && (
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-500/50 hover:border-indigo-400 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                  >
                    {t.gallery.readMore}
                    <FiExternalLink size={13} />
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:border-indigo-500/50 text-gray-400 hover:text-white transition-colors"
            aria-label="Next project"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {projectData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              className="transition-all duration-300"
            >
              <motion.div
                animate={{
                  width: i === current ? 24 : 8,
                  backgroundColor: i === current ? '#6366f1' : '#374151',
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
