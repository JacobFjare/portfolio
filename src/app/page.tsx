const projects = [
  {
    title: "Project Stratum",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non arcu sed nibh cursus posuere.",
  },
  {
    title: "Cavern Atlas",
    detail:
      "Praesent vitae velit at ipsum gravida posuere. Suspendisse potenti morbi luctus sem vitae urna.",
  },
  {
    title: "Fossil Engine",
    detail:
      "Donec commodo erat et eros feugiat, sit amet pulvinar lorem luctus. Curabitur at mi fermentum.",
  },
];

const skills = [
  "Interface systems",
  "Full-stack builds",
  "Product thinking",
  "Creative direction",
  "Performance tuning",
  "Design systems",
];

export default function Home() {
  return (
    <main className="portfolio-page">
      <section className="depth-section depth-section--peak" aria-labelledby="intro-heading">
        <div className="sky-orb sky-orb--sun" />
        <div className="mountain mountain--back" />
        <div className="mountain mountain--front" />
        <div className="ridge-line" />

        <div className="section-content section-content--hero">
          <p className="eyebrow">Modern portfolio / subterranean field notes</p>
          <h1 id="intro-heading">Lorem Ipsum Developer</h1>
          <div className="hero-copy">
            <p className="lead-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              commodo, nibh et luctus cursus, velit justo luctus mi, vitae
              tincidunt magna est sed augue.
            </p>
            <div className="hero-actions" aria-label="Primary links">
              <a href="#projects">View work</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
          Scroll deeper
        </a>
      </section>

      <section
        className="depth-section depth-section--surface"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className="strata strata--surface" />
        <div className="stone stone--one" />
        <div className="stone stone--two" />
        <div className="stone stone--three" />

        <div className="section-content section-content--right content-panel">
          <p className="eyebrow">Surface layer</p>
          <h2 id="about-heading">About the explorer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            convallis, magna at sagittis porttitor, ex nulla dignissim mi, non
            vestibulum justo magna vitae lorem.
          </p>
          <p>
            Sed non magna eget mi elementum dignissim. Maecenas ornare, lectus
            et faucibus gravida, massa mauris rutrum leo, ac rhoncus erat eros
            vitae nisl.
          </p>
        </div>
      </section>

      <section
        className="depth-section depth-section--projects"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <div className="strata strata--deep" />
        <div className="ore ore--one" />
        <div className="ore ore--two" />
        <div className="ore ore--three" />
        <div className="ore ore--four" />
        <div className="ore ore--five" />

        <div className="section-content section-content--wide">
          <div className="content-panel content-panel--intro">
            <p className="eyebrow">Mid-mountain layer</p>
            <h2 id="projects-heading">Selected work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              placerat eros in ipsum hendrerit, quis volutpat tortor mattis.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-card__marker" />
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="depth-section depth-section--fossil"
        aria-labelledby="experience-heading"
      >
        <div className="lapis lapis--one" />
        <div className="lapis lapis--two" />
        <div className="lapis lapis--three" />
        <div className="lapis lapis--four" />
        <div className="lapis lapis--five" />
        <div className="lapis lapis--six" />

        <div className="section-content section-content--left content-panel">
          <p className="eyebrow">Lapis layer</p>
          <h2 id="experience-heading">Experience and skills</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            luctus, arcu ac tincidunt efficitur, mi ligula commodo dui, sed
            dictum massa mauris sit amet justo.
          </p>
          <ul className="skill-list" aria-label="Skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="depth-section depth-section--contact"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="crystal crystal--one" />
        <div className="crystal crystal--two" />
        <div className="crystal crystal--three" />
        <div className="crystal crystal--four" />
        <div className="crystal crystal--five" />

        <div className="section-content section-content--center content-panel content-panel--contact">
          <p className="eyebrow">Deep cavern</p>
          <h2 id="contact-heading">Let&apos;s build something</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
            purus ut nibh sollicitudin finibus. Morbi luctus ex et sem
            consequat, vitae facilisis enim volutpat.
          </p>
          <div className="contact-links" aria-label="Contact links">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="https://example.com">Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
}
