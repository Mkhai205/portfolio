import { Code, GraduationCap } from "lucide-react";

export const Socials = [
    {
        name: "Github",
        src: "/icons/github-mark-white.svg",
        link: "https://github.com/Mkhai205",
    },
    {
        name: "LinkedIn",
        src: "/icons/linkedIn.svg",
        link: "https://www.linkedin.com/in/nguyen-viet-manh-khai-417a38312",
    },
    {
        name: "Email",
        src: "/icons/email.png",
        link: "mailto:kaka205.dev@gmail.com",
    },
    {
        name: "Resume",
        src: "/icons/resume.png",
        link: "/NguyenVietManhKhai_SoftwareDeveloper_2025.pdf",
    },
];

export const Sections = [
    {
        name: "About Me",
        id: "about-me",
    },
    {
        name: "Skills",
        id: "skills",
    },
    {
        name: "Experiences",
        id: "education-and-experiences",
    },
    {
        name: "Projects",
        id: "projects",
    },
    {
        name: "Contact",
        id: "contact",
    },
];

export const Frontend_techs = [
    {
        tech_name: "Html_5",
        image: "/images/frontend/html.png",
    },
    {
        tech_name: "Css",
        image: "/images/frontend/css.png",
    },
    {
        tech_name: "Javascript",
        image: "/images/frontend/js.png",
    },
    {
        tech_name: "Typescript",
        image: "/images/frontend/ts.png",
    },
    {
        tech_name: "React",
        image: "/images/frontend/react.png",
    },
    {
        tech_name: "Tailwind_CSS",
        image: "/images/frontend/tailwind.png",
    },
    {
        tech_name: "Nextjs",
        image: "/images/frontend/next.png",
    },
    {
        tech_name: "Shacdcn",
        image: "/images/frontend/shadcn.jpg",
    },
    {
        tech_name: "Redux",
        image: "/images/frontend/redux.png",
    },
    {
        tech_name: "React_query",
        image: "/images/frontend/reactquery.png",
    },
    {
        tech_name: "Stripe",
        image: "/images/frontend/stripe.webp",
    },
];

export const Backend_techs = [
    {
        tech_name: "Nodejs",
        image: "/images/backend/nodejs.png",
    },
    {
        tech_name: "Express",
        image: "/images/backend/express.png",
    },
    {
        tech_name: "Nestjs",
        image: "/images/backend/Nest.js.png",
    },
    {
        tech_name: "Mongodb",
        image: "/images/backend/mongodb.png",
    },
    {
        tech_name: "Fire_base",
        image: "/images/backend/firebase.png",
    },
    {
        tech_name: "PostgreSQL",
        image: "/images/backend/postgre.png",
    },
    {
        tech_name: "MySQL",
        image: "/images/backend/mysql.png",
    },
    {
        tech_name: "Redis",
        image: "/images/backend/redis.png",
    },
    {
        tech_name: "RabbitMQ",
        image: "/images/backend/rabbitmq.png",
    },
    {
        tech_name: "Socket.io",
        image: "/images/backend/socket.io.png",
    },
    {
        tech_name: "Prisma",
        image: "/images/backend/prisma.webp",
    },
    {
        tech_name: "Spring_Boot",
        image: "/images/backend/java-spring.png",
    },
    {
        tech_name: "Java",
        image: "/images/backend/java.png",
    },
    {
        tech_name: "C++",
        image: "/images/backend/c++.png",
    },
    {
        tech_name: "Python",
        image: "/images/backend/python.png",
    },
];

export const Tools = [
    {
        tech_name: "Git",
        image: "/images/tools/git.png",
    },
    {
        tech_name: "GitHub",
        image: "/images/tools/github.png",
    },
    {
        tech_name: "Postman",
        image: "/images/tools/postman.png",
    },
    {
        tech_name: "Visual Studio Code",
        image: "/images/tools/vscode.png",
    },
    {
        tech_name: "Docker",
        image: "/images/tools/docker.png",
    },
    {
        tech_name: "AWS",
        image: "/images/tools/AWS.png",
    },
    {
        tech_name: "Figma",
        image: "/images/tools/figma.png",
    },
];

