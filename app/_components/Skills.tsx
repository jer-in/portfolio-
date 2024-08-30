import { techCardsItems } from "../_lib/constants";
import TechCard from "./TechCard";

const Skills = () => {
  return (
    <div className="relative z-10 py-16 sm:py-24">
      <div className="space-y-4 mb-10">
        <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          Current technologies
        </h1>
        <p className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70">
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4">
        {techCardsItems.map((cardItem) => (
          <TechCard key={cardItem.name} cardInfo={cardItem} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
