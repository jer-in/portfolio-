"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";
import { motion } from "framer-motion";

interface ProjectProps {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { id, heading, imageUrl, techStack } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#F3F4F3] dark:bg-dark-200 rounded-xl p-4 md:p-6 lg:p-8 flex flex-col h-full"
    >
      {/* Image Container */}
      <Link 
        href={`/work/${id}`} 
        className="relative w-full aspect-video rounded-lg overflow-hidden mb-6"
      >
        <div className="relative w-full h-full group">
          <Image
            src={imageUrl}
            alt={heading}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
            priority
          />
        </div>
      </Link>

      {/* Content Container */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 line-clamp-2">
          {heading}
        </h3>
        
        <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          {/* Tech Stack */}
          <div className="flex-grow">
            <ProjectTechnologiesMini techStack={techStack} />
          </div>
          
          {/* Action Button */}
          <Link
            href={`/work/${id}`}
            className="inline-flex items-center justify-center p-2 md:p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg self-start sm:self-auto"
          >
            <MoveUpRight className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-[#F3F4F3] dark:text-dark-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;