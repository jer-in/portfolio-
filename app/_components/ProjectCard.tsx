"use client";

import Image from "next/image";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
  position?: string;
  heading: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  href: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const {
    position = "left",
    heading,
    description,
    imageUrl,
    techStack,
    href,
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={`p-5 rounded-xl border border-dark-700 dark:border-dark-400 grid ${
        position === "right"
          ? "lg:grid-cols-[3fr_1fr]"
          : "lg:grid-cols-[1.5fr_3fr]"
      } gap-5`}
    >
      <div
        className={`flex flex-col gap-5 ${
          position === "right" ? "order-2" : ""
        }`}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          {heading}
        </h3>
        <p className="text-sm md:text-base dark:text-stone-200/80 leading-5 md:leading-7">
          {description}
        </p>
        <ProjectTechnologiesMini techStack={techStack} />
        <div className="mt-auto">
          <Link
            href={href}
            target="_blank"
            className="block text-center hover:text-stone-200 text-sm sm:text-base border border-dark-400 hover:bg-dark-300 transition-colors duration-200 py-2 sm:py-2.5 rounded-full font-medium"
          >
            Source Code
          </Link>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt="portfolio showcase"
          className="hover:scale-110 transition-transform duration-700 cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
