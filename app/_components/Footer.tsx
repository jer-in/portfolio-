import Link from "next/link";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import ShinyButton from "./ui/ShinyButton";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center antialiased relative border border-dark-300 rounded-xl mb-5">
      <div>
        <div className="space-y-8 p-10">
          <h1 className="text-5xl font-bold max-w-2xl leading-[110%] relative z-10">
            Like what you see? Reach out{" "}
            <Link
              href="mailto:andrijawebd@gmail.com"
              className="text-primary hover:text-primary/80 border-b-2 border-primary hover:border-primary/80 transition-colors duration-200"
            >
              via email
            </Link>{" "}
            to collaborate!
          </h1>

          <ShinyButton>Schedule call</ShinyButton>
        </div>

        <div className="mt-16 p-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <div className="space-y-2.5">
            <h3 className="text-xl font-bold relative z-10">
              Andrija Djordjevic
            </h3>
            <p className="text-stone-200/70 relative z-10">
              &copy; 2024 | All rights reserved.
            </p>
          </div>

          <div className="flex justify-between gap-0 sm:gap-16">
            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-base sm:text-lg font-semibold">Navigate</li>
              <li className="text-white/50 hover:text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white/50 hover:text-white">
                <Link href="#work">Work</Link>
              </li>
              <li className="text-white/50 hover:text-white">
                <Link href="#about">About</Link>
              </li>
              <li className="text-white/50 hover:text-white">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>

            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Projects</li>
              <li className="text-white/50 hover:text-white">
                <Link href="/">Shoptidy</Link>
              </li>
              <li className="text-white/50 hover:text-white">
                <Link href="#work">SocialSphere</Link>
              </li>
              <li className="text-white/50 hover:text-white">
                <Link href="#about">NextCut</Link>
              </li>
              <li className="text-white/50 hover:text-white">
                <Link href="#contact">NextFood</Link>
              </li>
            </ul>

            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Socials</li>
              <li className="text-white/50 hover:text-white">
                <Link href="/">LinkedIn</Link>
              </li>
              <li className="text-white/50 hover:text-white">
                <Link href="#work">Github</Link>
              </li>
              <li className="text-white/50 hover:text-white">
                <Link href="#about">Instagram</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BackgroundBeams className="hidden sm:flex" />
    </div>
  );
};

export default Footer;
