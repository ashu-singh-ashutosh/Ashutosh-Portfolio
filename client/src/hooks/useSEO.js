import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://niladri1.vercel.app";

const PAGE_META = {
  "/": {
    title: "Ashutosh Singh - Full Stack Developer | MERN Stack Expert",
    description:
      "Ashutosh Singh — Full Stack Developer specializing in MERN stack, React.js, Node.js, Next.js and TypeScript. Based in Delhi, India.",
  },
  "/about": {
    title: "About - Ashutosh Singh | Full Stack Developer",
    description:
      "Learn about Ashutosh Singh — MCA Graduate, Full Stack Developer with 3+ internships and 10+ projects.",
  },
  "/projects": {
    title: "Projects - Ashutosh Singh | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Ashutosh Singh using React.js, Node.js, MongoDB, Next.js and TypeScript.",
  },
  "/skills": {
    title: "Skills - Ashutosh Singh | React, Node.js, MERN Stack",
    description:
      "Technical skills of Ashutosh Singh — React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/experience": {
    title: "Experience - Ashutosh Singh | Full Stack Developer",
    description:
      "Professional experience of Ashutosh Singh including internships in full stack web development.",
  },
  "/education": {
    title: "Education - Ashutosh Singh | B.Tech Computer Science",
    description:
      "Educational background of Ashutosh Singh — Masters Of Computers with 8.86 CGPA.",
  },
  "/certificates": {
    title: "Certificates - Ashutosh Singh | Developer Certifications",
    description:
      "Professional certifications and achievements of Ashutosh Singh in web development and cloud technologies.",
  },
  "/contact": {
    title: "Contact - Ashutosh Singh | Hire a Full Stack Developer",
    description:
      "Get in touch with Ashutosh Singh for freelance projects, job opportunities or collaborations.",
  },
};

const FALLBACK_META = {
  title: "Ashutosh Singh - Full Stack Developer",
  description:
    "Portfolio of Ashutosh Singh — Full Stack Developer specializing in MERN stack.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
