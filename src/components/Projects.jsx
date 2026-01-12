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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
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
        className="grid projects"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={filter}
      >
        <AnimatePresence mode="wait">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              className="card"
              variants={itemVariants}
              layoutId={p.title}
            >
              <div className="card__header">
                <p className="label">{p.title}</p>
                <span className="tag">{p.tech}</span>
              </div>
              <p className="card__body">{p.body}</p>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
