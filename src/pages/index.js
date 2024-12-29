import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import styles from "./styles.module.css";

const projectImages = [
  {
    alt: "blog",
    title: "Blog",
    href: "https://shervangharibzade.github.io/blog/",
    image: "/images/blog.png",
  },
  {
    alt: "Movie-App",
    title: "Movie-App",
    href: "https://next14-movie-app.netlify.app/",
    image: "/images/movie-app.png",
  },
  {
    alt: "stock-App",
    title: "Stock-App",
    href: "https://shervangharibzade.github.io/stock-app/",
    image: "/images/stock.png",
  },
  {
    alt: "Youtube-App",
    href: "https://shervangharibzade.github.io/youtube-react/",
    title: "youtube-App",
    image: "/images/youtube.png",
  },
  {
    alt: "Issue-Tracker",
    title: "Issue-Tracker",
    href: "https://issus-tracker-next.netlify.app/",
    image: "/images/IssueTracker.png",
  },
];

const skills = [
  { title: "JavaScript", value: 80 },
  { title: "TypeScript", value: 80 },
  { title: "React.js", value: 80 },
  { title: "Redux", value: 70 },
  { title: "Next.js", value: 70 },
  { title: "Restful-API", value: 70 },
  { title: "React-Query", value: 70 },
  { title: "Zustand", value: 60 },
  { title: "Storybook", value: 50 },
  { title: "HTML5", value: 90 },
  { title: "CSS", value: 80 },
  { title: "Sass", value: 80 },
  { title: "Bootstrap", value: 70 },
  { title: "Material UI", value: 70 },
];

