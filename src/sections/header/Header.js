import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Header({ setSectionIndex }) {
  return (
    <header
      onMouseEnter={() => setSectionIndex(0)}
      className="h-screen flex items-center justify-center py-32"
    >
      <div style={{ zIndex: 2 }} className="text-white">
        <motion.h1
          initial={{
            y: -100,
          }}
          animate={{
            y: 0,
          }}
          className="pb-5"
        >
          <p className="text-center text-4xl title-Header">
            HOSSEIN GHARIBZADE
          </p>
          <br />
          <p className="color-animation text-6xl text-center font-semibold">
            <Typewriter
              words={["FRONT END DEVELOPER"]}
              loop={3}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </motion.h1>
        <motion.p
          initial={{
            height: 0,
          }}
          animate={{
            height: "auto",
          }}
          transition={{ duration: 1 }}
          className="text-lg w-[80%] text-zinc-400 mx-auto overflow-hidden"
        >
          As a junior Front‑End developer{" "}
          <span className="text-white font-semibold">
            with +2 year of experience
          </span>
          , I am eager to work with senior developers to create exceptional
          products and grow within a team. I have experience with technologies{" "}
          <span className="text-white font-semibold">
            such as React, Redux, Next.js, Tailwind CSS, and using APIs with
            Axios
          </span>
          . I am dedicated to sharpening my skills through hands‑on experience
          and am open to learning new technologies and adapting to changing
          conditions. I am passionate about front‑end development and the
          implementation of responsive applications.
        </motion.p>
      </div>
      <div className="w-full main-animation">
        <div className="box-1"></div>
        <div className="box-2"></div>
      </div>
    </header>
  );
}
