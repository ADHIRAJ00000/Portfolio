// Mock data for Adhiraj Singh's Portfolio

export const personalInfo = {
  name: "Adhiraj Singh",
  title: "Full Stack Developer",
  subtitle: "MERN Stack Specialist",
  location: "Bengaluru, Karnataka, IN",
  email: "adhirajsingh00000@gmail.com",
  phone: "+91 8604904661",
  linkedin: "https://www.linkedin.com/in/adhiraj-singh-bb511127b/",
  github: "https://github.com/ADHIRAJ00000",
  profileImage: "https://customer-assets.emergentagent.com/job_dark-dimension-cv/artifacts/sn02tkp9_WhatsApp%20Image%202025-11-24%20at%2023.50.20.jpeg",
  about: "Dynamic software developer, excelling in MERN Stack. Adept at project management and system debugging, I deliver innovative solutions that enhance user experience. My strong foundation in data structures and algorithms drives efficient coding practices, ensuring high-quality results in every project."
};

export const skills = {
  technical: [
    { name: "React.js", level: 90, category: "frontend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express.js", level: 85, category: "backend" },
    { name: "MongoDB", level: 80, category: "database" },
    { name: "JavaScript", level: 90, category: "language" },
    { name: "Python", level: 75, category: "language" },
    { name: "C++", level: 75, category: "language" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "SQL", level: 80, category: "database" },
    { name: "SupaBase", level: 75, category: "database" },
    { name: "DSA", level: 80, category: "cs" },
    { name: "System Design", level: 75, category: "cs" },
    { name: "Redux", level: 80, category: "frontend" }
  ],
  soft: [
    { name: "Leadership", icon: "Users" },
    { name: "Teamwork", icon: "UsersRound" },
    { name: "Problem Solving", icon: "Lightbulb" },
    { name: "Adaptability", icon: "Shuffle" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Learnify",
    description: "A full-stack AI-powered edTech platform for instant course creation and personalized learning paths.",
    longDescription: "Built with MongoDB for efficient storage of AI-generated content, user data, and records. React.js frontend with secure authentication and smooth, intuitive learning workflows. Scalable Node.js/Express APIs for AI-driven course generation and real-time collaboration.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Redux", "AI/ML"],
    link: "https://learnify-pro-teal.vercel.app",
    github: "https://github.com/ADHIRAJ00000",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Money Matters",
    description: "A finance management app that categorizes monthly income into needs, wants, and spending insights.",
    longDescription: "Features goal-setting for users to plan, monitor, and achieve financial targets. Integrated interactive charts and visualizations for presenting income, expenses, and savings data.",
    technologies: ["React.js", "Node.js", "MongoDB", "Chart.js", "Express.js"],
    link: "https://money-matters-mu.vercel.app",
    github: "https://github.com/ADHIRAJ00000",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Convoy Command-Unit",
    description: "A low-power, non-GPS asset tracking system for EV battery swapping networks.",
    longDescription: "Addresses logistical and security challenges with reduced dependence on power-intensive GPS. Enables real-time proximity reporting and automated tamper detection to secure EV battery packs.",
    technologies: ["React.js", "Node.js", "IoT", "Express.js", "Real-time APIs"],
    link: "https://hawkroute2-2-frontend-109n.onrender.com",
    github: "https://github.com/ADHIRAJ00000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    featured: true
  }
];

export const achievements = [
  {
    id: 1,
    title: "National Level Hackathon Winner",
    description: 'Developed "Hawkroute," a DefenceTech convoy intelligence system for coordination, route planning, and real-time decision support.',
    award: 'Secured "Overall Runner-Up" and "Best Software Team Award"',
    date: "December 2025",
    icon: "Trophy"
  },
  {
    id: 2,
    title: "HACKHZARDS '25",
    description: "Secured Top 100 among 2,900+ teams. Designed a low-power, non-GPS EV battery asset tracking system.",
    award: "Top 100 / 2900+ teams",
    date: "2025",
    icon: "Award"
  },
  {
    id: 3,
    title: "State Level Basketball Player",
    description: "Represented the state in basketball competitions, demonstrating leadership and teamwork.",
    award: "State Level Recognition",
    date: "2023",
    icon: "Medal"
  }
];

export const education = [
  {
    id: 1,
    institution: "BMS Institute of Technology & Management",
    degree: "Bachelor of Engineering",
    field: "Electronics and Telecommunication",
    grade: "CGPA: 7.95",
    period: "2023 - Present",
    current: true
  },
  {
    id: 2,
    institution: "Shri J.N. Shah Inter College",
    degree: "ISC (XII)",
    field: "Science",
    grade: "91.25%",
    period: "2021-2022",
    current: false
  },
  {
    id: 3,
    institution: "Shri J.N. Shah Inter College",
    degree: "ICSE (X)",
    field: "General",
    grade: "92%",
    period: "2019-2020",
    current: false
  }
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    type: "Projects & Development",
    description: "Developed multiple MERN stack applications with focus on user experience and performance.",
    achievements: [
      "Built REST APIs and authentication modules",
      "Created responsive dashboards with React",
      "Integrated MongoDB databases efficiently",
      "Deployed applications on cloud platforms"
    ],
    period: "2023 - Present"
  }
];