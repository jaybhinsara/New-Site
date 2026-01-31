import { useEffect, useRef } from 'react';

export function Sparkles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let isActive = true;

    const generateParticle = () => {
      if (!isActive) return;

      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';

      const x = Math.random() * 100;
      const duration = 6 + Math.random() * 4;
      const delay = Math.random() * 2;
      const size = 2 + Math.random() * 4;
      const opacity = 0.3 + Math.random() * 0.5;
      const drift = (Math.random() - 0.5) * 40;

      sparkle.style.setProperty('--x', `${x}vw`);
      sparkle.style.setProperty('--drift', `${drift}px`);
      sparkle.style.setProperty('--size', `${size}px`);
      sparkle.style.setProperty('--opacity', `${opacity}`);
      sparkle.style.animationDuration = `${duration}s`;
      sparkle.style.animationDelay = `${delay}s`;

      const handleEnd = () => {
        sparkle.removeEventListener('animationend', handleEnd);
        sparkle.remove();
      };

      sparkle.addEventListener('animationend', handleEnd);
      container.appendChild(sparkle);
    };

    const interval = setInterval(generateParticle, 500);

    return () => {
      isActive = false;
      clearInterval(interval);
      container.querySelectorAll('.sparkle').forEach((node) => node.remove());
    };
  }, []);

  return <div className="sparkles-container" ref={containerRef} aria-hidden="true" />;
}
