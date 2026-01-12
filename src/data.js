export const data = {
  projects: [
    {
      title: 'Personal Portfolio Website',
      tech: 'React · Vite · Framer Motion · CSS3',
      category: ['frontend'],
      image: '/jay-portfolio-img.png',
      gradient: 'linear-gradient(135deg, #f2c14f, #2ed4a6)',
      github: 'https://github.com/jaybhinsara/New-Site.git',
      body: 'Modern, performance-optimized portfolio with smooth animations, dark/light themes, and accessibility features.',
      bullets: [
        'Achieved 90+ PageSpeed score with lazy loading, code splitting, and critical CSS inlining.',
        'Built responsive design with mobile-first approach and fluid animations using Framer Motion.',
        'Implemented theme toggle with localStorage persistence and WCAG-compliant accessibility.'
      ]
    },
    {
      title: 'Crypto Dashboard Application',
      tech: 'HTML · CSS · JavaScript · Public APIs',
      category: ['frontend', 'data'],
      image: '/dashboard-img.png',
      gradient: 'linear-gradient(135deg, #03a9f4, #2ed4a6)',
      github: 'https://github.com/jaybhinsara/Crypto_dashboard.git',
      body: 'Real-time dashboard with live market data, price trends, and responsive layout.',
      bullets: [
        'Integrated external APIs for live prices and trends.',
        'Built dynamic UI updates for clarity and speed.',
        'Designed a clean, responsive grid for readability.'
      ]
    },
    {
      title: 'Instagram Clone (Frontend)',
      tech: 'HTML · CSS · JavaScript',
      category: ['frontend'],
      gradient: 'linear-gradient(135deg, #f2c14f, #03a9f4)',
      github: 'https://github.com/jaybhinsara/insta_clone.git',
      body: 'UI-focused clone capturing feed, cards, and responsive behaviors to mirror production UI.',
      bullets: [
        'Replicated feed layouts and media cards.',
        'Practiced component-like structuring in vanilla JS.',
        'Applied modern CSS for crisp responsiveness.'
      ]
    },
    {
      title: 'Password Generator',
      tech: 'HTML · CSS · JavaScript',
      category: ['frontend'],
      image: '/unit-converter.png',
      gradient: 'linear-gradient(135deg, #2ed4a6, #03a9f4)',
      github: 'https://github.com/jaybhinsara/Passwor-Generator.git',
      body: 'Customizable password creator with selectable rules and instant feedback.',
      bullets: [
        'Random generation logic with user controls.',
        'Interaction clarity and accessible states.',
        'Event-driven programming patterns.'
      ]
    }
  ],
  experience: [
    {
      when: 'Sep 2022 – Nov 2025 · London, UK',
      tag: 'Management · Onsite Tech',
      role: 'Manager & OTP (Onsite Tech Person)',
      place: 'Lansia Ltd (T/A McDonald\'s)',
      bullets: [
        'Ran Bandmate automated reporting and handled incident triage.',
        'Troubleshot kiosk and POS network/software/hardware to maintain ~99% uptime.',
        'Coordinated shift-based IT operations and digital reporting.'
      ]
    },
    {
      when: 'Dec 2021 – Mar 2022 · Surat, India',
      tag: 'Web Development',
      role: 'Web Developer Intern',
      place: 'Adbookee Media Solutions',
      bullets: [
        'Supported live builds, testing, and deployment.',
        'Practiced debugging and Git-based workflows.',
        'Applied DRY principles for reusable components.'
      ]
    }
  ],
  certificates: [
    {
      title: 'JPMorganChase Software Engineering Simulation',
      tech: 'Spring Boot · Kafka · REST · JPA · H2',
      bullets: [
        'Built Spring Boot microservice with Kafka-backed transaction processing and validation.',
        'Implemented persistence and balance updates with Spring Data JPA and H2.',
        'Integrated external REST APIs and exposed balance query endpoints.',
        'Hardened reliability with Maven-based testing and debugging.'
      ]
    }
  ],
  education: [
    {
      when: 'Nov 2025 – Present · Remote',
      tag: 'Full Stack',
      title: 'Full Stack Developer Course, Scrimba',
      lede: 'HTML5 · CSS3 · Flexbox · Grid · Responsive · JavaScript ES6+ · DOM · Async/Await · TypeScript · React · Node.js · Express · Next.js · REST · JSON · State management · AI-assisted development · Databases · Git & GitHub.'
    },
    {
      when: 'Sep 2022 – Sep 2025 · London, UK',
      tag: 'Postgraduate',
      title: 'MSc Software Engineering, University of West London',
      lede: 'Software Design · Cloud Computing · Data Management · Advanced Programming.'
    },
    {
      when: 'Nov 2018 – Mar 2021 · Surat, India',
      tag: 'Undergraduate',
      title: 'BSc Information Technology, P.P. Savani University',
      lede: 'Web Application Development · Database Systems · Python · IoT · Blockchain Technology.'
    }
  ],
  skills: [
    { title: 'Frontend', body: 'React, JavaScript (ES6+), HTML5, CSS3 (Flexbox, Grid), Next.js basics, accessibility, responsive systems.' },
    { title: 'Backend & Data', body: 'Spring Boot, REST APIs, Express.js, MySQL, basic CRUD, server administration, CLI.' },
    { title: 'Workflow', body: 'Git & GitHub, debugging, testing, DRY patterns, production control, performance-minded UIs.' },
    { title: 'AI-assisted', body: 'Prompting, AI tooling integration, rapid prototyping, accessible-by-default UI checks.' }
  ]
};
