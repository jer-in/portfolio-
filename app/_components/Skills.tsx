import Image from "next/image";

const Skills = () => {
  return (
    <div className="relative z-10 py-32">
      <div className="space-y-4 mb-10">
        <h1 className="text-5xl font-bold text-stone-200">
          Technologies i currently work with
        </h1>
        <p className="max-w-3xl text-white/70">
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-4 items-center justify-between gap-4">
        <div className="flex gap-5 p-2.5 rounded-xl bg-dark-200">
          <div className="p-3 bg-[#0ACF83]/20 rounded-xl">
            <Image
              src="/imgs/logos/figma-logo.svg"
              width={1000}
              height={1000}
              alt="figma logo"
              className="size-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium">Figma</h4>
            <p className="text-white/70 text-sm">Design Tool</p>
          </div>
        </div>
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl bg-dark-200">
          <div className="p-3 bg-[#3178C6]/20 rounded-lg w-fit">
            <Image
              src="/imgs/logos/typescript.svg"
              width={1000}
              height={1000}
              alt="typescript logo"
              className="size-6"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium">TypeScript</h4>
            <p className="text-white/70 text-sm">JavaScript but better</p>
          </div>
        </div>
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl bg-dark-200">
          <div className="p-3 bg-[#61DAFB]/20 rounded-lg w-fit">
            <Image
              src="/imgs/logos/react.svg"
              width={1000}
              height={1000}
              alt="react logo"
              className="size-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium">React</h4>
            <p className="text-white/70 text-sm">JavaScript Library</p>
          </div>
        </div>
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl bg-dark-200">
          <div className="p-3 bg-white/15 rounded-lg w-fit">
            <Image
              src="/imgs/logos/nextjs.svg"
              width={1000}
              height={1000}
              alt="nextjs logo"
              className="size-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium">NextJS</h4>
            <p className="text-white/70 text-sm">React framework</p>
          </div>
        </div>
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl bg-dark-200">
          <div className="p-3 bg-[#0EA5E9]/20 rounded-lg w-fit">
            <Image
              src="/imgs/logos/tailwind.svg"
              width={1000}
              height={1000}
              alt="tailwind logo"
              className="size-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium">Tailwind</h4>
            <p className="text-white/70 text-sm">CSS framework</p>
          </div>
        </div>
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl bg-dark-200">
          <div className="p-3 bg-[#F1502F]/20 rounded-lg w-fit">
            <Image
              src="/imgs/logos/git.svg"
              width={1000}
              height={1000}
              alt="git logo"
              className="size-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium">Git</h4>
            <p className="text-white/70 text-sm">Revision control system</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
