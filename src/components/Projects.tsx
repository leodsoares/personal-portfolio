import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  { gradient: 'from-indigo-600/20 to-purple-600/20' },
  { gradient: 'from-sky-600/20 to-cyan-600/20' },
  { gradient: 'from-violet-600/20 to-pink-600/20' },
  { gradient: 'from-emerald-600/20 to-teal-600/20' },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' as const }}
              className={`bg-gradient-to-br ${project.gradient} border border-gray-800 rounded-2xl h-48`}
            />
          ))}

          {/* Template card — for reference */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.55, ease: 'easeOut' as const }}
            className="group bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-dashed border-gray-600 rounded-2xl p-6 flex flex-col transition-all sm:col-span-2"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Template</p>
            <h3 className="text-lg font-semibold mb-2">Project Title</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
              Short description of what the project does, the problem it solves, and any notable stats or outcomes.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['Tag 1', 'Tag 2', 'Tag 3'].map((tag) => (
                <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full border border-gray-700">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors">
                <FiGithub size={15} /> Code
              </a>
              <a href="#" className="flex items-center gap-1.5 text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                <FiExternalLink size={15} /> Live
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
