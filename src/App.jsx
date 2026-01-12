import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Sparkles } from './components/Sparkles';
import { ThemeToggle } from './components/ThemeToggle';
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Sparkles />
      <motion.nav className="nav" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <a href="#" className="brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Jay Bhinsara</a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </motion.nav>

      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <SpeedInsights />

      <motion.footer
        className="shell footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>© Jay Bhinsara · Built with React & Framer Motion.</p>
      </motion.footer>
    </>
  );
}
