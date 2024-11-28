import { memo } from "react";

const Benefits = () => {
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
          Benefits{" "}
        </h2>
        <p className="text-base text-[#4D4D4D] md:text-lg">
          By choosing my web design service, you{"'"}ll enjoy the following
          benefits
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-6">
        <div className="bg-[#F7F6F3] flex flex-col gap-6 p-10 lg:col-span-3 md:col-span-3 sm:col-span-1 rounded-lg">
          <h1 className="text-[#333333] font-semibold text-2xl">
            Customized Designs Tailored to Your Brand
          </h1>
          <p className="text-[#333333]">
            I understand the importance of creating a unique and memorable brand
            identity. By collaborating closely with you, I ensure that your
            website reflects your brand{"'"}s personality, values, and
            objectives. The result is a customized design that sets you apart
            from the competition and resonates with your target audience.
          </p>
        </div>
        <div className="bg-[#F7F6F3] flex flex-col gap-6 p-10 lg:col-span-3 md:col-span-3 sm:col-span-1 rounded-lg">
          <h1 className="text-[#333333] font-semibold text-2xl">
            Creative Excellence that Captivates Visitors
          </h1>
          <p className="text-[#333333]">
            With a keen eye for aesthetics and a passion for creativity, I excel
            in designing visually stunning and engaging websites. By combining
            beautiful visuals, captivating typography, and strategic use of
            color, I create an immersive and impactful user experience. Your
            website will leave a lasting impression on visitors, enhancing your
            brand{"'"}s credibility and professionalism.
          </p>
        </div>

        <div className="bg-[#F7F6F3] flex flex-col gap-6 p-10 lg:col-span-2 md:col-span-2 sm:col-span-1 rounded-lg">
          <h1 className="text-[#333333] font-semibold text-2xl">
            User-Centric Approach for Optimal Experience
          </h1>
          <p className="text-[#333333]">
            I prioritize user experience (UX) design, placing your visitors at
            the center of the design process. By conducting in-depth research
            and employing user testing techniques, I ensure that your website is
            intuitive, easy to navigate, and seamlessly guides users towards
            their goals. The result is a satisfying user journey that increases
            engagement and conversions.
          </p>
        </div>
        <div className="bg-[#F7F6F3] flex flex-col gap-6 p-10 lg:col-span-2 md:col-span-2 sm:col-span-1 rounded-lg">
          <h1 className="text-[#333333] font-semibold text-2xl">
            Mobile-Friendly Designs for Broad Accessibilit
          </h1>
          <p className="text-[#333333]">
            In today{"'"}s mobile-dominated landscape, having a responsive
            website is crucial. I specialize in creating mobile-friendly designs
            that adapt flawlessly across different devices and screen sizes.
            Your website will look and perform beautifully, whether accessed
            from a desktop, smartphone, or tablet, ensuring that you reach and
            engage your audience effectively.
          </p>
        </div>
        <div className="bg-[#F7F6F3] flex flex-col gap-6 p-10 lg:col-span-2 md:col-span-2 sm:col-span-1 rounded-lg">
          <h1 className="text-[#333333] font-semibold text-2xl">
            Expertise in Cutting-Edge Technologies
          </h1>
          <p className="text-[#333333]">
            With a strong command of HTML, CSS, JavaScript, and other front-end
            technologies, I possess the technical skills to bring your design
            concepts to life. From seamless animations to interactive elements,
            I leverage the latest web technologies to enhance user engagement
            and create a dynamic user experience.
          </p>
        </div>
      </div>
    </div>
  );
};
export default memo(Benefits);
