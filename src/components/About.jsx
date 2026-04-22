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
              Hello there! I'm a Computer Science graduate with a passion for
              creating and tackling challenges head-on. I'm a dedicated
              self-learner who constantly explores new technologies and enhances
              my skillset, whether through online courses or hands-on projects.
              I enjoy solving problems independently but also recognize the
              value of collaboration and know when to seek help from colleagues
              or resources. I'm eager to take my first step in the high-tech
              industry and contribute to meaningful projects.
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
                <div>Frontend • Backend • Game/VR</div>
              </div>
              <div>
                <strong>Strengths</strong>
                <div>Problem-solving, self-learning, teamwork</div>
              </div>
              <div>
                <strong>Looking for</strong>
                <div>First role in the high-tech industry</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About

