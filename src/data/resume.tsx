import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  SquareArrowOutUpRight,
  BriefcaseBusiness,
} from "lucide-react";

export const DATA = {
  name: "Lokeswara Rao Katari",
  initials: "LK",
  url: "https://lokeshkatari.xyz",
  location: "India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer / New CS grad. I love building things and helping people. Very active on Twitter.",
  summary:
    "A software engineer crafting digital experiences with modern technologies.",
  avatarUrl: "/me.png",
  skills: {
    programmingLanguages: ["Tyescript", "Javascript", "Python", "Go", "Java"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    Cloud: ["Docker", "Kubernetes", "Git", "podman"],
    frameworks: ["React", "Next.js", "Node.js", "Express.js", "tailwindcss"],
    technologies: [
      "AWS",
      "GCP",
      "Azure",
      "Firebase",
      "Distriuted Systems",
      "kafka",
      "RabbitMQ",
    ],
  },
  navbar: [
    { href: "/#hero", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/#projects", icon: BriefcaseBusiness, label: "Work" },
    {
      href: "https://drive.google.com/file/d/1GHz957cTkQRNRbYP9l01ns0ebImAjBe6/view?usp=sharing",
      icon: SquareArrowOutUpRight,
      label: "Resume",
    },
    // { href: "#projects", icon: BriefcaseBusiness, label: "Work" },
  ],
  contact: {
    email: "lokeshkatari921@outlook.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lokesh-katari",
        icon: Icons.github,

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/lokesh-katari",
        icon: Icons.linkedin,

        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/lokeshkatari921",
        icon: Icons.x,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Rompit Technologies",
      href: "https://rompit.org",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/rompit.png",
      start: "Jun 2024",
      end: "Dec 2024",
      description: "worked on core projects.",
    },
    {
      company: "BikerBuds",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Node.js Developer Intern",
      logoUrl: "/bikerbuds.avif",
      start: "Nov 2023",
      end: "Dec 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Turbin3 Labs",
      href: "https://turbin3.com/",
      degree: "Solana - Q4",
      logoUrl: "/turbin3.png",
      start: "",
      end: "",
    },
    {
      school: "GMR Institute of Technology",
      href: "https://gmrit.edu.in",
      degree: "B.Tech - Computer Science and Engineering",
      logoUrl: "/gmrit.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "AP Residential Junior College",
      href: "#",
      degree: "Intermediate",
      logoUrl: "/aprjc.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Code Realm",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "CodeRealm is a Docker-Based Code Execution Platform that empowers users to submit, execute, and evaluate code and test cases securely. It's designed to be a dynamic and secure environment for code evaluation and execution, with a focus on system design principles and scalability.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Kuberentes",
        "Shadcn UI",
        "Redis",
        "Kafka",
        "Grpc",
        "Docker",
        "tailwindcss",
        "Node js",
        "Go",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/lokesh-katari/Code-judge-Online",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/coderealm.mp4",
    },
    {
      title: "GoSurge",
      href: "https://github.com/lokesh-katari/GoSurge",
      dates: "June 2023 - Present",
      active: true,
      description:
        "GoSurge is a simple HTTP benchmarking and load testing tool written in Go. It takes advantage of Go's concurrency, supports various HTTP methods (GET, POST, PUT, DELETE), and can read URLs from files for making concurrent requests.",
      technologies: ["Docker", "Go"],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/gosurge.mp4",
    },
    {
      title: "VerifEd",
      href: "https://tal3i-kyaaa-aaaag-alfrq-cai.icp0.io/",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "Built a decentralized educational and certification platform with AI-powered proctoring to ensure tamper-proof certification issuance stored on the blockchain.",
      technologies: [
        "React.js",
        "Typescript",
        "ICP Network",
        "Motoko",
        "TailwindCSS",
        "Shadcn UI",
        "Socket Io",
      ],
      links: [
        {
          type: "Website",
          href: "https://tal3i-kyaaa-aaaag-alfrq-cai.icp0.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videoplayback-verifed.mp4",
    },
    {
      title: "LunaCred",
      href: "https://lunacred.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a Referral-Based Credibility Staking Protocol aimed at incentivizing honest referrals with dynamic rewards or penalties.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Solidity",
        "Moonbeam Network",
      ],
      links: [
        {
          type: "Website",
          href: "https://lunacred.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lunacred.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "OneBlock+ Polkadot Hackathon",
      dates: "November 23rd - 25th, 2024",
      location: "Bangkok, thailand",
      description:
        "Developed a Referral-Based Credibility Staking Protocol aimed at incentivizing honest referrals with dynamic rewards or penalties..",
      image:
        "https://miro.medium.com/v2/resize:fit:2400/1*YKY5yPoVDZgpzaO--kCt3w.jpeg",

      links: [],
    },
    {
      title: "Dymension Rollapp Draft Hackathon",
      dates: "November 23rd - 25th, 2024",
      location: "online",
      description: "Developed a decentralised 3d gaming platform .",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoM2wFiK14OaMiPsC2ygxxDSTB4R6ZgB2FA&s",
      links: [],
    },
  ],
} as const;
