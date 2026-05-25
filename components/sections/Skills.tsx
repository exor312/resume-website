import { Code2, Palette, Wrench, Sparkles } from 'lucide-react'
import type { SkillCategory } from '@/types'

const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript', icon: 'code2' },
      { name: 'JavaScript', icon: 'code2' },
      { name: 'Python', icon: 'code2' },
      { name: 'Go', icon: 'code2' },
      { name: 'SQL', icon: 'code2' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', icon: 'sparkles' },
      { name: 'Next.js', icon: 'sparkles' },
      { name: 'Node.js', icon: 'sparkles' },
      { name: 'Express', icon: 'sparkles' },
      { name: 'Tailwind CSS', icon: 'palette' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: 'wrench' },
      { name: 'Docker', icon: 'wrench' },
      { name: 'AWS', icon: 'wrench' },
      { name: 'Vercel', icon: 'wrench' },
      { name: 'Figma', icon: 'palette' },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'REST APIs', icon: 'code2' },
      { name: 'GraphQL', icon: 'code2' },
      { name: 'PostgreSQL', icon: 'code2' },
      { name: 'MongoDB', icon: 'code2' },
      { name: 'Redis', icon: 'code2' },
    ],
  },
]

const iconMap: Record<string, React.ReactNode> = {
  code2: <Code2 size={14} />,
  palette: <Palette size={14} />,
  wrench: <Wrench size={14} />,
  sparkles: <Sparkles size={14} />,
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
        Skills &amp; <span className="text-gradient">Technologies</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        Tools and technologies I use to bring ideas to life.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-lg font-heading font-semibold mb-4 text-accent">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border hover:border-accent/50 hover:glow-accent transition-all cursor-default group"
                >
                  <span className="text-accent group-hover:text-accent transition-colors">
                    {skill.icon && iconMap[skill.icon] ? iconMap[skill.icon] : <Code2 size={14} />}
                  </span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
