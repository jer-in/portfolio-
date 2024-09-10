"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

interface ProjectProps {
  position?: string;
  heading: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  href: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { heading, imageUrl, techStack, href } = project;

  return (
    <div className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8">
      <Link href="/" className="rounded-lg overflow-hidden block">
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt={heading}
          className="hover:scale-110 transition-transform duration-700"
        />
      </Link>
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>
        <div className="mt-4 flex flex-col sm:flex-row justify-between gap-5">
          <ProjectTechnologiesMini techStack={techStack} />
          <Link
            href="/"
            className="p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
          >
            <MoveUpRight className="size-5 sm:size-8 text-[#F3F4F3] dark:text-dark-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
