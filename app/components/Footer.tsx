import { cn } from "@/lib/utils";
import { memo } from "react";
import { padding } from "../page";
import { routes, routeTpes } from "@/constant/main";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={cn(
        "w-full flex flex-col pt-[60px] pb-[16px] border-t-2 gap-8 flex-wrap",
        padding
      )}
    >
      <div className="w-full flex justify-between items-center flex-wrap gap-y-5">
        <h1 className="text-[#5700FF] text-xl font-semibold h-fit w-fit">
          Yousef Romany
        </h1>
        <ul className="items-center space-x-8 flex h-fit w-fit">
          {routes?.map((item: routeTpes) => (
            <li key={item.id}>
              <a
                href={item.path}
                title={item.path}
                aria-label={"path" + item.path}
                className={cn(
                  "font-medium text-[#33333] tracking-wide duration-200"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="items-center space-x-8 flex !h-fit !w-fit">
          <li className="bg-[#5700FF] p-3 !h-fit !w-fit rounded-lg">
            <a
              href={"https://www.linkedin.com/in/yousef-romany-09a2a5233/"}
              title={"Linked In Link"}
              aria-label={"Linked In Link"}
            >
              <FaLinkedin size={25} color="white" />
            </a>
          </li>
          <li className="bg-[#5700FF] p-3 !h-fit !w-fit rounded-lg">
            <a
              href={"https://x.com/yousefromany527"}
              title={"Twitter In Link"}
              aria-label={"Twitter In Link"}
            >
              <FaTwitter size={25} color="white" />
            </a>
          </li>
          <li className="bg-[#5700FF] p-3 !h-fit !w-fit rounded-lg">
            <a
              href={"https://github.com/yousef-romany"}
              title={"Github In Link"}
              aria-label={"Github In Link"}
            >
              <FaGithub size={25} color="white" />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="border rounded-lg flex justify-between items-center flex-wrap p-6 gap-10">
          <div className="text-[#4D4D4D] font-medium text-lg flex gap-2 items-center">
            <IoMdMail size={18} color="#5700FF" /> yousefromany527@gmail.com
          </div>

          <div className="text-[#4D4D4D] font-medium text-lg flex gap-2 items-center">
            <MdCall size={18} color="#5700FF" /> +91 91813 23 2309
          </div>

          <div className="text-[#4D4D4D] font-medium text-lg flex gap-2 items-center">
            <FaMapMarkerAlt size={18} color="#5700FF" /> Egypt
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <h1 className="text-[#808080] font-medium">
          Copyright © 2023 Jeffery Cannon. All rights reserved.
        </h1>
      </div>
    </div>
  );
};
export default memo(Footer);
