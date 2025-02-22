"use client";
import { routes, routeTpes } from "@/constant/main";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { memo, useState } from "react";
import { MdCall } from "react-icons/md";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  return (
    <div className="border-b-2">
      <div className="px-4 py-5 h-[100px] flex justify-between items-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between w-full">
          <h1 className="text-[#5700FF] text-xl font-semibold">
            Yousef Romany
          </h1>
          <ul className="hidden items-center space-x-8 lg:flex">
            {routes.map((item: routeTpes) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  aria-label={"path" + item.path}
                  title={item.path}
                  className={cn(
                    "font-medium text-[#33333] tracking-wide duration-200",
                    path == item.path ? "bg-white p-6 rounded-lg" : null
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={"/"}
                className="bg-[#5700FF] gap-1 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Book a Call"
                title="Book a Call"
              >
                <MdCall size={20} />
                Book a Call
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-[#5700FF] text-xl font-semibold">
                        Yousef Romany
                      </h1>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {routes.map((item: routeTpes) => (
                        <li key={item.id}>
                          <a
                            href={item.path}
                            aria-label={"path" + item.path}
                            title={item.path}
                            className={cn(
                              "font-medium text-[#33333] tracking-wide duration-200",
                              path == item.path
                                ? null
                                : null
                            )}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href={"/"}
                          className="bg-[#5700FF] gap-1 w-full inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Book a Call"
                          title="Book a Call"
                        >
                          <MdCall size={20} />
                          Book a Call
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(NavBar);
