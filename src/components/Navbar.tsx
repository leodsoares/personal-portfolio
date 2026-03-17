import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import type { Lang } from '../i18n/translations';

const navIds = ['about', 'skills', 'experience', 'projects'];

const langOptions: { value: Lang; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'fr-CA', label: 'FR' },
  { value: 'pt-BR', label: 'PT' },
];

function NavLink({ label, id, hovered, onHover, theme }: {
  label: string;
  id: string;
  hovered: string | null;
  onHover: (id: string) => void;
  theme: 'dark' | 'light';
}) {
  return (
    <li>
      <a
        href={`#${id}`}
        onMouseEnter={() => onHover(id)}
        className="relative px-4 py-1.5 text-sm font-medium inline-block"
      >
        <AnimatePresence>
          {hovered === id && (
            <motion.span
              layoutId="nav-pill"
              className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </AnimatePresence>
        <motion.span
          animate={{
            color: hovered === id
              ? (theme === 'dark' ? '#ffffff' : '#111827')
              : (theme === 'dark' ? '#9ca3af' : '#4b5563'),
          }}
          transition={{ duration: 0.15 }}
          className="relative z-10"
        >
          {label}
        </motion.span>
      </a>
    </li>
  );
}

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const leftLinks = t.nav.links.slice(0, 2);
  const rightLinks = t.nav.links.slice(2);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800' : ''
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center"
        onMouseLeave={() => setHovered(null)}
      >
        {/* Left links */}
        <ul className="hidden md:flex gap-1 flex-1 justify-end">
          {leftLinks.map((label, i) => (
            <NavLink key={navIds[i]} label={label} id={navIds[i]} hovered={hovered} onHover={setHovered} theme={theme} />
          ))}
        </ul>

        {/* Center — name */}
        <a href="#hero" className="text-lg font-bold text-gradient px-8 shrink-0">
          Leonardo Soares
        </a>

        {/* Right links + language switcher + theme toggle */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-start">
          <ul className="flex gap-1">
            {rightLinks.map((label, i) => (
              <NavLink key={navIds[i + 2]} label={label} id={navIds[i + 2]} hovered={hovered} onHover={setHovered} theme={theme} />
            ))}
          </ul>
          <div className="flex items-center gap-0.5 ml-3 pl-3 border-l border-gray-200 dark:border-gray-800">
            {langOptions.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setLang(value)}
                className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
                  lang === value
                    ? 'text-indigo-400 bg-indigo-500/10'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="ml-2 p-1.5 rounded-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex flex-1 justify-end gap-2">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
          <button
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-6 pb-4 flex flex-col gap-4"
          >
            <ul className="flex flex-col gap-4">
              {t.nav.links.map((label, i) => (
                <li key={navIds[i]}>
                  <a
                    href={`#${navIds[i]}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1 pt-2 border-t border-gray-200 dark:border-gray-800">
              {langOptions.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setLang(value)}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    lang === value
                      ? 'text-indigo-400 bg-indigo-500/10'
                      : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
