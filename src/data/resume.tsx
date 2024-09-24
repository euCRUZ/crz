import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Giovanni Cruz",
  initials: "GC",
  url: "https://dillion.io",
  location: "Brazil",
  locationLink: "https://www.google.com/maps/place/saopaulo",
  description:
    "Software Engineer Entrepreneur. I love building things and helping people.",
  summary:
    "At the start of 2023, I quit my job as a architecture intern to go fulltime into building and scaling websites and softwares. Nowdays, [I am graduating in Software Analysis and Development.](/#education), PROJECT, and [college projects](/#hackathons).",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    // "Next.js",
    "Typescript",
    "Node.Js",
    "Pocketbase",
    "Pockethost",
    "JavaScript",
    "Python",
    "Java",
  ],
  skills_cloud: [
    "React",
    // "Next.js",
    "Typescript",
    "Nodedotjs",
    "Pocketbase",
    "Pockethost",
    "Python",
    "Java",
    "JavaScript",
    "git",
    "github",
    "figma", 
    "visualstudiocode",
    "html5",
    "css3",
    "tailwindcss",
    "vercel",
    "bootstrap",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "giovannicruzvinhedo@gmail.com",
    tel: "+5519997172825",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/euCRUZ",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eugiovannicruz/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:giovannicruzvinhedo@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Piva Seguros",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/piva.png",
      start: "Aug. 2024",
      end: "Still",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Loja Mikonos",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/mikonos.jpg",
      start: "Aug 2024",
      end: "Sep. 2024",
      description:
        "",
    },
    {
      company: "Facchini Advogados",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/facchini.svg",
      start: "",
      end: "March 2024",
      description:
        "",
    }
  ],
  education: [
    {
      school: "FIAP",
      href: "https://www.fiap.com.br/",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/fiap.jpg",
      start: "2023",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
  ],
} as const;
