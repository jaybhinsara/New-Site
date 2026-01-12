import { motion } from 'framer-motion';
import { data } from '../data';

export function Skills() {
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
  };

  return (
    <section id="skills" className="section shell">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <p className="eyebrow">Capabilities</p>
        <h2>What I use to ship reliable products.</h2>
      </motion.div>

      <motion.div
        className="grid skills"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {data.skills.map((skill) => (
          <motion.div key={skill.title} className="card" variants={itemVariants}>
            <p className="label">{skill.title}</p>
            <p className="card__body">{skill.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
