import { ChevronRight } from "lucide-react";
import ShinyButton from "./ui/ShinyButton";

const HeroSection = () => {
  return (
    <>
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div
        className="min-h-screen flex flex-col items-center justify-center relative"
        id="#home"
      >
        <div className="flex flex-col justify-center items-center relative z-10">
          <p className="uppercase font-bold text-sm tracking-widest">
            Based In Serbia
          </p>
          <h1 className="text-7xl font-bold text-center max-w-5xl leading-tight tracking-wide text-stone-200">
            Quality Design &{" "}
            <span className="text-primary">Web Development</span> Synergy
          </h1>
          <p className="pt-5 pb-8 text-lg text-white/70">
            Hi, I&apos;m Andrija, I create intuitive, visually stunning and
            highly functional web applications.
          </p>
          <ShinyButton icon={<ChevronRight />}>See My Work</ShinyButton>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
