import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IconType } from 'react-icons';
import {
  SiReact, SiTypescript, SiNodedotjs, SiPython,
  SiTailwindcss, SiPostgresql, SiDocker, SiGit,
  SiNextdotjs, SiGraphql, SiCplusplus, SiC,
  SiAutocad,
} from 'react-icons/si';

type Skill =
  | { name: string; icon: IconType; color: string; label?: never }
  | { name: string; icon?: never; color: string; label: string };

type Category = { title: string; skills: Skill[] };

const categories: Category[] = [
  {
    title: 'Development',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'MATLAB', label: 'M', color: '#e16737' },
    ],
  },
  {
    title: 'Engineering',
    skills: [
      { name: 'SolidWorks', label: 'SW', color: '#FF0000' },
      { name: 'AutoCAD', icon: SiAutocad, color: '#E51837' },
      { name: 'Fusion 360', label: 'F', color: '#F7941D' },
      { name: 'Bluebeam', label: 'B', color: '#00A3E0' },
    ],
  },
];

function SkillCard({ skill, index, inView }: { skill: Skill; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, ease: 'easeOut' as const }}
      className="group bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-5 flex flex-col items-center gap-3 transition-all hover:bg-gray-800/70 cursor-default"
    >
      {skill.icon ? (
        <skill.icon
          size={32}
          style={{ color: skill.color }}
          className="transition-transform group-hover:scale-110"
        />
      ) : (
        <span
          style={{ color: skill.color }}
          className="text-2xl font-bold transition-transform group-hover:scale-110 inline-block"
        >
          {skill.label}
        </span>
      )}
      <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors font-medium text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
            What I Work With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
        </div>

        <div ref={ref} className="space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-medium">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
