import { contact } from "@/data/portfolio";
import { cx } from "../shared/classNames";
import styles from "./ContactSection.module.css";
import shared from "../shared/shared.module.css";

export function ContactSection() {
  return (
    <section
      className={cx(shared.depthSection, styles.contactSection)}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className={cx(styles.crystal, styles.crystalOne)} />
      <div className={cx(styles.crystal, styles.crystalTwo)} />
      <div className={cx(styles.crystal, styles.crystalThree)} />
      <div className={cx(styles.crystal, styles.crystalFour)} />
      <div className={cx(styles.crystal, styles.crystalFive)} />

      <div
        className={cx(
          shared.sectionContent,
          shared.sectionContentCenter,
          shared.contentPanel,
          styles.contactPanel,
        )}
      >
        <p className={shared.eyebrow}>{contact.eyebrow}</p>
        <h2 id="contact-heading">{contact.title}</h2>
        <p>{contact.body}</p>
        <div className={cx(shared.actionLinks, styles.contactLinks)} aria-label="Contact links">
          {contact.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
