"use client";
import { cn } from "@/lib/utils";
import { memo, useState } from "react";
import { FaStar } from "react-icons/fa";
const Item = ({ title, children }: { title: string; children: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className={cn(
          "flex items-center justify-between w-full p-4 rounded-lg bg-[#EEEBE5] focus:outline-none",
          isOpen ? "rounded-b-none" : null
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 bg-[#EEEBE5] rounded-b-lg">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
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
          Frequently Asked Questions{" "}
        </h2>
        <p className="text-base text-[#4D4D4D] md:text-lg">
          Here are answers to some common questions
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-8 items-start">
        <div className="bg-[#F7F6F3] p-10 space-y-6 lg:col-span-5 md:col-span-5 sm:col-span-1 h-full rounded-lg">
          <Item title="Can you work with clients remotely?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="How long does it typically take to complete a web design project?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Do you offer website maintenance services?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Can you optimize my website for search engines?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Can you integrate third-party tools or platforms into my website?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </div>
        <div className="bg-[#F7F6F3] flex flex-col gap-6 p-10 lg:col-span-3 md:col-span-3 sm:col-span-1 h-fit rounded-lg">
          <div className="bg-[#5700FF] p-4 rounded-xl w-fit">
            <FaStar color="white" size={25} />
          </div>
          <h1 className="text-[#333333] font-semibold text-2xl">
            Still have any Questions ?
          </h1>
          <p className="text-lg text-[#4D4D4D]">
            Let{"'"}s collaborate to create an exceptional website that sets you
            apart from the competition. Contact me today to discuss your web
            design needs and bring your digital vision to life!
          </p>
          <a
            href={"/Contact"}
            className="bg-[#5700FF] w-fit gap-1 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Book a Call"
            title="Book a Call"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};
export default memo(FAQs);
