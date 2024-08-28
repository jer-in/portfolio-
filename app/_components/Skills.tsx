const Skills = () => {
  return (
    <div className="relative z-10 py-24">
      <div className="space-y-4 mb-10">
        <h1 className="text-5xl font-bold text-stone-200">
          Technologies i currently work with
        </h1>
        <p className="max-w-3xl text-white/70">
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of main
          technologies
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="p-3 bg-[#0ACF83]/20 rounded-lg w-fit">
          <img src="/figma-logo.svg" alt="figma logo" className="size-6" />
        </div>
        <div className="p-3 bg-[#3178C6]/20 rounded-lg w-fit">
          <img src="/typescript.svg" alt="typescript logo" className="size-6" />
        </div>
        <div className="p-3 bg-[#61DAFB]/20 rounded-lg w-fit">
          <img src="/react.svg" alt="react logo" className="size-6" />
        </div>
        <div className="p-3 bg-white/15 rounded-lg w-fit">
          <img src="/nextjs.svg" alt="nextjs logo" className="size-6" />
        </div>
        <div className="p-3 bg-[#0EA5E9]/20 rounded-lg w-fit">
          <img src="/tailwind.svg" alt="tailwind logo" className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
