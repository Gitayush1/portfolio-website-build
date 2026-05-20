export const resumeData = {
  basics: {
    name: "Kunwar Ayush Pratap Singh",
    title: "Full-Stack Developer & B.Tech Student",
    location: "IIIT Una, Himachal Pradesh",
    email: "kunwarayush23@gmail.com",
    phone: "+91-8840993536",
    website: "https://github.com/Gitayush1",
    summary:
      "Full-Stack Developer specializing in Next.js & MERN — I build healthcare and SaaS platforms that ship fast and scale.",
    socials: [
      { name: "GitHub", url: "https://github.com/Gitayush1", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ayush-singh-9b2aa027b/", icon: "linkedin" },
      { name: "Email", url: "mailto:kunwarayush23@gmail.com", icon: "mail" },
    ],
  },

  experience: [
    {
      id: 1,
      company: "MyMedicos Community",
      position: "Web Developer Intern",
      startDate: "May 2025",
      endDate: "Aug 2025",
      duration: "4 months",
      description:
        "Developed a medical professional community platform using Next.js 15 and TypeScript. Implemented scalable features including feature flags, admin dashboard, and story-sharing system while optimizing performance.",
      highlights: [
        "Implemented a scalable feature flag system, reducing deployment risks by 70%",
        "Built an admin dashboard for managing posts, polls, stories, messaging, and notifications",
        "Developed a 24-hour story-sharing system, increasing user engagement by 40%",
        "Optimized performance using lazy loading, code splitting, and Zustand, improving load times by 35%",
      ],
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Zustand",
        "React",
        "Tailwind CSS",
        "Feature Flags",
      ],
    },
  ],

  achievements: [
    {
      icon: "💻",
      count: "680+",
      label: "Coding Problems Solved",
      description: "Solved across LeetCode, CodeChef, and GeeksforGeeks with 30% efficiency improvement",
    },
    {
      icon: "🎓",
      count: "8.97",
      label: "CGPA",
      description: "Current CGPA at Indian Institute of Information Technology, Una",
    },
    {
      icon: "🥇",
      count: "99/100",
      label: "Physics Gold Medal",
      description: "Senior Secondary Gold Medalist in physics",
    },
    {
      icon: "🏆",
      count: "1st",
      label: "Position at Meraki 2023",
      description: "Secured 1st position in Sold Mold event at IIIT Una technical fest",
    },
    {
      icon: "🏅",
      count: "Participant",
      label: "KrackHack 2.0",
      description: "Recognized for teamwork, creativity, and problem-solving skills at GDG, IIT Mandi",
    }
  ],

  projects: [
    {
      id: 1,
      title: "Women Safety Portal",
      description: "AI-Based Web + Mobile Emergency Response System with Police Station Management Portal",
      image: "/project-1.jpg",
      link: "https://v0-women-safety-portal.vercel.app/",
      github: "https://github.com/Gitayush1/women-safety-portal",
      date: "Jan 2026 - May 2026",
      technologies: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "AI/ML"],
      highlights: [
        "Implemented geofencing-based routing, improving nearest station assignment by 85%",
        "Processed data for 100+ stations statewide mapping",
        "Added AI risk classification for text/voice emergencies, improving detection by 75%",
        "Reduced backend response time by 40% and boosted admin efficiency by 50%"
      ],
    },
    {
      id: 2,
      title: "DocBook - AI-Powered Healthcare Portal",
      description: "Full-Stack Doctor Appointment & Medical Triage Platform with AI Symptom Checker",
      image: "/project-2.jpg",
      link: "https://docbook-frontend-opal.vercel.app/",
      github: "https://github.com/Gitayush1/DocBook",
      date: "Aug 2024 - Dec 2024",
      technologies: ["MERN Stack", "Groq API", "Llama 3.3", "Stripe", "Cloudinary", "Vite", "Tailwind CSS"],
      highlights: [
        "Architected AI Symptom Checker using Groq API (Llama 3.3)",
        "Engineered JWT authentication and Stripe API for payments",
        "Enhanced frontend performance by 35% using Vite and Tailwind CSS",
        "Developed dedicated dashboards for patients, doctors, and admins"
      ],
    }
  ],

  skills: {
    languages: [
      "JavaScript",
      "TypeScript",
      "C++",
      "C",
      "Python",
      "HTML",
      "CSS",
      "SQL",
    ],
    frontend: [
      "React.js",
      "Next.js",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "React Leaflet",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "JWT Authentication",
    ],
    devOps: [
      "Git",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "Vercel",
      "Netlify",
      "Firebase Console",
    ],
    concepts: [
      "Data Structures & Algorithms",
      "DBMS",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "Feature Flags",
      "A/B Testing",
      "State Management",
      "Code Splitting",
      "Performance Optimization",
    ],
  },

  education: [
    {
      school: "Indian Institute of Information Technology, Una",
      degree: "B.Tech - Information Technology",
      graduationYear: 2027,
      gpa: "8.97 CGPA",
      highlights: [
        "Core Subjects: DSA, Computer Networks, DAA, OOPS, DBMS, OS, COA, Software Engineering",
        "Additional: Information Security, Cryptography, Discrete Mathematics",
      ],
    },
    {
      school: "CBSE Board",
      degree: "Senior Secondary (12th)",
      graduationYear: 2022,
      gpa: "93.6%",
      highlights: ["Gold Medalist in Physics (99/100)"],
    },
    {
      school: "CBSE Board",
      degree: "Secondary (10th)",
      graduationYear: 2020,
      gpa: "94.6%",
      highlights: [],
    },
  ],

  certifications: [
    { name: "KrackHack 2.0 Participant", issuer: "Google Developer Groups, IIT Mandi", year: 2024 },
    { name: "1st Position - Sold Mold Event", issuer: "Meraki 2023, IIIT Una", year: 2023 },
  ],
};
