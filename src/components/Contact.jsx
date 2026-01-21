import { motion } from 'framer-motion';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="section shell contact">
      <motion.div
        className="contact__copy"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <p className="eyebrow">Contact</p>
        <h2>Let's build your next interface or data-driven tool.</h2>
        <p className="lede">Based in Munich, available for remote-friendly work across Europe.</p>
        <motion.div
          className="contact__actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a className="btn primary" href="mailto:jaybhinsara9@gmail.com">
            jaybhinsara9@gmail.com
          </a>
          <a className="btn ghost" href="tel:+4915511348813">
            +49 155 1134 8813
          </a>
        </motion.div>
        <motion.div
          className="contact__links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://linkedin.com/in/jay-bhinsara" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/jaybhinsara" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>München, Germany</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="contact__panel"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="panel">
          <div className="panel__top">
            <span>Availability</span>
            <strong className="flickering-text">Accepting new<br />work</strong>
          </div>
          <p className="panel__body">
            Frontends, dashboards, and integrations with a bias toward clean execution and measurable uptime.
          </p>
          <div className="panel__tags">
            <span>Remote-friendly</span>
            <span>Full-time</span>
            <span>Contract</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
