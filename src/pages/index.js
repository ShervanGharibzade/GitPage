import { useRef, useState } from "react";
import Header from "../sections/header/Header";
import Menu from "./nav";
import Projects from "../sections/Projects/Projects";
import MyInfo from "../sections/my-info/MyInfo";
import Contact from "../sections/contact/Contact";

export default function Index() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const ref = useRef(Array(4).fill(null));

  function scrollOnPage(index) {
    setSectionIndex(index);
    console.log(index);
    ref?.current[index]?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <div className="max-w-[2000px] mx-auto px-10 py-5 ">
        <Menu scrollOnPage={scrollOnPage} sectionIndex={sectionIndex} />
        {[
          <Header setSectionIndex={setSectionIndex} />,
          <Projects setSectionIndex={setSectionIndex} />,
          <MyInfo setSectionIndex={setSectionIndex} />,
          <Contact setSectionIndex={setSectionIndex} />,
        ].map((el, i) => (
          <div key={i} ref={(element) => (ref.current[i] = element)}>
            {el}
          </div>
        ))}
      </div>
    </main>
  );
}
