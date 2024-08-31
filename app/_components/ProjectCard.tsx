import Image from "next/image";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

interface ProjectProps {
  position?: string;
  heading: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { position = "left", heading, description, imageUrl } = project;

  return (
    <div
      className={`p-5 rounded-xl border border-dark-400 grid ${
        position === "right" ? "grid-cols-[3fr_1.5fr]" : "grid-cols-[1.5fr_3fr]"
      }  gap-5`}
    >
      <div
        className={`flex flex-col gap-5 ${position === "right" && "order-2"}`}
      >
        <h3 className="text-3xl font-semibold">{heading}</h3>
        <p className="text-stone-200/80 leading-7">{description}</p>
        <ProjectTechnologiesMini />
        <div className="mt-auto">
          <button className="w-full text-center border border-dark-400 hover:bg-dark-300 transition-colors duration-200 py-2.5 rounded-full font-medium">
            Source Code
          </button>
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
    </div>
  );
};

export default ProjectCard;
