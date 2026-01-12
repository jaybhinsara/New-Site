import { motion } from 'framer-motion';
import { data } from '../data';

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="section shell">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <p className="eyebrow">Education</p>
        <h2>Continuous learning across full-stack, cloud, and AI-assisted development.</h2>
      </motion.div>

      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {data.education.map((edu) => (
          <motion.article key={edu.title} className="timeline__item" variants={itemVariants}>
            <div className="timeline__meta">
              <p className="label">{edu.when}</p>
              <p className="tag">{edu.tag}</p>
            </div>
            <div>
              <h3>{edu.title}</h3>
              <p className="lede">{edu.lede}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
