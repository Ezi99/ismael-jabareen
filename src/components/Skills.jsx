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
      <h1>Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

