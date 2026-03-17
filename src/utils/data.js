/* ============================================================
   src/utils/data.js
   Single source of truth for all resume/portfolio data.
   All section scripts read from this — never hardcode
   content elsewhere.
============================================================ */

const RESUME_DATA = {

  /* ── PERSONAL ── */
  personal: {
    name: 'Navaneeth Maruthi',
    initials: 'NM',
    tagline: 'Software & Data Engineer',
    email: 'maruthi.n@northeastern.edu',
    phone: '(857) 421-9106',
    location: 'Boston, MA',
    university: 'Northeastern University',
    degree: 'MS in Computer Science',
    graduationYear: 'May 2027',
    photo: 'assets/img/profile.jpg', // replace with real photo path
    linkedin: 'https://www.linkedin.com/in/navaneethm32',
    github: 'https://github.com/NavaneethMaruthi',
    resume: '#', // replace with link to your resume PDF
    available: true,
  },

  /* ── HERO ── */
  hero: {
    intro: 'Hi, I\'m',
    highlight: 'Navaneeth Maruthi',
    subtitle:
      'Software & Data Engineer with <strong>2+ years</strong> building scalable web apps and high-throughput data pipelines. I bridge the gap between <strong>full-stack product engineering</strong> and <strong>data infrastructure</strong> — from React UIs to Spark ETL on AWS.',
    chips: [
      { label: 'Apache Spark', type: 'purple' },
      { label: 'Snowflake',    type: 'purple' },
      { label: 'React.js',     type: 'cyan'   },
      { label: 'Node.js',      type: 'cyan'   },
      { label: 'AWS',          type: 'purple' },
      { label: 'Python',       type: 'purple' },
      { label: 'ETL Pipelines',type: 'cyan'   },
      { label: 'Kubernetes',   type: 'purple' },
    ],
    stats: [
      { num: '2+', label: 'Yrs Experience' },
      { num: '3',  label: 'Live Projects'  },
      { num: '10+',label: 'Technologies'   },
    ],
  },

  /* ── ABOUT ── */
  about: {
    paragraphs: [
      'I\'m a <strong>Computer Science graduate student at Northeastern University</strong> (MS, expected May 2027) with a solid foundation in both software engineering and data systems. My 2+ years at Cognizant taught me how to ship production code that <em>actually scales</em>.',
      'I specialize in two intersecting domains: <strong>building full-stack web applications</strong> (React → Node.js → cloud) and <strong>engineering robust data pipelines</strong> (Spark, Snowflake, AWS). This dual expertise makes me effective at companies where data and product teams need to move fast together.',
      'Outside of work, I build side projects, mentor peers through code reviews, and obsess over clean system design. I\'m actively targeting <strong>Data Engineer</strong> and <strong>Full Stack Engineer</strong> roles in the US.',
    ],
    skills: [
      {
        category: 'Data & Cloud',
        tags: ['Apache Spark', 'Snowflake', 'Hive', 'AWS S3/ECS', 'Kafka', 'Terraform', 'GCP'],
      },
      {
        category: 'Frontend',
        tags: ['React.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript ES6'],
      },
      {
        category: 'Backend & APIs',
        tags: ['Node.js', 'Spring Boot', 'REST APIs', 'Express.js', 'JWT Auth'],
      },
      {
        category: 'DevOps & Databases',
        tags: ['Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'MySQL', 'CI/CD'],
      },
    ],
    highlights: [
      {
        icon: '🎓',
        title: 'MS Computer Science — Northeastern University',
        desc: 'Boston, MA · Expected May 2027. Focused on distributed systems, data engineering, and scalable backend architecture.',
      },
      {
        icon: '🏢',
        title: '2+ Years at Cognizant',
        desc: 'Built Spark ETL pipelines processing multi-year datasets, led 100+ code reviews, and shipped Angular + REST API features for enterprise clients.',
      },
      {
        icon: '🔁',
        title: 'Full-Stack ↔ Data Bridge',
        desc: 'Rare ability to own features across the entire stack — React UIs, Node.js APIs, Spark jobs, and cloud infrastructure — without handing off.',
      },
      {
        icon: '🧠',
        title: 'ML-Curious Engineer',
        desc: 'Built and tuned ML models achieving 98.25% accuracy and 0.997 AUC on medical datasets using scikit-learn with GridSearch optimization.',
      },
    ],
  },

  /* ── EXPERIENCE ── */
  experience: [
    {
      company: 'Cognizant',
      role: 'Junior Software Engineer',
      location: 'Bangalore, India',
      period: 'Nov 2022 – Oct 2024',
      dotStyle: 'default',
      bullets: [
        'Engineered <strong>Apache Spark–based ETL pipelines</strong> to migrate multi-year historical datasets into AWS, powering Snowflake analytical reporting downstream.',
        'Built a <strong>Swagger-enabled dynamic pipeline config UI</strong>, eliminating hardcoded ingestion logic and cutting new dataset configuration time by ~40%.',
        'Designed a <strong>3-stage data validation architecture</strong> (structural → semantic → provisioning) ensuring end-to-end data integrity before analytical loading.',
        'Developed <strong>reusable Angular UI components</strong> integrated with REST APIs, improving front-end consistency and cutting new feature dev time across the team.',
        'Led <strong>100+ code reviews</strong> across 8 engineers in Agile/Scrum sprints, reducing defect escape rate and ensuring on-time delivery.',
      ],
      tech: ['Apache Spark', 'Snowflake', 'AWS S3', 'Angular', 'REST APIs', 'Swagger', 'Agile'],
    },
    {
      company: 'Cognizant',
      role: 'Software Engineer Intern',
      location: 'Bangalore, India',
      period: 'Apr 2022 – Sep 2022',
      dotStyle: 'cyan',
      bullets: [
        'Built and maintained an <strong>enterprise-grade Spring Boot + Angular SPA</strong> serving 100+ internal users with responsive UI components.',
        'Implemented <strong>comprehensive unit tests</strong> to reduce regression bugs and maintain code quality in a production-grade application.',
      ],
      tech: ['Spring Boot', 'Java', 'Angular', 'Unit Testing'],
    },
    {
      company: 'Northeastern University',
      role: 'MS in Computer Science',
      location: 'Boston, MA',
      period: 'Expected May 2027',
      dotStyle: 'red',
      bullets: [
        'Graduate-level coursework in <strong>distributed systems, databases, algorithms</strong>, and full-stack web development.',
        'Building projects across ML, data engineering, and full-stack web apps to round out industry experience.',
      ],
      tech: [],
    },
  ],

  /* ── PROJECTS ── */
  projects: [
    {
      icon: '🎯',
      title: 'Alignify',
      badge: '✦ Live & Deployed',
      desc: 'Full-stack goal-planning application enabling 50+ users to convert long-term goals into structured daily and weekly action plans. Features JWT authentication, protected routes, and persistent MongoDB storage for a complete end-to-end user workflow.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'Docker', 'Render'],
      links: [
        { label: '🔗 Live', url: 'https://alignify-6va4.onrender.com' },
      ],
    },
    {
      icon: '💼',
      title: 'FreelanceFlow',
      badge: '✦ Full Stack SPA',
      desc: 'Full-stack SPA supporting 50+ users, 300+ projects, and 700+ timesheet entries. Designed a normalized 4-collection MongoDB schema and connected the entire frontend to backend via REST APIs with JWT auth and real-time notifications.',
      tech: ['JavaScript ES6', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
      links: [
        { label: '⌥ GitHub', url: 'https://github.com/NavaneethMaruthi/FreelanceFlow' },
      ],
    },
    {
      icon: '🔬',
      title: 'Wisconsin Breast Cancer Diagnosis',
      badge: '✦ ML · 98.25% Accuracy',
      desc: 'Trained and compared 4 ML models on the Wisconsin Diagnostic dataset. Achieved 98.25% accuracy and 0.997 AUC via GridSearch tuning — outperforming human radiologist miss rates with a 4.76% false negative rate. Validated via bias-variance analysis.',
      tech: ['Python', 'scikit-learn', 'GridSearch', 'Random Forest', 'Logistic Regression'],
      links: [],
    },
  ],

  /* ── CONTACT ── */
  contact: {
    heading: 'Contact Me',
    subtext:
      'Let\'s talk.',
    links: [
      { icon: '✉️', label: 'Email',    value: 'maruthi.n@northeastern.edu', url: 'mailto:maruthi.n@northeastern.edu' },
      { icon: '💼', label: 'LinkedIn', value: 'LinkedIn', url: 'https://www.linkedin.com/in/navaneethm32' },
      { icon: '🐙', label: 'GitHub',   value: 'GitHub', url: 'https://github.com/NavaneethMaruthi' },
    ],
  },

};