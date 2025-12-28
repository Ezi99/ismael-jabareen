function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact</h1>
      <p>
        If you'd like to work with me or have any questions, feel free to reach
        out!
      </p>
      <ul className="contact-list">
        <li className="contact-item">
          <a href="mailto:jabareenismael@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="contact-item">
          <a
            href="https://github.com/Ezi99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="contact-item">
          <a
            href="https://www.linkedin.com/in/ismael-jabareen-44a362243/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact

