import { motion } from "framer-motion";

export default function Menu({ nameSection }) {
  return (
    <nav className="fixed  top-1/2 -translate-y-1/2 w-32 z-50">
      <div className="text-zinc-300 grid gap-3">
        <motion.h2
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.1 }}
          whileHover={{
            scale: 1.2,
            color: "white",
            transition: {
              duration: 0.1,
            },
          }}
          className="w-40 flex gap-3 cursor-pointer">
          <div
            className={`${
              nameSection === "Header" ? "bg-white" : ""
            } border-2 border-white rounded-full w-5 h-5 transition-all duration-500`}></div>
          Summery
        </motion.h2>
        <motion.h2
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.2,
          }}
          whileHover={{
            scale: 1.2,
            color: "white",
            transition: {
              duration: 0.1,
            },
          }}
          className="w-40 flex gap-3 cursor-pointer">
          <div
            className={`${
              nameSection === "Projects" ? "bg-white" : ""
            } border-2 border-white rounded-full w-5 h-5 transition-all duration-200`}></div>
          Projects
        </motion.h2>
        <motion.h2
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.3,
          }}
          whileHover={{
            scale: 1.2,
            color: "white",
            transition: {
              duration: 0.1,
            },
          }}
          className="w-40 flex gap-3 cursor-pointer">
          <div
            className={`${
              nameSection === "MyInfo" ? "bg-white" : ""
            } border-2 border-white rounded-full w-5 h-5 transition-all duration-200`}></div>
          My Info
        </motion.h2>
        <motion.h2
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            scale: 1.2,
            color: "white",
            transition: {
              duration: 0.1,
            },
          }}
          className="w-40 flex gap-3 cursor-pointer">
          <div
            className={`${
              nameSection === "Contact" ? "bg-white" : ""
            } border-2 border-white rounded-full w-5 h-5 transition-all duration-200`}></div>
          Contact
        </motion.h2>
      </div>
    </nav>
  );
}
