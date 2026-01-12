import { motion } from 'framer-motion';
import { useState } from 'react';
import './ThemeToggle.css';

export function ThemeToggle({ theme, toggleTheme }) {
  const isLight = theme === 'light';
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <motion.div
      className="switch"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <input
        type="checkbox"
        id="theme-toggle"
        checked={isLight}
        onChange={handleToggle}
        aria-label="Toggle theme"
      />
      <label htmlFor="theme-toggle" className={isAnimating ? 'animating' : ''}>
        <i className={`bulb ${isLight ? 'on' : 'off'}`}>
          <span className="bulb-center"></span>
          <span className="filament-1"></span>
          <span className="filament-2"></span>
          <span className="reflections">
            <span></span>
          </span>
          <span className="sparks">
            <i className="spark1"></i>
            <i className="spark2"></i>
            <i className="spark3"></i>
            <i className="spark4"></i>
          </span>
        </i>
      </label>
    </motion.div>
  );
}
