import { projects, projectsIntro } from "@/data/portfolio";
import { cx } from "../shared/classNames";
import styles from "./ProjectsSection.module.css";
import shared from "../shared/shared.module.css";

export function ProjectsSection() {
  return (
    <section
      className={cx(shared.depthSection, styles.projectsSection)}
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className={styles.strata} />
      <div className={cx(styles.ore, styles.oreOne)} />
      <div className={cx(styles.ore, styles.oreTwo)} />
      <div className={cx(styles.ore, styles.oreThree)} />
      <div className={cx(styles.ore, styles.oreFour)} />
      <div className={cx(styles.ore, styles.oreFive)} />

      <div className={cx(shared.sectionContent, shared.sectionContentWide)}>
        <div className={cx(shared.contentPanel, styles.introPanel)}>
          <p className={shared.eyebrow}>{projectsIntro.eyebrow}</p>
          <h2 id="projects-heading">{projectsIntro.title}</h2>
          <p>{projectsIntro.body}</p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.title}>
              <span className={styles.projectMarker} />
              <h3>{project.title}</h3>
              <p>{project.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
