import type { Experience } from '@/types'

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    role: 'Senior Full Stack Developer',
    startDate: '2022',
    endDate: 'Present',
    description: [
      'Led development of microservices architecture serving 100K+ daily users',
      'Reduced page load times by 40% through performance optimization',
      'Mentored 3 junior developers and established code review practices',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: '2',
    company: 'Previous Company',
    role: 'Full Stack Developer',
    startDate: '2020',
    endDate: '2022',
    description: [
      'Built and maintained customer-facing dashboard used by 50K+ users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with design team to create responsive UI components',
    ],
    tech: ['Vue.js', 'Python', 'MongoDB', 'GCP', 'Kubernetes'],
  },
  {
    id: '3',
    company: 'First Company',
    role: 'Junior Developer',
    startDate: '2018',
    endDate: '2020',
    description: [
      'Developed RESTful APIs for mobile and web applications',
      'Contributed to open-source projects and internal tooling',
      'Participated in agile development processes and sprint planning',
    ],
    tech: ['JavaScript', 'React', 'Express', 'MySQL', 'Git'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
        Work <span className="text-gradient">Experience</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        A timeline of my professional journey and the impact I&apos;ve made.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-2 z-10 glow-primary" />

              {/* Card */}
              <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'} ml-6 md:ml-0`}>
                <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-lg font-heading font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1.5 shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
