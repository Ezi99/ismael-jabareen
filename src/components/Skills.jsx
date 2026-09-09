function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "C#",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "YAML",
    "Kibana",
    "Groundcover",
    "Postman",
    "Jenkins",
    "Git & GitHub",
    "Unity",
  ];

  return (
    <section id="skills" className="section">
      <div className="container section-grid">
        <div className="section-header" data-reveal>
          <div className="section-kicker">Toolbox</div>
          <h2 className="section-title">Skills</h2>
          <p className="section-lead">
            Technologies and tools I’m comfortable working with.
          </p>
        </div>

        <div className="section-body">
          <ul className="skills-list" data-reveal>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
