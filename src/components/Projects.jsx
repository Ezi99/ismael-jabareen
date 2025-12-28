function Projects() {
  const projects = [
    {
      title: 'Draw Your Path',
      description:
        'An immersive VR action-adventure game combining creativity, strategy, and fast-paced gameplay.',
      features: [
        'Developed with Unity, leveraging C# scripting and advanced VR development frameworks for an immersive gaming experience.',
        'Designed dynamic drawing mechanics for creating interactive objects like weapons and shields.',
        'Developed multi-level gameplay with enemy AI, puzzles, and timeline exploration.',
        'Implemented intuitive VR controls and interaction for a seamless player experience.',
      ],
      githubUrl: 'https://github.com/Ezi99/draw-your-path',
    },
    {
      title: 'Predictions Web App',
      description:
        'A simulation platform for modeling and observing virtual worlds governed by statistical laws.',
      features: [
        'Developed a robust simulation engine in Java to process dynamic laws and entity behavior.',
        'Implemented servlets to manage efficient client-server communication.',
        'Built distinct admin and user interfaces for configuration and simulation monitoring.',
      ],
      githubUrl: 'https://github.com/Ezi99/predictions-web-app',
    },
    {
      title: 'Forkify',
      description:
        'Built using modern JavaScript (ES6+), leveraging classes, modules, and asynchronous programming for a dynamic and responsive recipe app.',
      features: [
        'Integrated an external API for real-time recipe search and data.',
        'Implemented bookmarking and custom recipe submission features.',
        'Designed a responsive and dynamic UI for a seamless user experience.',
      ],
      githubUrl: 'https://github.com/Ezi99/forkify',
    },
  ]

  return (
    <section id="projects" className="section">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

