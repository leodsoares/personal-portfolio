import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import projectData from '../data/projects.json';

const gradients = [
  'from-indigo-600/20 to-purple-600/20',
  'from-sky-600/20 to-cyan-600/20',
  'from-violet-600/20 to-pink-600/20',
  'from-emerald-600/20 to-teal-600/20',
];

const COMPACT_HEIGHT = 152;

type Project = typeof projectData[number];

function ProjectCard({ project, index, inView, gradient }: {
  project: Project;
  index: number;
  inView: boolean;
  gradient: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease: 'easeOut' as const }}
    >
      <motion.div
        animate={{ height: expanded ? 'auto' : COMPACT_HEIGHT }}
        initial={{ height: COMPACT_HEIGHT }}
        transition={{ type: 'spring', stiffness: 180, damping: 26 }}
        onHoverStart={() => setExpanded(true)}
        onHoverEnd={() => setExpanded(false)}
        onClick={() => setExpanded((v) => !v)}
        className={`bg-gradient-to-br ${gradient} border rounded-2xl overflow-hidden cursor-pointer transition-colors duration-300 ${
          expanded ? 'border-gray-600' : 'border-gray-800'
        }`}
      >
        <div className="p-6 flex flex-col">
          {/* Always visible — title anchored at top */}
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3 className="text-2xl font-bold leading-snug">{project.project_name}</h3>
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-500 hover:text-indigo-400 transition-colors shrink-0 mt-1"
                aria-label={`Visit ${project.company_institution}`}
              >
                <FiExternalLink size={15} />
              </a>
            )}
          </div>

          <p className="text-indigo-400/80 text-xs mb-0.5">{project.company_institution}</p>
          {project.client && (
            <p className="text-gray-500 text-xs">{project.client}</p>
          )}

          {/* Revealed on expand */}
          <motion.div
            animate={{ opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.2, delay: expanded ? 0.15 : 0 }}
          >
            {project.consultant && (
              <p className="text-gray-500 text-xs mb-4">
                <span className="text-gray-600 uppercase tracking-wider text-[10px] mr-1">Consultant</span>
                {project.consultant}
              </p>
            )}

            <p className="text-gray-400 text-sm leading-relaxed mt-4 mb-5">{project.description}</p>

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
              <p className="text-xs text-gray-600">{project.skills.join(' · ')}</p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
            {t.projects.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">{t.projects.heading}</h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 items-start">
          {projectData.map((project, i) => (
            <ProjectCard
              key={project.project_name}
              project={project}
              index={i}
              inView={inView}
              gradient={gradients[i % gradients.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
