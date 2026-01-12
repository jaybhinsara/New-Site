import { motion } from 'framer-motion';
import { data } from '../data';

export function Experience() {
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
    <section id="experience" className="section shell">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <p className="eyebrow">Experience</p>
        <h2>Blending on-the-ground operations with engineering.</h2>
      </motion.div>

      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {data.experience.map((exp) => (
          <motion.article key={exp.role} className="timeline__item" variants={itemVariants}>
            <div className="timeline__meta">
              <p className="label">{exp.when}</p>
              <p className="tag">{exp.tag}</p>
            </div>
            <div>
              <h3>{exp.role}</h3>
              <p className="lede">{exp.place}</p>
              <ul>
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
