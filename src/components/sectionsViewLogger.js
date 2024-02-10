import { useEffect } from "react";

const SectionsViewLogger = ({ sectionName, setNameSection }) => {
  useEffect(() => {
    setNameSection(sectionName);
  }, [sectionName, setNameSection]);

  return null;
};

export default SectionsViewLogger;
