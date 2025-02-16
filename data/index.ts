import { link } from "fs";

export const navItems = [
  {
    name: "See My CV",
    link: "https://docs.google.com/document/d/1Q5UZQVyljSUHTumtP8jF3Pjtb2TVI-vASrl6D9fxxwY/edit?usp=drive_link",
  },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#recent-projects" },
  { name: "Reviews", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Full-Stack Developer Specializing in Collaborative, Real-Time Solutions ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Third-Year Student at Panjab University",
    description: "CSE",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building the Future of Interactive Web Experiences",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MoveX",
    des: "Embark on a journey with MoveX, a dynamic ride-sharing experience powered by real-time communication, geolocation services, and secure authentication using the MERN stack.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://github.com/iamgaurav12/MoveX",
  },
  {
    id: 2,
    title: "Comm-Sync-AI",
    des: "Real-time AI chat app with seamless communication, performance optimization, and secure authentication.",
    img: "/p2.svg",
    iconLists: ["/ts.svg", "/tail.svg", "/three.svg", "/re.svg"],
    link: "https://github.com/iamgaurav12/Comm-Sync-AI",
  },
  {
    id: 3,
    title: "ATS-Analyser",
    des: "Streamlined ATS analyzing job descriptions, identifying keyword gaps, and automating profile summaries efficiently.",
    img: "/p3.svg",
    iconLists: ["/c.svg"],
    link: "https://github.com/iamgaurav12/ATS-Analyser",
  },
  {
    id: 4,
    title: "SentinelBot",
    des: "Sentinel Bot: AI-powered security solution for monitoring, threat detection, and automated response.",
    img: "/x.svg",
    iconLists: ["c.svg"],
    link: "https://github.com/iamgaurav12/SentinelBot",
  },
];

export const testimonials = [
  {
    quote:
      "Gaurav’s website mirrors his personality—clear, dynamic, and ever-evolving. Every visit feels like a fresh adventure, packed with surprises and innovation. You never know what exciting feature he’ll add next! It’s a testament to his creativity, passion, and dedication, making it an experience worth revisiting every time.",
    name: "Vaibhav Kumar",
    title: "Student Of Panjab University",
    img: "/vaibhav.jpg",
  },
  {
    quote:
      "Gaurav’s website is a dynamic blend of innovation and simplicity. With every visit, there’s something new to discover—whether it’s a fresh feature or a creative touch. It’s a space that showcases his dedication to continuous improvement and reflects his passion for delivering a unique and engaging user experience.",
    name: "Prashant Kumar",
    title: "Student of UIET",
    img: "/prashant.jpg",
  },
  {
    quote:
      "Working together is always an adventure—full of laughs, creative ideas, and unexpected brilliance. There’s never a dull moment, and collaboration feels like a fun, energetic brainstorm session. The positive vibe and open-minded attitude make every project a blast, leaving everyone inspired and ready for the next challenge!",
    name: "Amanpreet Kaur",
    title: "ML Engineer",
    img: "/aman.jpg",
  },
  {
    quote:
      "Collaboration feels effortless—there’s a natural ability to listen, adapt, and bring fresh ideas to the table. Challenges turn into opportunities, and every conversation is filled with thoughtful insights. It’s a blend of professionalism and approachability that makes working together feel motivating and truly rewarding.",
    name: "Saurav Dhiani",
    title: "Intern At DIC",
    img: "/saurav.jpg",
  },
  {
    quote:
      "Your collaborative style mirrors your LinkedIn and GitHub—creative, organized, and professional. You’re positive, patient, and encouraging, transforming challenges into opportunities while fostering a supportive, insightful, and inspiring environment for everyone.",
    name: "Navneet Singh",
    title: "Intern Of Data Analyst",
    img: "/navneet.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern At NIELET(Haridwar)",
    desc: "Served as a Frontend Intern at NIELIT, focusing on developing user-friendly web interfaces, optimizing UI performance, implementing responsive designs, and collaborating with the team to enhance user experience using modern frameworks.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer At Lawyal Tech",
    desc: "Worked as a backend developer at Lawyal Tech, building and maintaining scalable APIs, database management, and ensuring secure, efficient server-side operations using Node.js, Express, and MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "4th Position At IDEATHON",
    desc: "A collaborative innovation event where participants brainstorm and pitch creative solutions to real-world challenges. Encourages teamwork, rapid problem-solving, and idea validation to develop actionable, impactful project concepts.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Hiring Lead at Coding Blocks College Chapter",
    desc: "Served as Hiring Lead at Coding Blocks College Chapter, overseeing recruitment efforts to hire 15-20 students for diverse roles. Conducted resume screenings, interviews, and onboarding processes while collaborating with the team to identify top talent and meet staffing goals efficiently.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/gaurav-prakash-b263a9109/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://leetcode.com/u/GauravPrakashh/",
  },
  {
    id: 3,
    img: "/git.svg",
    link: "https://github.com/iamgaurav12",
  },
];
