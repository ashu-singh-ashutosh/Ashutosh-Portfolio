import typescriptPdf from "@/assets/files/certificates_pdf/TypeScript.pdf";
import javascriptPdf from "@/assets/files/certificates_pdf/javascript.pdf";
import java from "@/assets/files/certificates_pdf/java.pdf";
import React from "@/assets/files/certificates_pdf/React_Tailwind.pdf";
import be10x from "@/assets/files/certificates_pdf/be10x.pdf";
import Mongodb from "@/assets/files/certificates_pdf/Mongodb_Postgresql.pdf";
import Nodejs from "@/assets/files/certificates_pdf/Nodejs_Express.pdf";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Typescript Programming",
    issuer: "Geekster",
    date: "12nd June 2025",
    link: typescriptPdf,
    description:
      "Covers TypeScript fundamentals, including syntax, types. Includes practical examples and real-world applications.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    id: 2,
    title: "Nodejs & ExpressJs",
    issuer: "KodeKloud",
    date: "10th September 2024",
    link: Nodejs,
    description:
      "Covers backend development with Node.js and Express.js, including REST API development, routing, middleware, authentication, error handling, and integration with databases.",
    skills: ["Node.js",
    "Express.js",
    "REST API",
    "Routing",
    "Middleware",
    "Authentication",
    "Error Handling",
    "Backend Development",],
  },
  {
    id: 3,
    title: "JavaScript Programming",
    issuer: "HackerRank",
    date: "18th February 2025",
    link: javascriptPdf,
    description:
      "Validates JavaScript fundamentals, including syntax, functions, and problem-solving.",
    skills: ["JavaScript", "ES6", "Asynchronous Programming"],
  },
  {
    id: 4,
    title: "Mongodb & Postgresql",
    issuer: "KodeKloud",
    date: "10th December 2025",
    link: Mongodb,
    description:
      "Covers MongoDB fundamentals, document-based data modeling, CRUD operations, querying, indexing, and database management for modern web applications and Covers PostgreSQL fundamentals, relational database concepts, SQL queries, table relationships, joins, constraints, and efficient data management.",
    skills: [
    "MongoDB",
    "NoSQL",
    "CRUD Operations",
    "Data Modeling",
    "MongoDB Queries",
    "Indexing",
    "PostgreSQL",
    "SQL",
    "Relational Databases",
    "CRUD Operations",
    "Joins",
    "Database Design",
  ],
  },
  {
    id: 5,
    title: "Java Programming",
    issuer: "HackerRank",
    date: "10th March 2026",
    link: java,
    description:
      "Covers Java programming fundamentals, object-oriented programming, exception handling, collections, and core concepts used to develop robust and maintainable applications.",
    skills: ["Java","OOP" , "Collections" , "Exception Handling" ,"JDBC" , "Problem Solving", "Functions", "Data Structures"],
  },
  {
    id: 6,
    title: "React & Tailwind Css",
    issuer: "Forage",
    date: "10th January 2026",
    link: React,
    description:
      "Hands-on workshop covering React.js fundamentals, component-based development, hooks, state management, and Tailwind CSS for building responsive and modern user interfaces.",
    skills: [
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "Components",
  "React Hooks",
  "Responsive Design",
  "UI Development",
],
  },
  {
    id: 7,
    title: "AI Tools & Cladue Workshop",
    issuer: "Be10x",
    date: "11th August 2026",
    link: be10x,
    description:
       "Covers practical applications of AI tools and Claude AI, including prompt engineering, AI-assisted productivity, content generation, problem-solving, and workflow automation.",
    skills: [
  "Generative AI",
  "Claude AI",
  "AI Tools",
  "Prompt Engineering",
  "AI Automation",
  "AI-Assisted Development",
],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 group-hover:translate-x-2 transition-transform"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
