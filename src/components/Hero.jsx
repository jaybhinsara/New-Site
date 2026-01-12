import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <header className="shell">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div className="hero__copy" variants={containerVariants} initial="hidden" animate="visible">
          <motion.p className="eyebrow" variants={itemVariants}>
            Software Engineer · Munich
          </motion.p>
          <motion.h1 variants={itemVariants}>
            Building bold, reliable web experiences with React, JavaScript, and thoughtful UX.
          </motion.h1>
          <motion.p className="lede" variants={itemVariants}>
            Though my background started in management, I now craft AI-assisted, accessible interfaces and full-stack prototypes. I bring hands-on React, JavaScript, CSS, and backend knowledge to ship resilient products.
          </motion.p>
          <motion.div className="hero__ctas" variants={itemVariants}>
            <a className="btn primary" href="mailto:jaybhinsara9@gmail.com">Email Jay</a>
            <a className="btn ghost" href="https://linkedin.com/in/jay-bhinsara" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn ghost" href="https://github.com/jaybhinsara" target="_blank" rel="noreferrer">GitHub</a>
          </motion.div>
          <motion.div className="hero__meta" variants={itemVariants}>
            <div>
              <span className="label">Primary stack</span>
              <span className="value">React · JavaScript · HTML · CSS · MySQL · Spring Boot · CLI</span>
            </div>
            <div>
              <span className="label">Languages</span>
              <span className="value">English (C2) · German (A1)</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__panel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="panel">
            <div className="panel__top">
              <span>Projects shipped</span>
              <motion.strong
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                3
              </motion.strong>
            </div>
            <p className="panel__body">
              AI-assisted frontends, API-driven dashboards, and component-driven UI systems with a focus on responsiveness and reliability.
            </p>
            <div className="panel__tags">
              {['React', 'APIs', 'Performance', 'Accessibility'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.div
            className="orb"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </header>
  );
}
