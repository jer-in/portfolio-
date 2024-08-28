import { ChevronRight, Github, Linkedin, Youtube } from "lucide-react";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";

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
        <div className="flex gap-5 flex-col justify-center items-center relative z-10">
          <h1 className="text-7xl font-bold text-center max-w-5xl leading-tight tracking-wide text-stone-200">
            Quality Design &{" "}
            <span className="text-primary">Web Development</span> Synergy
          </h1>
          <p className="text-lg text-white/70">
            Hi, I&apos;m Andrija, I create intuitive, visually stunning and
            highly functional web applications.
          </p>
          <ShinyButton icon={<ChevronRight />}>See My Work</ShinyButton>
        </div>

        <div className="flex items-center gap-2.5 absolute bottom-5 left-0">
          <Link
            href="https://github.com/andrijaweb"
            className="p-2.5 bg-primary/10 hover:bg-primary/20 block rounded-md"
          >
            <Github className="size-5 text-primary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/andrija-djordjevic-a7b794282/"
            className="p-2.5 bg-primary/10 hover:bg-primary/20 block rounded-md"
          >
            <Linkedin className="size-5 text-primary" />
          </Link>
          <Link
            href="https://github.com/andrijaweb"
            className="p-2.5 bg-primary/10 hover:bg-primary/20 block rounded-md"
          >
            <Youtube className="size-5 text-primary" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
