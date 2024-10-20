import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaJava, FaDocker, FaAws, FaBitbucket, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql, SiNestjs, SiPostgresql, SiJunit5 } from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        icon: FaReact,
      },
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        icon: FaNodeJs,
      },
      {
        name: "Nest JS",
        icon: SiNestjs,
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "Postgresql",
        icon: SiPostgresql,
      },
      {
        name: "JUnit",
        icon: SiJunit5,
      },
    ],
  },
  {
    title: "Infraestrutura",
    skills: [
      {
        name: "AWS",
        icon: FaAws,
      },
      {
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "Bitbucket",
        icon: FaBitbucket,
      },
      {
        name: "Github",
        icon: FaGithub,
      },
    ],
  },
];
