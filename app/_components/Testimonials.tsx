import { Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="mb-32 space-y-10">
      <div className="flex justify-center items-center gap-2.5">
        <Star fill="#3B82F6" strokeWidth={0} className="size-12" />
        <Star fill="#3B82F6" strokeWidth={0} className="size-12" />
        <Star fill="#3B82F6" strokeWidth={0} className="size-12" />
        <Star fill="#3B82F6" strokeWidth={0} className="size-12" />
        <Star fill="#3B82F6" strokeWidth={0} className="size-12" />
      </div>

      <p className="mx-auto text-3xl font-medium italic leading-10 text-center max-w-[68.625rem]">
        “Working with Andrija was a very smooth experience from start to finish.
        He not only brings strong technical skills to front-end development, but
        his attention to detail and commitment to delivering pixel-perfect
        designs made a huge difference in our project. He is enthusiastic in
        suggesting improvements. Always ready to answer questions or provide
        updates. If you&apos;re looking for a reliable developer who brings
        creativity and efficiency to the table, Andrija is the right person!”
      </p>

      <div className="flex items-center justify-center gap-4">
        <div className="rounded-full overflow-hidden inline-block">
          <Image
            src="/imgs/avatars/Alex.jpg"
            alt="avatar"
            width={60}
            height={60}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Alex Finn</h3>
          <p className="text-sm opacity-70">CEO at DigitalityLab</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-1">
        <button className="w-12 h-1 bg-primary rounded-full"></button>
        <button className="w-12 h-1 bg-[#333333] rounded-full"></button>
        <button className="w-12 h-1 bg-[#333333] rounded-full"></button>
        <button className="w-12 h-1 bg-[#333333] rounded-full"></button>
      </div>
    </div>
  );
};

export default Testimonials;
