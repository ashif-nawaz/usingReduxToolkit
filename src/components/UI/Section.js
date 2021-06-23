import React from "react";
import Styles from "./Section.module.css";

const Section = ({ children }) => {
  return <section className={Styles.Section}>{children}</section>;
};

export default Section;
