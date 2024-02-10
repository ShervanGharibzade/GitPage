import React from "react";

export default function Contact({ setNameSection }) {
  return (
    <footer
      style={{ zIndex: 5 }}
      onMouseEnter={() => setNameSection("Contact")}
      className="w-full max-w-6xl mx-auto relative my-32 rounded-xl bg-black/30">
      <div className="text-white py-32">
        <h2 className="text-4xl uppercase text-center title-Header font-bold">
          Contact me on
        </h2>
        <div className="flex justify-center gap-20 py-16 items-center">
          <img
            className="cursor-pointer scale-100 hover:scale-125 transition-all duration-300"
            width={80}
            src="images/git.png"
            alt="github icon"
          />
          <img
            className="cursor-pointer scale-100 hover:scale-125 transition-all duration-300"
            width={80}
            src="/images/link.webp"
            alt="linkedin  icon"
          />
          <img
            className="cursor-pointer scale-100 hover:scale-125 transition-all duration-300"
            width={80}
            src="/images/email.webp"
            alt="email icon"
          />
        </div>
      </div>
    </footer>
  );
}
