import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Savi Singh",
  initials: "SS",
  url: "https://savisingh.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Product leader with 10+ years' experience driving digital consumer products end-to-end. Passionate about generative AI and prompt engineering.",
  summary:
    "Product leader with 10+ years' experience driving digital consumer products end-to-end. Passionate about generative AI, prompt engineering, and conversational AI, with a track record of integrating AI-driven solutions to create intuitive, impactful experiences.",
  avatarUrl: "/me.png",
  skills: [
    "Design Thinking",
    "Product Strategy",
    "Go-To-Market",
    "User Story Writing",
    "User Research",
    "Advanced SQL",
    "Google Analytics",
    "Redash",
    "Tableau",
    "Excel",
    "Prompt Engineering",
    "Jupyter",
    "JIRA",
    "Figma",
    "Canva",
    "Wireframing",
    "Notion",
    "Mailchimp",
    "Cursor AI"
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
      description:
        "Leading the Core Product Platform team to build and maintain foundational services used across multiple Yahoo Finance products, improving system reliability and scalability. Directing efforts to build out taxonomy and follow signals in Yahoo Finance."
    },
    {
      company: "SmartNews",
      href: "https://www.smartnews.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Senior Product Manager",
      logoUrl: "/smartnews.png",
      start: "June 2022",
      end: "Present",
      description:
        "Initiated and led the integration of a Gen AI-powered ranking system in SmartNews, significantly improving article relevance and boosting Day 7 retention by 7%. Developed product vision and roadmap to overhaul the push notification system, resulting in an 8% increase in revenue. Developed and productionized advanced AI prompts for content scoring, leveraging generative models to evaluate each article on key attributes to inform ranking decisions. Led a cross-functional team of 20+ engineers, designers, and data scientists to build, launch, and manage SmartNews 2.0."
    },
    {
      company: "Medium",
      href: "https://medium.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Product Manager, Mobile Apps",
      logoUrl: "/medium.png",
      start: "July 2019",
      end: "March 2022",
      description:
        "Led the comprehensive redesign of the Medium Mobile app on iOS and Android, collaborating closely with design, engineering, and marketing teams to enhance the user interface and experience from the ground up. Developed and executed the GTM strategy for the launch of an improved response experience across mobile and web platforms, leading to a 12% increase in user comments and significantly boosting community engagement and participation."
    },
    {
      company: "Evie Labs (acquired by Medium)",
      href: "#",
      badges: [],
      location: "Palo Alto, CA",
      title: "Product Manager",
      logoUrl: "/evie.png",
      start: "November 2016",
      end: "July 2019",
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
      start: "June 2013",
      end: "October 2016",
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
      href: "https://techcrunch.com/2021/09/15/news-aggregator-smartnews-raises-230-million-valuing-its-business-at-2-billion/",
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
          href: "https://techcrunch.com/2021/09/15/news-aggregator-smartnews-raises-230-million-valuing-its-business-at-2-billion/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Push Notification System",
      href: "https://techcrunch.com/2021/09/15/news-aggregator-smartnews-raises-230-million-valuing-its-business-at-2-billion/",
      dates: "2022 - 2023",
      active: true,
      description:
        "Developed product vision and roadmap to overhaul the push notification system, resulting in an 8% increase in revenue through improved user engagement.",
      technologies: [
        "Product Strategy",
        "Notification Systems",
        "User Engagement",
        "Data Analytics",
        "Personalization",
      ],
      links: [
        {
          type: "Website",
          href: "https://techcrunch.com/2021/09/15/news-aggregator-smartnews-raises-230-million-valuing-its-business-at-2-billion/",
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