export const Education_and_experiences = [
    {
        title: "Computer Science",
        job: "Bachelor of Computer Science, National Economics University",
        date: "2023-Present",
        icon: <GraduationCap />,
        color: "bg-amber-500",
        contents: [
            "Studying core subjects in computer science including algorithms, data structures, databases, and software engineering.",
            "Participating in university research projects and programming competitions.",
            "Developing skills in Java, JavaScript, Node.js, and React through coursework and personal projects.",
        ],
    },
    {
        title: "International Collegiate Programming Contest",
        job: "Contestant, ICPC VietNam National – Team NEU.ONE",
        date: "November-2024",
        icon: <Code />,
        color: "bg-green-500",
        contents: [
            "Represented National Economics University in the ICPC national programming contest.",
            "Collaborated with team members to solve complex algorithmic problems under time constraints.",
            "Enhanced problem-solving skills in dynamic programming, graph theory, and combinatorics.",
        ],
    },
    {
        title: "Vietnam Student Informatics Olympiad 2024",
        job: "Third Prize in the Vietnam Student Informatics Olympiad 2024",
        date: "December-2024",
        icon: <Code />,
        color: "bg-blue-500",
        contents: [
            "Competed against top students nationwide in advanced programming and algorithm challenges.",
            "Achieved third prize, demonstrating strong analytical and coding capabilities.",
            "Gained valuable experience in competitive programming strategies and time management.",
        ],
    },
];

export interface IProject {
    id: string;
    name: string;
    overview: string;
    description: string;
    type: "Personal" | "Team";
    technologies: string[];
    features: string[];
    images: string[];
    codeUrl: string;
    deployUrl: string;
}

