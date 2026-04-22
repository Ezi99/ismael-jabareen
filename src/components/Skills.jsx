function Skills() {
  const skills = [
    'Java',
    'JavaScript',
    'C#',
    'SQL',
    'C',
    'C++',
    'PostgreSQL',
    'Unity',
    'Postman',
    'Jenkins',
    'Git & GitHub',
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Toolbox</div>
          <h2 className="section-title">Skills</h2>
          <p className="section-lead">
            Technologies and tools I’m comfortable working with.
          </p>
        </div>

        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills

