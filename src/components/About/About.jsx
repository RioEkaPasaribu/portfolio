import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h1>About Me</h1>
              <p></p>
              <p>
                Recent Graduate in Computer Science from the Del Institute of
                Technology, equipped with a strong foundation in software
                programming. Proficient in key programming languages including
                Java, Python, and C++, with a keen interest in web and mobile
                application development. Possess strong analytical skills to
                effectively tackle complex problems and apply a deep
                understanding of core computer science concepts. Eager to launch
                a professional career and contribute technical expertise to the
                technology industry.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
