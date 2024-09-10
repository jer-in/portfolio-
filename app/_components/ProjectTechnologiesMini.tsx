const ProjectTechnologiesMini = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2.5 max-w-sm">
      {techStack.map((tech) => (
        <p
          key={tech}
          className="text-xs text-white/60 hover:text-white font-medium bg-dark-300 hover:bg-dark-300/10 dark:hover:bg-dark-400 border border-dark-400 transition-colors duration-200 w-fit rounded-md py-2 px-4"
        >
          {tech}
        </p>
      ))}
    </div>
  );
};

export default ProjectTechnologiesMini;
