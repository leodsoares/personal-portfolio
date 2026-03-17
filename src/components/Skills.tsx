import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { IconType } from 'react-icons';
import {
  SiReact, SiTypescript, SiNodedotjs, SiPython,
  SiTailwindcss, SiPostgresql, SiDocker, SiGit,
  SiNextdotjs, SiClaude, SiCplusplus, SiC,
  SiAutocad, SiSlack,
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

type Skill =
  | { name: string; icon: IconType; color: string; label?: never }
  | { name: string; icon?: never; color: string; label: string };

const schedulingSkills: Skill[] = [
  { name: 'Primavera P6', label: 'P6', color: '#F80000' },
  { name: 'MS Project', label: 'P', color: '#00848E' },
];

const officeSkills: Skill[] = [
  { name: 'Word', label: 'W', color: '#2B579A' },
  { name: 'Excel', label: 'X', color: '#217346' },
  { name: 'PowerPoint', label: 'P', color: '#D24726' },
  { name: 'Outlook', label: 'O', color: '#0078D4' },
  { name: 'Teams', label: 'T', color: '#6264A7' },
  { name: 'Slack', icon: SiSlack, color: '#4A154B' },
  { name: 'Acrobat', label: 'Ac', color: '#FF0000' },
];

const engineeringSkills: Skill[] = [
  { name: 'SolidWorks', label: 'SW', color: '#FF0000' },
  { name: 'Bluebeam', label: 'B', color: '#00A3E0' },
  { name: 'Fusion 360', label: 'F', color: '#F7941D' },
  { name: 'AutoCAD', icon: SiAutocad, color: '#E51837' },
];

const devSkills: Skill[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Claude', icon: SiClaude, color: '#CC785C' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'MATLAB', label: 'M', color: '#e16737' },
  { name: 'Java', label: 'J', color: '#f89820' },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4, ease: 'easeOut' as const }}
      className="group bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:border-indigo-500/50 rounded-xl p-4 flex flex-col items-center gap-2.5 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 cursor-default"
    >
      {skill.icon ? (
        <skill.icon size={28} style={{ color: skill.color }} className="transition-transform group-hover:scale-110" />
      ) : (
        <span style={{ color: skill.color }} className="text-xl font-bold transition-transform group-hover:scale-110 inline-block">
          {skill.label}
        </span>
      )}
      <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors font-medium text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

function CollapsibleDevSection({ title }: { title: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-medium">{title}</h3>
      <motion.div
        layout
        onHoverStart={() => setExpanded(true)}
        onHoverEnd={() => setExpanded(false)}
        onClick={() => setExpanded((v) => !v)}
        className={`rounded-2xl overflow-hidden cursor-pointer transition-colors duration-300 ${
          expanded ? 'bg-white dark:bg-gray-900 border border-indigo-500/30' : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
        }`}
        transition={{ layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {expanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-5"
            >
              {devSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="compact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-wrap gap-3 px-5 py-4 items-center"
            >
              {devSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-center w-7 h-7">
                  {skill.icon ? (
                    <skill.icon size={18} style={{ color: skill.color }} />
                  ) : (
                    <span style={{ color: skill.color }} className="text-xs font-bold leading-none">
                      {skill.label}
                    </span>
                  )}
                </div>
              ))}
              <span className="ml-auto text-xs text-gray-400 dark:text-gray-700 italic select-none hidden sm:inline">hover to expand</span>
              <span className="ml-auto text-xs text-gray-400 dark:text-gray-700 italic select-none sm:hidden">tap to expand</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function SkillCardStatic({ skill, index, inView }: { skill: Skill; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, ease: 'easeOut' as const }}
      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 rounded-xl p-5 flex flex-col items-center gap-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800/70 cursor-default"
    >
      {skill.icon ? (
        <skill.icon size={32} style={{ color: skill.color }} className="transition-transform group-hover:scale-110" />
      ) : (
        <span style={{ color: skill.color }} className="text-2xl font-bold transition-transform group-hover:scale-110 inline-block">
          {skill.label}
        </span>
      )}
      <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors font-medium text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

const proficiencyColor: Record<string, string> = {
  Native: 'text-green-500 dark:text-green-400',
  Fluent: 'text-indigo-500 dark:text-indigo-400',
  Advanced: 'text-sky-500 dark:text-sky-400',
  Intermediate: 'text-amber-500 dark:text-amber-400',
  'Langue maternelle': 'text-green-500 dark:text-green-400',
  Courant: 'text-indigo-500 dark:text-indigo-400',
  Avancé: 'text-sky-500 dark:text-sky-400',
  Intermédiaire: 'text-amber-500 dark:text-amber-400',
  Nativo: 'text-green-500 dark:text-green-400',
  Fluente: 'text-indigo-500 dark:text-indigo-400',
  Avançado: 'text-sky-500 dark:text-sky-400',
  Intermediário: 'text-amber-500 dark:text-amber-400',
};

function LanguageCard({
  lang,
  index,
  inView,
}: {
  lang: { name: string; flag: string; proficiency: string };
  index: number;
  inView: boolean;
}) {
  const color = proficiencyColor[lang.proficiency] ?? 'text-gray-500';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, ease: 'easeOut' as const }}
      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 rounded-xl p-5 flex flex-col items-center gap-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-800/70 cursor-default"
    >
      <span className="text-3xl transition-transform group-hover:scale-110 inline-block">{lang.flag}</span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors font-medium text-center">
          {lang.name}
        </span>
        <span className={`text-xs font-medium ${color}`}>{lang.proficiency}</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 px-6 bg-gray-100/50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
            {t.skills.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">{t.skills.heading}</h2>
        </div>

        <div ref={ref} className="space-y-12">
          {/* Engineering */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-medium">
              {t.skills.categories[0]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {engineeringSkills.map((skill, i) => (
                <SkillCardStatic key={skill.name} skill={skill} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Scheduling */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-medium">
              {t.skills.categories[1]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {schedulingSkills.map((skill, i) => (
                <SkillCardStatic key={skill.name} skill={skill} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Office & Collaboration */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-medium">
              {t.skills.categories[2]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {officeSkills.map((skill, i) => (
                <SkillCardStatic key={skill.name} skill={skill} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Spoken Languages */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-medium">
              {t.skills.categories[3]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.skills.spokenLanguages.map((lang, i) => (
                <LanguageCard key={lang.name} lang={lang} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Development — collapsible */}
          <CollapsibleDevSection title={t.skills.categories[4]} />
        </div>
      </div>
    </section>
  );
}
