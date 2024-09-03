import { portfolioProjects } from "../_lib/constants";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="py-32" id="work">
      <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
        Projects
      </h2>

      <div className="mt-8 space-y-5">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.heading} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
