import {
  FaDesktop,
  FaCode,
  FaMobileAlt,
  FaGitAlt,
  FaSearch,
  FaPaintBrush,
  FaLink,
  FaTools,
  FaDatabase,
} from "react-icons/fa";
import { MdDesignServices, MdOutlineWeb } from "react-icons/md";
import { memo } from "react";

export interface SkillsDataType {
  id: number;
  icon: unknown;
  title: string;
  p: string;
}

const SkillsData = [
  {
    id: 1,
    icon: <FaDesktop size={25} />,
    title: "Accessibility Standards",
    p: "Knowledge of WCAG guidelines to ensure websites are accessible to users with disabilities.",
  },
  {
    id: 2,
    icon: <FaTools size={25} />,
    title: "Agile Methodology",
    p: "Knowledge of agile processes and workflows for collaborative and iterative development.",
  },
  {
    id: 3,
    icon: <FaCode size={25} />,
    title: "Animation and Interactivity",
    p: "Experience with CSS animations and JavaScript libraries like GSAP to create engaging user experiences.",
  },
  {
    id: 4,
    icon: <FaDatabase size={25} />,
    title: "Back-End Integration",
    p: "Understanding of APIs and back-end technologies to integrate front-end with server-side data.",
  },
  {
    id: 5,
    icon: <MdDesignServices size={25} />,
    title: "CMS Platforms",
    p: "Experience in working with content management systems like WordPress, Drupal, or custom-built solutions.",
  },
  {
    id: 6,
    icon: <FaLink size={25} />,
    title: "Cross-Browser Compatibility",
    p: "Ability to ensure websites function seamlessly across all major browsers and devices.",
  },
  {
    id: 7,
    icon: <FaDesktop size={25} />,
    title: "Design Systems",
    p: "Ability to create and maintain design systems for consistency across projects.",
  },
  {
    id: 8,
    icon: <FaCode size={25} />,
    title: "Front-End Frameworks",
    p: "Experience with frameworks like React.js or Vue.js for building dynamic and modern UIs.",
  },
  {
    id: 9,
    icon: <FaDesktop size={25} />,
    title: "HTML & CSS Mastery",
    p: "Expertise in crafting semantic, accessible HTML and advanced CSS for clean, maintainable code.",
  },
  {
    id: 10,
    icon: <FaCode size={25} />,
    title: "JavaScript Development",
    p: "Proficiency in writing efficient and scalable JavaScript for interactive web applications.",
  },
  {
    id: 11,
    icon: <FaMobileAlt size={25} />,
    title: "Mobile-Friendly Optimization",
    p: "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
  {
    id: 12,
    icon: <FaTools size={25} />,
    title: "Performance Optimization",
    p: "Skills in optimizing website loading speed and performance using best practices and tools.",
  },
  {
    id: 13,
    icon: <FaTools size={25} />,
    title: "Problem Solving and Debugging",
    p: "Strong skills in identifying and resolving issues in code and design efficiently.",
  },
  {
    id: 14,
    icon: <FaDesktop size={25} />,
    title: "Responsive Web Design",
    p: "Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.",
  },
  {
    id: 15,
    icon: <FaSearch size={25} />,
    title: "Search Engine Optimization (SEO)",
    p: "Ability to implement SEO best practices to improve website visibility and ranking on search engines.",
  },
  {
    id: 16,
    icon: <FaPaintBrush size={25} />,
    title: "Typography and Font Pairing",
    p: "Understanding of effective typography choices to improve readability and visual appeal.",
  },
  {
    id: 17,
    icon: <FaDesktop size={25} />,
    title: "User Experience - UX Design",
    p: "Understanding of user behavior and psychology to design seamless user experiences that meet user needs and goals.",
  },
  {
    id: 18,
    icon: <FaPaintBrush size={25} />,
    title: "User Interface - UI Design",
    p: "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
  },
  {
    id: 19,
    icon: <FaGitAlt size={25} />,
    title: "Version Control (Git)",
    p: "Experience in using Git for version control and collaboration in team environments.",
  },
  {
    id: 20,
    icon: <MdOutlineWeb size={25} />,
    title: "Web Design Principles",
    p: "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
  {
    id: 21,
    icon: <FaPaintBrush size={25} />,
    title: "Wireframing and Prototyping",
    p: "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
  },
];

const CreativeSkills = () => {
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
          Creative Skills{" "}
        </h2>
        <p className="text-base text-[#4D4D4D] md:text-lg">
          As a web designer, I possess a diverse set of skills and expertise to
          bring your web design visions to life
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
        {SkillsData.map((item: SkillsDataType) => (
          <div
            key={item.id}
            className="flex flex-col rounded-xl bg-white justify-start items-center gap-6 p-10"
          >
            <div className="bg-[#5700FF] p-3 rounded-xl text-white">
              {item.icon}
            </div>
            <h1 className="text-[#333333] text-xl font-semibold text-center">
              {item.title}
            </h1>
            <p className="text-[#333333] text-lg text-center">{item.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(CreativeSkills);
