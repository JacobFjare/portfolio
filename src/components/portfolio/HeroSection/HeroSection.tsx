import { hero } from "@/data/portfolio";
import { cx } from "../shared/classNames";
import styles from "./HeroSection.module.css";
import shared from "../shared/shared.module.css";

export function HeroSection() {
  return (
    <section
      className={cx(shared.depthSection, styles.peakSection)}
      aria-labelledby="intro-heading"
    >
      <div className={cx(styles.skyOrb, styles.sun)} />
      <div className={cx(styles.mountain, styles.mountainBack)} />
      <div className={cx(styles.mountain, styles.mountainFront)} />
      <div className={styles.ridgeLine} />

      <div className={cx(shared.sectionContent, styles.heroContent)}>
        <p className={shared.eyebrow}>{hero.eyebrow}</p>
        <h1 id="intro-heading">{hero.title}</h1>
        <div className={styles.heroCopy}>
          <p className={styles.leadCopy}>{hero.intro}</p>
          <div className={shared.actionLinks} aria-label="Primary links">
            <a href="#projects">View work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <a className={styles.scrollCue} href="#about" aria-label="Scroll to about section">
        Scroll deeper
      </a>
    </section>
  );
}
