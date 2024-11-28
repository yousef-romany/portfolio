import Image from "next/image";
import { memo } from "react";
import work from "@/public/work1.webp";
import { PiArrowRight } from "react-icons/pi";

const MyWorks = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl leading-none tracking-tight text-[#333333] font-semibold sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
          </span>{" "}
          My Works{" "}
        </h2>
        <p className="text-base text-[#4D4D4D] md:text-lg">
          Here{"'"}s what some of my satisfied clients have to say about my work
        </p>
      </div>
      <div className="flex flex-col w-full h-fit gap-12 items-center">
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-6 items-center">
          <div className="bg-[#F7F6F3] flex flex-col gap-6 p-10 lg:col-span-2 md:col-span-2 sm:col-span-1 h-full">
            <h1 className="text-[#333333] font-semibold text-2xl">
              Z - Aura Perfume Website Design
            </h1>
            <Image src={work} alt="work" className="w-[412px] h-auto" />

            <div className="flex gap-5 overflow-x-scroll">
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
            </div>
          </div>
          <div className="bg-[#F7F6F3] flex flex-col gap-6 p-10 lg:col-span-2 md:col-span-2 sm:col-span-1 h-full">
            <h1 className="text-[#333333] font-semibold text-2xl">
              Forhelp Charity Website Design
            </h1>
            <Image src={work} alt="work" className="w-[412px] h-auto" />

            <div className="flex gap-5 overflow-x-scroll">
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
            </div>
          </div>
          <div className="bg-[#F7F6F3] flex flex-col gap-6 p-10 lg:col-span-2 md:col-span-2 sm:col-span-1 h-full">
            <h1 className="text-[#333333] font-semibold text-2xl">
              Skill Bridge Website Design
            </h1>
            <Image src={work} alt="work" className="w-[412px] h-auto" />

            <div className="flex gap-5 overflow-x-scroll">
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
              <Image
                src={work}
                alt="work"
                className="max-w-[88px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <a
          href={"/portfolio"}
          className="bg-[#5700FF] gap-1 w-fit inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          aria-label="Book a Call"
          title="Book a Call"
        >
          View All Projects
          <PiArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};
export default memo(MyWorks);
