import { skills, skillsIntro } from "@/data/portfolio";
import { cx } from "../shared/classNames";
import styles from "./SkillsSection.module.css";
import shared from "../shared/shared.module.css";

export function SkillsSection() {
  return (
    <section
      className={cx(shared.depthSection, styles.skillsSection)}
      aria-labelledby="experience-heading"
    >
      <div className={cx(styles.lapis, styles.lapisOne)} />
      <div className={cx(styles.lapis, styles.lapisTwo)} />
      <div className={cx(styles.lapis, styles.lapisThree)} />
      <div className={cx(styles.lapis, styles.lapisFour)} />
      <div className={cx(styles.lapis, styles.lapisFive)} />
      <div className={cx(styles.lapis, styles.lapisSix)} />

      <div
        className={cx(
          shared.sectionContent,
          shared.sectionContentLeft,
          shared.contentPanel,
        )}
      >
        <p className={shared.eyebrow}>{skillsIntro.eyebrow}</p>
        <h2 id="experience-heading">{skillsIntro.title}</h2>
        <p>{skillsIntro.body}</p>
        <ul className={styles.skillList} aria-label="Skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
