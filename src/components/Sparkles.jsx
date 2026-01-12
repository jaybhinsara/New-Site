import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Sparkles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticle = () => {
      const id = Math.random();
      const x = Math.random() * 100;
      const duration = 6 + Math.random() * 4;
      const delay = Math.random() * 2;
      const size = 2 + Math.random() * 4;
      const opacity = 0.3 + Math.random() * 0.5;

      const particle = { id, x, duration, delay, size, opacity };
      setParticles((prev) => [...prev, particle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, (duration + delay) * 1000);
    };

    const interval = setInterval(generateParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sparkles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="sparkle"
          initial={{ y: -10, opacity: 0, x: `${particle.x}vw` }}
          animate={{
            y: '100vh',
            opacity: [0, particle.opacity, particle.opacity, 0],
            x: `calc(${particle.x}vw + ${(Math.random() - 0.5) * 40}px)`,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: 'linear',
          }}
          style={{
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(242, 193, 79, 0.8), rgba(46, 212, 166, 0.4))`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(242, 193, 79, 0.6)`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}
