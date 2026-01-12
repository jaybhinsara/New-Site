import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from '../data';

export function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? data.projects
    : data.projects.filter(p => p.category.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const jellyVariants = {
    rest: { scale: 1 },
    bounce: {
      scale: [1, 1.05, 0.95, 1.02, 1],
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  return (
    <section id="projects" className="section shell">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <p className="eyebrow">Selected Work</p>
        <h2>Projects that mix data, polish, and real-world use.</h2>
      </motion.div>

      <motion.div
        className="controls"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {['all', 'frontend', 'data'].map((f) => (
          <motion.button
            key={f}
            className={`chip ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {f === 'all' ? 'All' : f === 'frontend' ? 'Frontend' : 'Data/APIs'}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={filter}
      >
        <AnimatePresence mode="wait">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: [1, 1.03, 0.98, 1],
                transition: { 
                  duration: 0.5,
                  ease: 'easeOut'
                }
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              viewport={{ once: false, amount: 'some', margin: '-50px' }}
              style={{
                '--gradient': p.gradient
              }}
            >
              <span className="project-card__bg"></span>

              <div className="project-card__content">
                <div className="project-card__header">
                  <h3>{p.title}</h3>
                  <span className="tag">{p.tech}</span>
                </div>
                <p className="project-card__body">{p.body}</p>
                <ul className="project-card__bullets">
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
