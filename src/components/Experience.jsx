function Experience() {
  const highlights = [
    'Troubleshoot and resolve complex issues in live production environments',
    'Investigate system behavior using logs (Kibana, Groundcover) and database queries (MongoDB with JavaScript)',
    'Execute API calls to reproduce issues and validate system behavior',
    'Handle real-time incidents, balancing technical investigation with client and stakeholder communication',
    'Act as a bridge between support, engineering, and product teams',
    'Take ownership of product areas as an SME and contribute to team knowledge sharing',
    'Create and maintain documentation across multiple systems, including troubleshooting guides and system overviews',
    'Deliver onboarding sessions for new team members',
    'Manage system configurations using YAML across automations, UI behavior, and product-level settings',
  ]

  return (
    <section id="experience" className="section">
      <div className="container section-grid">
        <div className="section-header" data-reveal>
          <div className="section-kicker">Career</div>
          <h2 className="section-title">Experience</h2>
          <p className="section-lead">
            Production support and cross-team collaboration in a fast-paced,
            customer-facing environment.
          </p>
        </div>

        <div className="section-body">
          <div className="card" data-reveal>
            <div className="card-title">Sr Associate Technical Support Delivery Analyst</div>
            <p className="card-meta">
              <strong>Workday</strong> · 2025 – Present
            </p>
            <ul>
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
