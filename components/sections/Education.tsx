import type { Education } from '@/types'

const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    startDate: '2014',
    endDate: '2018',
    gpa: '3.8/4.0',
    achievements: ['Dean\'s List', 'CS Honor Society', 'Capstone Project Award'],
  },
  {
    id: '2',
    degree: 'Full Stack Web Development',
    institution: 'Coding Bootcamp',
    startDate: '2018',
    endDate: '2018',
    achievements: ['Top of Class', 'Best Final Project'],
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
        <span className="text-gradient">Education</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        My academic background and continuous learning journey.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-heading font-semibold mb-1">{edu.degree}</h3>
            <p className="text-primary font-medium mb-2">{edu.institution}</p>
            <p className="text-sm text-muted-foreground font-mono mb-4">
              {edu.startDate} — {edu.endDate}
            </p>
            {edu.gpa && (
              <p className="text-sm text-accent font-mono mb-3">GPA: {edu.gpa}</p>
            )}
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((a) => (
                  <span
                    key={a}
                    className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent"
                  >
                    {a}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
