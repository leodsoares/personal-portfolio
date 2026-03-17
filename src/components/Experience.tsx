import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

type Job = { type: 'job'; role: string; company: string; period: string; location: string; bullets: string[] };
type Milestone = { type: 'milestone'; label: string; sub: string };
type Entry = Job | Milestone;

const entries: Entry[] = [
  { type: 'job', role: 'Project Coordinator', company: 'PW Trenchless Inc',    period: 'May 2025 — Aug 2025', location: 'Surrey, BC',          bullets: [] },
  { type: 'job', role: 'Project Coordinator', company: 'Clearway Construction', period: 'Mar 2024 — May 2025', location: 'Surrey, BC',          bullets: [] },
  { type: 'job', role: 'Field Technician',    company: 'NaturaSeal',            period: 'Sep 2023 — Jan 2025', location: 'Lower Mainland, BC',  bullets: [] },
  { type: 'milestone', label: '🎓 Graduated', sub: 'BASc Mechanical Engineering — UBC Okanagan · June 2023' },
  { type: 'job', role: 'Barista',             company: 'Starbucks',             period: 'Jun 2020 — Nov 2021', location: 'Kelowna, BC',         bullets: [] },
  { type: 'job', role: 'Residence Advisor',   company: 'UBC Okanagan',          period: 'Sep 2019 — May 2021', location: 'Kelowna, BC',         bullets: [] },
];

const confettiPieces = [
  { x: -130, y: -55, color: 'bg-yellow-400',  w: 8,  h: 8,  r: 135  },
  { x: -80,  y: -80, color: 'bg-pink-400',    w: 6,  h: 10, r: -90  },
  { x: -20,  y: -90, color: 'bg-green-300',   w: 8,  h: 6,  r: 45   },
  { x: 35,   y: -88, color: 'bg-blue-400',    w: 8,  h: 8,  r: -60  },
  { x: 85,   y: -75, color: 'bg-purple-400',  w: 6,  h: 6,  r: 90   },
  { x: 130,  y: -52, color: 'bg-orange-400',  w: 8,  h: 8,  r: -45  },
  { x: 148,  y: -10, color: 'bg-cyan-400',    w: 6,  h: 9,  r: 120  },
  { x: 138,  y: 32,  color: 'bg-yellow-300',  w: 8,  h: 6,  r: -90  },
  { x: 105,  y: 65,  color: 'bg-pink-300',    w: 8,  h: 8,  r: 45   },
  { x: 45,   y: 85,  color: 'bg-green-400',   w: 6,  h: 6,  r: -135 },
  { x: -15,  y: 90,  color: 'bg-blue-300',    w: 8,  h: 8,  r: 60   },
  { x: -75,  y: 75,  color: 'bg-purple-300',  w: 8,  h: 6,  r: -30  },
  { x: -128, y: 50,  color: 'bg-orange-300',  w: 6,  h: 9,  r: 90   },
  { x: -148, y: 8,   color: 'bg-cyan-300',    w: 8,  h: 8,  r: -120 },
  { x: -140, y: -32, color: 'bg-pink-400',    w: 6,  h: 6,  r: 45   },
  { x: 60,   y: -95, color: 'bg-yellow-300',  w: 8,  h: 8,  r: -75  },
];

function GraduationMilestone({ entry, inView, delay }: { entry: Milestone; inView: boolean; delay: number }) {
  const [burstKey, setBurstKey] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: 'easeOut' as const }}
      className="relative flex justify-center z-20"
    >
      {/* Diamond on the line */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-green-400 ring-4 ring-gray-950 z-10" />

      {/* Confetti burst */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence>
          {burstKey > 0 && confettiPieces.map((p, j) => (
            <motion.div
              key={`${burstKey}-${j}`}
              className={`absolute rounded-sm ${p.color}`}
              style={{ width: p.w, height: p.h }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0, rotate: 0 }}
              animate={{ x: p.x, y: p.y, opacity: [1, 1, 0], scale: [0, 1, 0.8], rotate: p.r * 2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: j * 0.02 }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Pill */}
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onMouseEnter={() => setBurstKey(k => k + 1)}
        className="bg-gray-950 border border-green-500/50 rounded-full px-6 py-2.5 flex items-center gap-3 relative z-20 cursor-default"
      >
        <span className="text-sm font-semibold text-green-400">{entry.label}</span>
        <span className="text-gray-500 text-xs hidden sm:block">·</span>
        <span className="text-gray-400 text-xs hidden sm:block">{entry.sub}</span>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  let jobIndex = -1;

  return (
    <section id="experience" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
            Where I've Worked
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Work Experience</h2>
        </div>

        <div ref={ref} className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2 hidden md:block z-0" />

          <div className="space-y-12">
            {entries.map((entry, i) => {
              if (entry.type === 'milestone') {
                return (
                  <GraduationMilestone
                    key={i}
                    entry={entry}
                    inView={inView}
                    delay={i * 0.12}
                  />
                );
              }

              jobIndex++;
              const idx = jobIndex;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' as const }}
                  className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
                >
                  {/* Timeline dot */}
                  <div className={`hidden md:block absolute top-5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-gray-950 ${idx % 2 === 0 ? '-right-[6.5px]' : '-left-[6.5px]'}`} />

                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="text-base font-semibold">{entry.role}</h3>
                      <span className="text-xs text-gray-500 whitespace-nowrap mt-0.5">{entry.period}</span>
                    </div>
                    <p className="text-indigo-400 text-sm mb-1">{entry.company}</p>
                    <p className="text-gray-600 text-xs mb-4">{entry.location}</p>
                    <ul className="space-y-2">
                      {entry.bullets.map((b, j) => (
                        <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-indigo-500 mt-1.5 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
