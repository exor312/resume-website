export function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Salesforce Certs', value: '3' },
    { label: 'Automation Tools', value: '5+' },
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
        About <span className="text-gradient">Me</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        A brief introduction to who I am and what I do.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar placeholder */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary flex items-center justify-center glow-primary">
            <span className="text-6xl font-heading font-bold text-primary/50">CV</span>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="text-lg text-foreground mb-4">
            Certified Salesforce Admin and Platform App Builder with 5+ years of experience
            implementing solutions across Sales, Service, and Experience Clouds. Proven track record
            in leading dev teams, managing integrations, and optimizing CRM workflows for global
            organizations.
          </p>
          <p className="text-muted-foreground mb-6">
            Additionally, experienced in automation strategy and integration using Make.com, n8n, AI,
            and GHL. Recently revamped a full client journey — boosting sales efficiency, increasing
            show-up rates, and reducing tech stack costs through custom workflow design and process
            automation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-surface border border-border">
                <p className="text-2xl font-heading font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
