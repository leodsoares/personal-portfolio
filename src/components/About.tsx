import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Pos = { top?: number; bottom?: number; left?: number; right?: number };

// Emoji squares — vertically spread, verified no overlap with 208×208 main
const emojiSquares: { size: number; pos: Pos; gradient: string; emoji: string }[] = [
  { size: 52, pos: { top: -95,  left: 25  }, gradient: 'from-indigo-500 to-purple-600', emoji: '⚙️'  },
  { size: 44, pos: { top: -85,  right: -58}, gradient: 'from-purple-500 to-pink-500',   emoji: '💻'  },
  { size: 50, pos: { top: 75,   right: -68}, gradient: 'from-cyan-500 to-indigo-500',   emoji: '📐'  },
  { size: 56, pos: { bottom: -95, left: 12}, gradient: 'from-violet-500 to-purple-500', emoji: '🏗️' },
  { size: 46, pos: { bottom: -88, right: -55}, gradient: 'from-indigo-600 to-cyan-400', emoji: '🔧'  },
];

// Small blank squares scattered around
const smallSquares: { size: number; pos: Pos; gradient: string }[] = [
  { size: 20, pos: { top: -48,   left: 88  }, gradient: 'from-indigo-400 to-purple-500' },
  { size: 14, pos: { top: -22,   right: -38}, gradient: 'from-purple-400 to-pink-400'   },
  { size: 18, pos: { top: 12,    right: -36}, gradient: 'from-cyan-400 to-indigo-500'   },
  { size: 12, pos: { top: 158,   right: -28}, gradient: 'from-violet-400 to-purple-400' },
  { size: 22, pos: { bottom: -42, left: 82 }, gradient: 'from-indigo-500 to-cyan-400'   },
  { size: 16, pos: { bottom: -24, right: -42}, gradient: 'from-purple-500 to-indigo-400'},
  { size: 18, pos: { top: -22,   left: -30 }, gradient: 'from-violet-500 to-purple-600' },
  { size: 14, pos: { bottom: -20, left: -28}, gradient: 'from-indigo-400 to-violet-500' },
  { size: 20, pos: { top: 28,    left: -40 }, gradient: 'from-cyan-500 to-indigo-400'   },
  { size: 12, pos: { top: 142,   left: -32 }, gradient: 'from-purple-400 to-pink-500'   },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Avatar */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-start pl-8"
        >
          <div className="relative w-52 h-52">
            {/* Small blank squares */}
            {smallSquares.map((sq, i) => (
              <div
                key={`sm-${i}`}
                className={`absolute bg-gradient-to-br ${sq.gradient} rounded-lg opacity-60`}
                style={{ width: sq.size, height: sq.size, ...sq.pos }}
              />
            ))}

            {/* Emoji squares */}
            {emojiSquares.map((sq, i) => (
              <div
                key={`em-${i}`}
                className={`absolute bg-gradient-to-br ${sq.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                style={{ width: sq.size, height: sq.size, ...sq.pos }}
              >
                <span style={{ fontSize: sq.size * 0.42 }}>{sq.emoji}</span>
              </div>
            ))}

            {/* Main square */}
            <div className="relative z-10 w-52 h-52 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-7xl shadow-2xl shadow-indigo-900/30">
              👨‍💻
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            From job sites to VS Code
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I'm a Mechanical EIT based in Vancouver, registered with EGBC and trained at UBC — where I also picked up a minor in Computer Science along the way. Over the past two years I've been coordinating infrastructure construction projects across the Lower Mainland, working on everything from trenchless pipeline installations to pump stations and trunk sewer replacements.
            </p>
            <p>
              I like work that's tangible — the kind where you can drive past it when it's done and feel good about it.
            </p>
            <p>
              Outside of work I'm usually running around Stanley Park to prepare for the next race, or working on some personal projects like music composition and this website.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: 'Languages', value: '4' },
              { label: 'Experience', value: '2 yrs' },
              { label: 'Coffee/day', value: '∞' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2">
                <span className="text-indigo-400 font-bold text-sm">{value}</span>
                <span className="text-gray-500 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