const sections = [
  { title: "Home", index: 0 },
  { title: "Summery", index: 1 },
  { title: "Experience", index: 2 },
  { title: "Projects", index: 3 },
  { title: "Skills", index: 4 },
];
export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(sections[0].title);
  const handleNavigation = (url) => {
    window.open(url, "_blank", "noopener,noreferrer"); // Open URL in a new tab
  };

  return (
    <main className="overflow-hidden">
      <div className="absolute text-white flex bottom-[208px] -left-[162px] -rotate-90">
        {sections.map((i, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(i.index);
              setCurrentSection(sections[i.index].title);
            }}
            className={
              currentSection === i.title
                ? "font-semibold text-blue-900 bg-white px-2 py-1 transition-all duration-300"
                : "font-semibold hover:bg-white hover:text-blue-900 px-2 py-1 transition-all duration-300"
            }
          >
            {i.title}
          </button>
        ))}
      </div>
      <div className="border m-10 border-gray-400">
        <div
          style={{ height: "calc(100vh - 80px)" }}
          className="flex flex-col gap-10 items-center relative overflow-hidden justify-around py-20 px-10 max-w-8xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {currentSection === "Home" && (
              <motion.div
                key="home"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
              >
                <motion.h1
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "anticipate" }}
                  className="text-6xl font-bold text-white"
                >
                  Hossein Gharibzade
                </motion.h1>
                <motion.h2
                  initial={{ x: 500 }}
                  animate={{ x: 0 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    duration: 0.5,
                    ease: "anticipate",
                  }}
                  className="text-5xl text-center font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                >
                  Frontend Developer
                </motion.h2>
                <motion.div
                  initial={{ scale: 0.2 }}
                  animate={{ scale: 1 }}
                  className="mt-24"
                >
                  <h2 className="text-2xl py-5 text-center font-bold text-white">
                    Get in Touch
                  </h2>
                  <div className="flex gap-5 justify-center items-center">
                    <a
                      href="https://github.com/ShervanGharibzade"
                      target="_blank"
                      rel="noopener noreferrer" /* Improves security for external links */
                    >
                      <motion.img
                        whileHover={{ scale: 1.4 }}
                        className="w-10"
                        src="/images/github.png"
                        alt="github icon"
                      />
                    </a>
                    <a
                      href="shervan.dec@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer" /* Improves security for external links */
                    >
                      <motion.img
                        whileHover={{ scale: 1.4 }}
                        className="w-10"
                        src="/images/email.png"
                        alt="email icon"
                      ></motion.img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/h-gharibzadeh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.img
                        whileHover={{ scale: 1.4 }}
                        className="w-10"
                        src="/images/linkedin.png"
                        alt="linkedin icon"
                      ></motion.img>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
            {currentSection === "Summery" && (
              <motion.div
                key="Summery"
                initial={{ x: 0, opacity: 1, scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ x: -200, opacity: 0, scale: 0 }}
                className="max-w-4xl mx-auto mt-16 relative"
              >
                <h2 className="text-white font-bold text-4xl my-5">Summery</h2>
                <p className="mx-auto text-lg font-medium text-gray-400">
                  As a Front‑End Developer{" "}
                  <strong className="text-white">with over 2 years</strong> of
                  experience, I am eager to collaborate with senior developers
                  to create exceptional products and thrive within a dynamic
                  team environment. I bring expertise in technologies{" "}
                  <strong className="text-white">
                    such as React, Redux, Next.js, and Tailwind CSS,
                  </strong>{" "}
                  with a strong focus on building responsive and user‑friendly
                  applications. Dedicated to continuous growth, I am committed
                  to honing my skills through hands‑on experience, embracing new
                  technologies, and adapting to evolving project needs. My
                  passion lies in crafting high‑quality front‑end solutions that
                </p>
                <div className={styles.spin}>
                  <div
                    className={`w-32 h-32 bg-gradient-to-t from-sky-500 via-white/30 to-purple-500 opacity-70  blur-2xl rounded-full ${styles.light}`}
                  ></div>
                </div>
              </motion.div>
            )}
            {currentSection === "Experience" && (
              <motion.div
                key="Experience"
                initial={{ x: 0, opacity: 1, scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="mx-auto relative"
              >
                <h2 className="text-white font-bold text-4xl">
                  Work Experience
                </h2>
                <div className="mx-auto my-16 flex gap-5 items-start px-16">
                  <motion.div
                    initial={{ rotate: 20, scale: 0.5 }}
                    animate={{ rotate: 0, scale: 1 }}
                    class="text-white border p-5 max-h-[455px] overflow-y-auto"
                  >
                    <h3 className="font-bold mb-2 text-lg border-b px-3 py-1">
                      Malltina
                    </h3>
                    <p>
                      <strong>Location:</strong> Iran/Alborz
                    </p>
                    <p>
                      <strong>Role:</strong> Frontend Developer / Full Time
                    </p>
                    <p>
                      <strong>Period:</strong> Jan 2024 ‑ Present
                    </p>

                    <h2 className="font-bold">Responsibilities:</h2>
                    <ul className="text-gray-300">
                      <li>
                        Implementing visual tests for site pages with Storybook
                        and Chromatic.
                      </li>
                      <li>
                        Implemented React Query for optimized data fetching,
                        caching, and synchronization, enhancing application
                        performance and improving user experience.
                      </li>
                      <li>
                        Refactored (250 style pages) project from
                        styled-components to Tailwind CSS and added dark mode.
                      </li>
                      <li>Added multi-language feature to the site.</li>
                    </ul>

                    <div className="flex flex-wrap">
                      <h3 className="font-bold">Technical Skills:</h3>
                      <ul className="flex flex-wrap gap-2 px-2 text-gray-300">
                        <li>Next.js</li>
                        <li>React</li>
                        <li>Emotion-Style</li>
                        <li>Tailwind CSS</li>
                        <li>Git</li>
                        <li>Husky</li>
                        <li>Zustand</li>
                        <li>TypeScript</li>
                        <li>next-intl</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap">
                      <h3 className="font-bold">Soft Skills:</h3>
                      <ul className="flex flex-wrap gap-2 px-2 text-gray-300">
                        <li>Teamwork</li>
                        <li>Time Management</li>
                        <li>Effective Communication</li>
                      </ul>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ rotate: 20, scale: 0.5 }}
                    animate={{ rotate: 0, scale: 1 }}
                    class="text-white border p-5 max-h-[455px] overflow-y-auto"
                  >
                    <h3 className="font-bold mb-2 text-lg border-b px-3 py-1">
                      PiRun
                    </h3>
                    <p>
                      <strong>Location:</strong> USA/San Jose
                    </p>
                    <p>
                      <strong>Role:</strong> Frontend Developer / Full Time
                    </p>
                    <p>
                      <strong>Period:</strong> Jan 2023 ‑ Jan 2024
                    </p>

                    <h2 className="font-bold">Responsibilities:</h2>
                    <ul className="text-gray-300">
                      <li>
                        Enhanced User Interface by creating SVG animations using
                        Framer Motion and Animation.js.
                      </li>
                      <li>Implemented animations with CSS only for headers.</li>
                      <li>
                        Improved site loading latency by using LazyLoad and WebP
                        image format.
                      </li>
                      <li>
                        Implemented and extended code reusability by adding
                        modular components to the codebase.
                      </li>
                      <li>
                        Reduced complexity by implementing Redux for managing
                        state.
                      </li>
                      <li>
                        Developed an intuitive user interface for an AI chatbot
                        using React, Redux, and Tailwind CSS, resulting in a
                        seamless user experience.
                      </li>
                      <li>
                        Optimized website performance by introducing
                        Redux-Persist, increasing efficiency by 50%.
                      </li>
                      <li>
                        Implemented responsive SPA chat with authorization using
                        Firebase.
                      </li>
                      <li>
                        Optimized PWA performance by 50% on desktop and 40% on
                        mobile devices.
                      </li>
                    </ul>

                    <div className="flex flex-wrap">
                      <h3 className="font-bold">Technical Skills:</h3>
                      <ul className="flex flex-wrap text-gray-300 gap-2">
                        <li>React.js</li>
                        <li>Tailwind</li>
                        <li>Framer Motion</li>
                        <li>Firebase</li>
                        <li>Animation.js</li>
                        <li>Leaflet.js</li>
                        <li>Swiper</li>
                        <li>React-Router</li>
                        <li>Git</li>
                        <li>Vite.js</li>
                        <li>MUI</li>
                      </ul>
                    </div>
                    <div className="flex">
                      <h3 className="font-bold">Soft Skills:</h3>
                      <ul className="flex flex-wrap px-2 gap-2">
                        <li>Teamwork</li>
                        <li>Time Management</li>
                        <li>Effective Communication</li>
                      </ul>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ rotate: 20, scale: 0.5 }}
                    animate={{ rotate: 0, scale: 1 }}
                    class="text-white border p-5 max-h-[455px] overflow-y-auto"
                  >
                    <h3 className="font-bold mb-2 text-lg border-b px-3 py-1">
                      Freelancer
                    </h3>
                    <p>
                      <strong>Role:</strong> Frontend Developer
                    </p>

                    <h2 className="font-bold">Responsibilities:</h2>
                    <ul className="text-gray-300">
                      <li>
                        Collaborated with a four-person team to develop a web
                        application for mini shops.
                      </li>
                      <li>
                        Used SSR with Next.js to improve the performance of web
                        applications.
                      </li>
                      <li>
                        Designed and developed user interfaces with React.js and
                        Tailwind CSS.
                      </li>
                      <li>
                        Developed responsive layouts to ensure optimal
                        performance across different devices with Tailwind CSS,
                        MUI, and Sass.
                      </li>
                      <li>
                        Reduced the company's website loading time by optimizing
                        the SPA bundle size, leading to a better user
                        experience.
                      </li>
                    </ul>

                    <div class="flex flex-wrap">
                      <h3 className="font-bold">Technical Skills:</h3>
                      <ul className="flex px-2 gap-2">
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>Sass</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Git</li>
                      </ul>
                    </div>
                    <div className="flex">
                      <h3 className="font-bold">Soft Skills:</h3>
                      <ul className="flex flex-wrap px-2 gap-2">
                        <li>Teamwork</li>
                        <li>Time Management</li>
                        <li>Effective Communication</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            {currentSection === "Projects" && (
              <motion.div
                key="Projects"
                initial={{ x: 0, opacity: 1, scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ x: -200, opacity: 0, scale: 0 }}
                className="max-w-6xl mx-auto relative text-white"
              >
                <h3 className="text-white font-bold text-4xl my-5">Projects</h3>
                <div className="flex-col max-h-[500px] overflow-y-auto overflow-x-hidden pr-5">
                  {projectImages.map((i, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -300 }}
                      whileInView={{ x: 0 }}
                      whileHover={{ scale: 0.9, zIndex: 50 }}
                      className="relative mb-5 flex group"
                      onClick={() => {
                        handleNavigation(i.href);
                      }}
                      style={{
                        flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                      }}
                    >
                      <img src={i.image} alt={i.alt} className="w-1/2" />
                      <div className="bg-blue-950/50 group-hover:bg-blue-700 w-full font-bold text-2xl hover:bg-zinc-800/70 transition-all duration-200 cursor-pointer flex items-center">
                        <div className="p-2">
                          <h2 className="mb-2">{i.title}</h2>
                          <p className="text-gray-300 text-base">
                            Duis laboris id Lorem duis. Eiusmod laboris ullamco
                            commodo adipisicing culpa do excepteur ad cupidatat
                            reprehenderit Lorem voluptate fugiat. Id sit Lorem
                            aliqua enim velit duis deserunt pariatur veniam
                            magna reprehenderit.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            {currentSection === "Skills" && (
              <motion.div
                key="Skills"
                initial={{ x: 0, opacity: 1, scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ x: -200, opacity: 0, scale: 0 }}
                className="max-w-7xl mx-auto text-white"
              >
                <div className="text-white mx-auto">
                  <div className="h-[500px]">
                    <div className="relative right-[400px]">
                      <h2 className="text-white relative z-10 font-bold text-4xl my-5">
                        Skills
                      </h2>
                      {skills.map((s, index) => (
                        <motion.div
                          whileHover={{
                            scale: 1.5,
                            x: 30,
                            textTransform: "uppercase",
                          }}
                          key={index}
                          className="font-bold flex-col my-2 relative text-lg z-10"
                        >
                          {s.title}
                        </motion.div>
                      ))}
                    </div>
                    <div className="min-w-full w-[300px] min-h-[300px] h-[300px]">
                      {skills.map((s, index) => {
                        if (index < 10) {
                          return (
                            <motion.div
                              key={index}
                              style={{
                                width: `${20 * ((index + 8) * 12)}px`,
                                height: `${5 * ((index + 8) * 12)}px`,
                              }}
                              initial={{
                                margin: 0,
                                rotateY: 70,
                                rotateX: 120,
                                opacity: 1,
                                zIndex: 0,
                                scale: 1,
                              }}
                              animate={{
                                scale: 1,
                                rotateY: [120, 100, 120],
                              }}
                              transition={{
                                duration: 10,
                                repeat: Infinity,
                              }}
                              className="w-10 h-10 bg-gradient-to-r from-red-800 via-amber-700 to-red-800 rounded-full absolute right-0 left-0 mx-auto top-10"
                            ></motion.div>
                          );
                        }
                        return [];
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            onClick={() => {
              if (currentIndex > 3) return;
              setCurrentIndex(currentIndex + 1);
              setCurrentSection(sections[currentIndex + 1].title);
            }}
            style={{
              backgroundColor: currentIndex > 3 && "GrayText",
              cursor: currentIndex > 3 && "not-allowed",
            }}
            className="absolute text-white text-4xl bg-white rounded-full right-10 animate-bounce w-fit"
          >
            <img
              src="images/arrowDown.png"
              alt="arrow"
              className="w-10 -rotate-90"
            />
          </div>
          <div
            onClick={() => {
              if (currentIndex === 0) return;
              setCurrentIndex(currentIndex - 1);
              setCurrentSection(sections[currentIndex - 1].title);
            }}
            style={{
              backgroundColor: currentIndex === 0 && "GrayText",
              cursor: currentIndex === 0 && "not-allowed",
            }}
            className="absolute text-white text-4xl bg-white rounded-full left-10 animate-bounce w-fit"
          >
            <img
              src="images/arrowDown.png"
              alt="arrow"
              className="w-10 rotate-90"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
