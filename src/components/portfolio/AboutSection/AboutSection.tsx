/* eslint-disable @next/next/no-img-element -- Decorative PNG rocks need browser-native alpha rendering. */
import { about } from "@/data/portfolio";
import { cx } from "../shared/classNames";
import styles from "./AboutSection.module.css";
import shared from "../shared/shared.module.css";

export function AboutSection() {
  return (
    <section
      className={cx(shared.depthSection, styles.surfaceSection)}
      id="about"
      aria-labelledby="about-heading"
    >
      <div className={cx(styles.strata, styles.surfaceStrata)} />
      <img
        className={cx(styles.stone, styles.stoneOne)}
        src="/images/textures/rock-rounded.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className={cx(styles.stone, styles.stoneTwo)}
        src="/images/textures/rock-wide.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className={cx(styles.stone, styles.stoneThree)}
        src="/images/textures/rock-vertical.png"
        alt=""
        aria-hidden="true"
      />

      <div
        className={cx(
          shared.sectionContent,
          shared.sectionContentRight,
          shared.contentPanel,
        )}
      >
        <p className={shared.eyebrow}>{about.eyebrow}</p>
        <h2 id="about-heading">{about.title}</h2>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
