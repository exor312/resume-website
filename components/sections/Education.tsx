'use client'

import { useInView } from '@/hooks/useInView'
import type { Education } from '@/types'
import { cn } from '@/lib/utils'

const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Santo Tomas — Manila',
    startDate: '2012',
    endDate: '2016',
  },
]

export function Education() {
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div ref={ref} className={cn(isVisible && 'is-visible')}>
        <h2 className="animate-fade-in-up text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
          <span className="text-gradient">Education</span>
        </h2>
        <p className="animate-fade-in-up animation-delay-200 text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          My academic background and continuous learning journey.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <div
              key={edu.id}
              className={cn(
                "animate-scale-in bg-surface border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
                i > 0 && 'animation-delay-200'
              )}
            >
              <h3 className="text-lg font-heading font-semibold mb-1">{edu.degree}</h3>
              <p className="text-primary font-medium mb-2">{edu.institution}</p>
              <p className="text-sm text-muted-foreground font-mono mb-4">
                {edu.startDate} — {edu.endDate}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent">
                  Cum Laude Candidate
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
