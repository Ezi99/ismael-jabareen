function About() {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Building <strong>clean, reliable</strong> software and interactive
              experiences.
            </h1>
            <p className="hero-subtitle">
              Sr Associate Technical Support Delivery Analyst at Workday with a
              strong
              software development background and hands-on experience in
              production systems, troubleshooting, logs, APIs, MongoDB, and YAML
              configurations.
              <br />
              <br />
              I enjoy building reliable software, debugging complex issues, and
              understanding how applications behave from development to
              production.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn" href="#contact">
                Contact me
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Quick info">
            <div className="meta">
              <div>
                <strong>Focus</strong>
                <div>Software Development • Production Systems • Game/VR</div>
              </div>
              <div>
                <strong>Technical Work</strong>
                <div>Debugging, log analysis, APIs, MongoDB, YAML configurations</div>
              </div>
              <div>
                <strong>Strengths</strong>
                <div>Ownership, documentation, problem-solving, communication</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About

