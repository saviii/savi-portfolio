import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Savi Singh",
  initials: "SS",
  url: "https://savi.fyi",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Product leader with 10+ years' experience driving digital consumer products end-to-end. Passionate about generative AI and prompt engineering.",
  summary:
    "Product leader with 10+ years' experience driving digital consumer products end-to-end. Passionate about generative AI, prompt engineering, and conversational AI, with a track record of integrating AI-driven solutions to create intuitive, impactful experiences.",
  avatarUrl: "/me.png",
  skills: [
    "Shipping Product",
    "SQL",
    "Product Strategy",
    "User Research",
    "Prompt Creation",
    "Jupyter",
    "Figma",
    "JIRA",
    "Canva",
    "Program Management",
    "Product Design",
    "A/B Testing"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://savi.medium.com/", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "savipablas@gmail.com",
    tel: "510-415-8913",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saviii",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saviii/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SaviPabla",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:savipablas@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Yahoo Finance",
      href: "https://finance.yahoo.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Senior Product Manager",
      logoUrl: "/yahoo.png",
      start: "Dec 2024",
      end: "Present",
      description: `
* Driving core platform initiatives including taxonomy, entity recognition, and follow systems to improve personalization and engagement. 
* Creating AI-driven user experiences that simplify complex financial news and portfolio data using large language models and semantic understanding. 
* Launched Yahoo Finance’s highest-performing newsletter (Breaking News Alerts) and increased Daily Movers open rates by 46% by leading end-to-end development of both products. 
* Shipped foundational components for newsletter and design systems used across Yahoo Finance surfaces.
`,
    },
    {
      company: "SmartNews",
      href: "https://www.smartnews.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Senior Product Manager",
      logoUrl: "/smartnews.png",
      start: "Jun 2022",
      end: "Nov 2024",
      description: `
* Launched GenAI-powered ranking system, boosting article relevance and Day 7 retention by 7%.
* Overhauled the push notification system, resulting in an 8% lift in revenue.
* Shipped LLM-powered scoring system to improve content ranking and personalization.
* Led GenAI integration into the ranking system to enhance content quality and engagement.
`,
    },
    {
      company: "Medium",
      href: "https://medium.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Product Manager, Mobile Apps",
      logoUrl: "/medium.png",
      start: "Jul 2019",
      end: "Mar 2022",
      description: `
* Led the comprehensive redesign of the Medium Mobile app on iOS and Android, collaborating closely with design, engineering, and marketing teams to enhance the user interface and experience from the ground up.
* Developed and executed the GTM strategy for the launch of an improved response experience across mobile and web platforms, leading to a 12% increase in user comments and significantly boosting community engagement and participation.
`,
    },
    {
      company: "Evie Labs (acquired by Medium)",
      href: "#",
      badges: [],
      location: "Palo Alto, CA",
      title: "Product Manager",
      logoUrl: "/evie.png",
      start: "Nov 2016",
      end: "Jul 2019",
      description:
        "Managed the #1 rated Android Launcher, Evie, scaling DAUs from 30k to 400k."
    },
    {
      company: "DirecTV",
      href: "https://www.directv.com",
      badges: [],
      location: "Los Angeles, CA",
      title: "Senior QA Engineer",
      logoUrl: "/directv.png",
      start: "Jun 2013",
      end: "Oct 2016",
      description:
        "Led QA team of 8 engineers on key projects like NFL Sunday Ticket and March Madness."
    },
  ],
  education: [
    {
      school: "Arizona State University",
      href: "https://www.asu.edu",
      degree: "Business Administration, Management and Operations",
      logoUrl: "/asu.png",
      start: "",
      end: "",
    },
    {
      school: "Chabot College",
      href: "https://www.chabotcollege.edu",
      degree: "Business Administration, Management and Operations",
      logoUrl: "/chabot.png",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "AI-Powered Ranking System",
      href: "https://www.smartnews.com/",
      dates: "2022 - 2023",
      active: true,
      description:
        "Led the integration of a generative AI-powered ranking system for news articles, significantly improving content relevance and user retention metrics.",
      technologies: [
        "AI/ML",
        "Product Management",
        "User Research",
        "Data Analytics",
        "Prompt Engineering",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.smartnews.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Content Understanding System",
      href: "https://www.smartnews.com/",
      dates: "2023 - 2024",
      active: true,
      description:
        "Developed an AI-powered content understanding system that analyzes news stories for characteristics like sensationalism, clickbait, violence, and quality. This sophisticated analysis directly informed content ranking algorithms, enhancing overall news quality for users.",
      technologies: [
        "AI/ML",
        "Content Analysis",
        "Natural Language Processing",
        "Product Management",
        "Data Science",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.smartnews.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Breaking News Alerts",
      href: "https://finance.yahoo.com/",
      dates: "2024 - Present",
      active: true,
      description:
        "Launched Yahoo Finance's highest-performing newsletter and increased Daily Movers open rates by 46% by leading end-to-end development of both products.",
      technologies: [
        "Product Management",
        "Email Marketing",
        "A/B Testing",
        "User Engagement",
      ],
      links: [
        {
          type: "Website",
          href: "https://finance.yahoo.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Foundational Components",
      href: "https://finance.yahoo.com/",
      dates: "2024 - Present",
      active: true,
      description:
        "Shipped foundational components for newsletter and design systems used across Yahoo Finance surfaces.",
      technologies: [
        "Product Management",
        "Design Systems",
        "Platform Strategy",
      ],
      links: [
        {
          type: "Website",
          href: "https://finance.yahoo.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },


    {
      title: "Threaded Responses at Medium",
      href: "https://blog.medium.com/take-conversations-deeper-with-threaded-responses-1d1ec6e475e3",
      dates: "2020 - 2021",
      active: false,
      description:
        "Led the development and launch of Threaded Responses, a major feature that transformed how users engage with content on Medium. This improvement allowed for more focused and organized conversations, significantly enhancing the commenting experience.",
      technologies: [
        "Product Management",
        "UX Design",
        "User Engagement",
        "Feature Launch",
        "Cross-functional Leadership",
      ],
      links: [
        {
          type: "Website",
          href: "https://blog.medium.com/take-conversations-deeper-with-threaded-responses-1d1ec6e475e3",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Mobile App Redesign",
      href: "https://blog.medium.com/a-relational-medium-on-mobile-1c9c2111301d",
      dates: "2019 - 2022",
      active: false,
      description:
        "Led the comprehensive redesign of mobile applications on iOS and Android, enhancing user experience and significantly increasing engagement metrics.",
      technologies: [
        "Product Management",
        "UX/UI Design",
        "Mobile Development",
        "User Testing",
        "Go-To-Market Strategy",
      ],
      links: [
        {
          type: "Website",
          href: "https://blog.medium.com/a-relational-medium-on-mobile-1c9c2111301d",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI Product Workshop",
      dates: "2023",
      description: "Participated in hands-on workshop focused on integrating AI solutions into product development lifecycle.",
      location: "San Francisco, CA",
      image: "/placeholder.png",
      links: [],
    },
    {
      title: "Product Management Summit",
      dates: "2022",
      description: "Collaborated with cross-functional teams to design and pitch innovative product solutions.",
      location: "New York, NY",
      image: "/placeholder.png",
      links: [],
    },
    {
      title: "Mobile UX Design Sprint",
      dates: "2021",
      description: "Led a team to reimagine mobile user experiences with a focus on engagement and retention metrics.",
      location: "Remote",
      image: "/placeholder.png",
      links: [],
    },
  ],
} as const;
