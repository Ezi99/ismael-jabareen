function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container section-grid">
        <div className="section-header" data-reveal>
          <div className="section-kicker">Let’s talk</div>
          <h2 className="section-title">Contact</h2>
          <p className="section-lead">
            If you'd like to work with me or have any questions, feel free to
            reach out.
          </p>
        </div>

        <div className="section-body">
          <ul className="contact-list" aria-label="Contact links" data-reveal>
            <li className="contact-item">
              <a href="mailto:jabareenismael@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li className="contact-item">
              <a
                href="https://github.com/Ezi99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="contact-item">
              <a
                href="https://www.linkedin.com/in/ismael-jabareen-44a362243/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
