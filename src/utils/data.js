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
    photo: 'assets/img/profile.jpg',
    linkedin: 'https://www.linkedin.com/in/navaneethm32',
    github: 'https://github.com/NavaneethMaruthi',
    resume: 'assets/Navaneeth_Maruthi_Resume.pdf',
    available: true,
  },

  /* ── HERO ── */
  hero: {
    intro: 'Hi, I\'m',
    highlight: 'Navaneeth Maruthi',
    subtitle:
      'Software & Data Engineer with <strong>2+ years</strong> shipping production-grade web apps and data pipelines at Cognizant. Proven ability to own features end-to-end — React frontend to Node.js backend to cloud-deployed infrastructure on AWS. Experienced in <strong>high-throughput ETL</strong> (Spark, Snowflake), <strong>serverless distributed systems</strong> (SNS, SQS, Lambda), and <strong>modern full-stack development</strong> (REST APIs, JWT, MongoDB).',
    chips: [
      { label: 'Apache Spark',  type: 'purple' },
      { label: 'Snowflake',     type: 'purple' },
      { label: 'React.js',      type: 'cyan'   },
      { label: 'Node.js',       type: 'cyan'   },
      { label: 'AWS',           type: 'purple' },
      { label: 'Python',        type: 'purple' },
      { label: 'ETL Pipelines', type: 'cyan'   },
      { label: 'Kubernetes',    type: 'purple' },
    ],
    stats: [
  { num: '2+',   label: 'Yrs Experience'  },
  { num: '100+', label: 'Code Reviews Led' },
  { num: '40%',  label: 'Faster Config'   },
],
  },

  /* ── ABOUT ── */
  about: {
    paragraphs: [
  'Software engineer with <strong>2+ years</strong> shipping production-grade web apps and data pipelines at Cognizant. I own features end-to-end — React frontend, Node.js backend, cloud infrastructure on AWS — without handing off.',
  'Most recently architected an async distributed system on AWS evolving a sync API into a serverless event-driven pipeline using <strong>SNS, SQS, Lambda and Terraform</strong> — achieving <strong>614x throughput improvement</strong> in benchmarks. I\'m equally at home writing Spark ETL jobs and shipping React UIs.',
],
    skills: [
      {
        category: 'Languages',
        tags: ['Python', 'JavaScript ES6', 'Java', 'Go', 'SQL', 'C++', 'C#'],
      },
      {
        category: 'Frontend',
        tags: ['React.js', 'Angular', 'HTML5', 'CSS3'],
      },
      {
        category: 'Backend & APIs',
        tags: ['Node.js', 'Spring Boot', 'REST APIs', 'Express.js', 'JWT Auth', 'OpenAPI/Swagger'],
      },
      {
        category: 'Data & Cloud',
        tags: ['Apache Spark', 'Snowflake', 'Hive', 'Kafka', 'AWS Lambda', 'SNS/SQS', 'DynamoDB', 'AWS S3/ECS/ECR', 'AWS Bedrock', 'Terraform', 'GCP', 'CloudWatch'],
      },
      {
        category: 'Databases',
        tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Snowflake', 'Hive', 'NoSQL'],
      },
      {
        category: 'DevOps & Tools',
        tags: ['Docker', 'Kubernetes', 'CI/CD', 'Git', 'Maven', 'Agile/Scrum', 'Claude Code'],
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
        title: 'ML & Algorithms',
        desc: 'Built ML models (Random Forest, KNN, Neural Networks) achieving 98.25% accuracy. Implemented Apriori, hierarchical clustering, and gradient descent from scratch.',
      },
      {
        icon: '🏆',
        title: 'JPMorgan Chase Software Engineering Simulation',
        desc: 'Completed Forage simulation covering financial software engineering practices — Feb 2026.',
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
        'Built <strong>Apache Kafka</strong>-based event streaming integrations to decouple data ingestion from downstream consumers, improving pipeline resilience.',
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
        'Graduate-level coursework in <strong>Algorithms, Database Management Systems, Web Development, Building Scalable Distributed Systems, Programming Design Paradigm, Machine Learning, Data Mining Techniques</strong>.',
        'Building projects across ML, data engineering, and full-stack web apps to round out industry experience.',
      ],
      tech: [],
    },
    {
      company: 'Visvesvaraya Technological University',
      role: 'BE in Computer Science and Engineering',
      location: 'Bangalore, India',
      period: 'May 2018 – July 2022',
      dotStyle: 'red',
      bullets: [
        'Bachelor\'s degree in Computer Science with focus on <strong>data structures, algorithms, and software engineering</strong>.',
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
      desc: 'Full-stack goal-planning application enabling 50+ users to convert long-term goals into structured daily and weekly action plans. Features JWT authentication, protected routes, persistent MongoDB storage, and <strong>WCAG-compliant accessible design</strong> validated via Lighthouse audits. Containerized with Docker and deployed on Render.',
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
      badge: '✦ Outperforms Human Radiologists',
      desc: 'Trained and compared 4 ML models on the Wisconsin Diagnostic dataset. Outperformed human radiologist miss rates with a <strong>4.76% false negative rate</strong> — achieving 98.25% accuracy and 0.997 AUC via GridSearch tuning. Validated via bias-variance analysis with clinically meaningful feature alignment.',
      tech: ['Python', 'scikit-learn', 'GridSearch', 'Random Forest', 'Logistic Regression', 'KNN', 'Decision Tree'],
      links: [
        { label: '⌥ GitHub', url: 'https://github.com/NavaneethMaruthi/wisconsin-breast-cancer' },
      ],
    },
  ],

  /* ── CONTACT ── */
  contact: {
    heading: 'Contact Me',
    subtext: 'Let\'s talk.',
    links: [
      { icon: '<i class="fa-regular fa-envelope"></i>', label: 'Email',    value: 'maruthi.n@northeastern.edu',  url: 'mailto:maruthi.n@northeastern.edu' },
      { icon: '<i class="fa-brands fa-linkedin"></i>',  label: 'LinkedIn', value: 'linkedin.com/in/navaneethm32', url: 'https://www.linkedin.com/in/navaneethm32' },
      { icon: '<i class="fa-brands fa-github"></i>',    label: 'GitHub',   value: 'github.com/NavaneethMaruthi', url: 'https://github.com/NavaneethMaruthi' },
    ],
  },

};