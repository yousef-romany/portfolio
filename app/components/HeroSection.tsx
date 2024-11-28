"use client";
import Image from "next/image";
import { memo } from "react";
import { MdCall } from "react-icons/md";
import { PiArrowRight } from "react-icons/pi";
import imageHero from "@/public/My Image.webp";
const HeroSection = () => {
  return (
    <div className="w-full flex flex-wrap-reverse justify-between lg:pl-[160px] md:pl-[80px] lg:px-0 md:px-0 sm:px-[18px] overflow-hidden">
      {/* left side */}
      <div className="flex flex-col gap-3 pt-[42px] lg:w-[45%] md:w-full sm:w-full">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-14 lg:items-start lg:justify-normal md:items-start md:justify-normal sm:items-center sm:justify-center">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex flex-col gap-5 lg:items-start lg:justify-normal md:items-start md:justify-normal sm:items-center sm:justify-center">
                <h2 className="w-fit text-[#4D4D4D] text-3xl font-medium bg-white px-5 py-3 rounded-lg">
                  Hello There 🤗
                </h2>
                <h1 className="text-[#1A1A1A] text-5xl font-semibold leading-relaxed lg:text-left md:text-left sm:text-center">
                  Yousef Romany Welcome’s You!
                </h1>
              </div>
              <p className="text-[#28292C] text-lg font-medium lg:text-left md:text-left sm:text-center">
                I am a passionate and experienced web designer, dedicated to
                creating visually stunning and highly functional websites.
                Explore my portfolio to see the power of effective design in
                action
              </p>
            </div>
            <div className="flex gap-10">
              <a
                href={"/"}
                className="bg-[#5700FF] gap-1 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Book a Call"
                title="Book a Call"
              >
                <MdCall size={20} />
                Book a Call
              </a>
              <a
                href={"/portfolio"}
                className="bg-transparent flex justify-center items-center gap-2 text-[#1A1A1A] text-lg font-medium"
                aria-label="View Portfolio"
                title="View Portfolio"
              >
                View Portfolio
                <PiArrowRight size={20} />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap bg-white px-10 py-12  rounded-l-lg rounded-r-lg gap-y-10 sm:rounded-lg">
            <div className="lg:w-1/3 md:w-1/3 sm:w-full flex flex-col justify-center items-center">
              <h1 className="text-[#333333] font-bold text-6xl gap-0 flex">
                55 <span className="text-[#5700FF]">+</span>{" "}
              </h1>
              <h2 className="text-[#4D4D4D] font-medium text-lg">
                Completed Projects
              </h2>
            </div>
            <div className="lg:w-1/3 md:w-1/3 sm:w-full flex flex-col justify-center items-center">
              <h1 className="text-[#333333] font-bold text-6xl gap-0 flex">
                20 <span className="text-[#5700FF]">+</span>{" "}
              </h1>
              <h2 className="text-[#4D4D4D] font-medium text-lg">
                Happy Customers
              </h2>
            </div>
            <div className="lg:w-1/3 md:w-1/3 sm:w-full flex flex-col justify-center items-center">
              <h1 className="text-[#333333] font-bold text-6xl gap-0 flex">
                08 <span className="text-[#5700FF]">+</span>{" "}
              </h1>
              <h2 className="text-[#4D4D4D] font-medium text-lg">
                Years of Experience
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex justify-center items-center lg:w-[55%] md:w-full sm:w-full">
        <Image
          src={imageHero}
          loading="lazy"
          alt="hero image"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};
export default memo(HeroSection);