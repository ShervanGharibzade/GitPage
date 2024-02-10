import { useState } from "react";
import Header from "../sections/header/Header";
import Menu from "./nav";
import Projects from "../sections/Projects/Projects";
import MyInfo from "../sections/my-info/MyInfo";
import Contact from "../sections/contact/Contact";

export default function Index() {
  const [nameSection, setNameSection] = useState("Header");

  return (
    <main className="max-w-[2000px] mx-auto px-10 py-5 ">
      <Menu nameSection={nameSection} />

      <Header setNameSection={setNameSection} />

      <Projects setNameSection={setNameSection} />

      <MyInfo setNameSection={setNameSection} />

      <Contact setNameSection={setNameSection} />
    </main>
  );
}