export const PROJECTS: IProject[] = [
    {
        id: "chat-app",
        name: "Real-Time Chat Application",
        overview:
            "Scalable real-time chat application built with microservices architecture and modern web technologies",
        description:
            "A full-stack real-time messaging platform featuring microservices architecture for enhanced scalability and maintainability. Built with TypeScript and Next.js frontend, this application delivers seamless instant messaging with modern UI/UX design. The project demonstrates expertise in distributed system design, real-time communication protocols, and modern web development practices.",
        type: "Personal",
        technologies: [
            "Next.js",
            "Express.js",
            "TypeScript",
            "Node.js",
            "React",
            "TailwindCSS",
            "Shadcn/ui",
            "Socket.IO",
            "MongoDB",
            "Redis",
            "RabbitMQ",
            "Cloudinary",
            "JWT",
        ],
        features: [
            "Real-time Messaging with Socket.IO and typing indicators and online status",
            "Image Sharing with automatic optimization via Cloudinary",
            "User Authentication with secure JWT-based system",
            "Message Status with read receipts and seen tracking",
            "Microservices Architecture with distributed backend services",
            "Email Notifications using RabbitMQ message queue",
        ],
        images: [
            "/images/projects/chat-app/chat-app-login.png",
            "/images/projects/chat-app/chat-app-verify-code.png",
            "/images/projects/chat-app/chat-app-chat1.png",
            "/images/projects/chat-app/chat-app-chat2.png",
            "/images/projects/chat-app/chat-app-chat3.png",
        ],
        codeUrl: "https://github.com/Mkhai205/chat-app",
        deployUrl: "",
    },
    {
        id: "instagram-clone",
        name: "Instagram Clone",
        overview:
            "A feature-rich social media platform built with modern web technologies, replicating Instagram's core functionality with seamless user experience.",
        description:
            "Instagram Clone is a comprehensive full-stack social media application that recreates the essential features of Instagram. Built with Next.js 14 and TypeScript, this project demonstrates advanced web development skills including real-time interactions, secure authentication, and scalable database design. The application features a modern, responsive interface powered by Tailwind CSS and Radix UI components, delivering an authentic social media experience.",
        type: "Personal",
        technologies: [
            "Next.js",
            "React",
            "PostgreSQL",
            "TypeScript",
            "Tailwind CSS",
            "NextAuth.js",
            "Prisma ORM",
            "UploadThing",
            "React Hook Form",
            "Zod",
        ],
        features: [
            "User Authentication & Authorization with NextAuth.js",
            "Post Creation & Management with photo uploads and captions",
            "Social Interactions including like, comment, and save posts",
            "Follow System with real-time follower/following updates",
            "User Profiles with customizable bio and post galleries",
            "Real-time Updates with dynamic content and interactions",
        ],
        images: [
            "/images/projects/instagram/instagram-login.png",
            "/images/projects/instagram/instagram-home-dark.png",
            "/images/projects/instagram/instagram-home-light.png",
            "/images/projects/instagram/instagram-create-post1.png",
            "/images/projects/instagram/instagram-create-post2.png",
            "/images/projects/instagram/instagram-my-profile.png",
            "/images/projects/instagram/instagram-friend-profile.png",
            "/images/projects/instagram/instagram-post.png",
            "/images/projects/instagram/instagram-settings.png",
        ],
        codeUrl: "https://github.com/Mkhai205/instagram-clone",
        deployUrl: "https://instagram-clone-psi-henna.vercel.app/",
    },
    {
        id: "task-manager",
        name: "Task Manager System",
        overview:
            "Empowering teams with intelligent task orchestration and real-time collaboration",
        description:
            "A comprehensive task management system designed to streamline workflow efficiency and enhance team collaboration. Built with modern full-stack technologies, this platform provides robust administrative controls and intuitive user experiences. The application features role-based access control, real-time progress tracking, and comprehensive reporting capabilities to optimize productivity across organizations.",
        type: "Personal",
        technologies: [
            "React",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Axios",
            "Mongoose",
            "JWT",
            "Multer",
            "ExcelJS",
            "bcryptjs",
        ],
        features: [
            "Role-Based Access Control with separate admin and user dashboards",
            "Interactive Task Management with priority levels and status tracking",
            "Real-Time Progress Monitoring with dynamic progress calculation",
            "Advanced Dashboard Analytics with comprehensive charts and statistics",
            "File Attachment System with secure storage integration",
            "Export & Reporting with detailed Excel reports generation",
        ],
        images: [
            "/images/projects/task-manager/task-manager-login.png",
            "/images/projects/task-manager/task-manager-signup.png",
            "/images/projects/task-manager/task-manager-admin-dashboard.png",
            "/images/projects/task-manager/task-manager-admin-create-task.png",
            "/images/projects/task-manager/task-manager-admin-manage-tasks.png",
            "/images/projects/task-manager/task-manager-admin-team-members.png",
            "/images/projects/task-manager/task-manager-member-dashboard.png",
        ],
        codeUrl: "https://github.com/Mkhai205/task-manager",
        deployUrl: "",
    },
    {
        id: "weather-app",
        name: "Weather App",
        overview:
            "A comprehensive weather application with real-time data, multi-language support, and interactive visualizations.",
        description:
            "A comprehensive weather application with real-time data, multi-language support, and interactive visualizations for accurate weather monitoring and planning.",
        type: "Personal",
        technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "OpenWeatherMap API",
            "Leaflet Maps",
            "i18next",
        ],
        features: [
            "Real-time Weather Data with live updates",
            "5-Day Weather Forecast with hourly breakdowns",
            "Interactive Weather Map using Leaflet",
            "Air Quality Monitoring with AQI tracking",
            "UV Index Tracking with safety recommendations",
            "Seamless theme switching for comfortable viewing in any lighting condition",
            "Multilingual Support (English & Vietnamese)",
        ],
        images: [
            "/images/projects/weather-app/weather-app-laptop-dark.png",
            "/images/projects/weather-app/weather-app-laptop-light.png",
            "/images/projects/weather-app/weather-app-laptop-dark-vi.png",
        ],
        codeUrl: "https://github.com/Mkhai205/weather-app",
        deployUrl: "",
    },
];
