import { Code2, Palette, Wrench, Sparkles, Cloud, Brain, Database } from 'lucide-react'
import type { SkillCategory } from '@/types'

const skillCategories: SkillCategory[] = [
  {
    category: 'Salesforce & CRM',
    skills: [
      { name: 'Salesforce Admin', icon: 'cloud' },
      { name: 'Apex Coding', icon: 'code2' },
      { name: 'SOQL', icon: 'database' },
      { name: 'Flows', icon: 'wrench' },
      { name: 'Data Loader', icon: 'database' },
      { name: 'Workbench', icon: 'wrench' },
      { name: 'Salesforce Inspector', icon: 'wrench' },
      { name: 'Copado', icon: 'wrench' },
    ],
  },
  {
    category: 'Automation & AI',
    skills: [
      { name: 'N8N', icon: 'sparkles' },
      { name: 'Make.com', icon: 'sparkles' },
      { name: 'Zapier', icon: 'sparkles' },
      { name: 'AI Prompt Design', icon: 'brain' },
      { name: 'Gemini AI', icon: 'brain' },
      { name: 'Azure OpenAI', icon: 'brain' },
      { name: 'GHL', icon: 'wrench' },
    ],
  },
  {
    category: 'Development',
    skills: [
      { name: 'REST APIs', icon: 'code2' },
      { name: 'Git', icon: 'wrench' },
      { name: 'Azure DevOps', icon: 'cloud' },
      { name: 'VS Code', icon: 'code2' },
      { name: 'TypeScript', icon: 'code2' },
      { name: 'PHP', icon: 'code2' },
      { name: 'Next.js', icon: 'sparkles' },
      { name: 'React', icon: 'sparkles' },
    ],
  },
  {
    category: 'Testing & QA',
    skills: [
      { name: 'Ranorex', icon: 'wrench' },
      { name: 'Selenium', icon: 'wrench' },
      { name: 'CI/CD', icon: 'wrench' },
      { name: 'Agile', icon: 'sparkles' },
    ],
  },
  {
    category: 'Data & Analytics',
    skills: [
      { name: 'Tableau', icon: 'database' },
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'Airtable', icon: 'database' },
      { name: 'Data Analysis', icon: 'database' },
    ],
  },
]

const iconMap: Record<string, React.ReactNode> = {
  code2: <Code2 size={14} />,
  palette: <Palette size={14} />,
  wrench: <Wrench size={14} />,
  sparkles: <Sparkles size={14} />,
  cloud: <Cloud size={14} />,
  brain: <Brain size={14} />,
  database: <Database size={14} />,
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
        Skills &amp; <span className="text-gradient">Technologies</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        Tools and technologies I use to automate, build, and scale.
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

      {/* Certifications */}
      <div className="mt-12 p-6 bg-surface border border-border rounded-2xl">
        <h3 className="text-lg font-heading font-semibold mb-4 text-accent">Certifications</h3>
        <ul className="space-y-2">
          <li className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-accent mt-1.5 shrink-0">▹</span>
            Salesforce Certified Administrator (SCA) — ID: 20261424
          </li>
          <li className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-accent mt-1.5 shrink-0">▹</span>
            Salesforce Certified Platform App Builder — ID: 22676107
          </li>
          <li className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-accent mt-1.5 shrink-0">▹</span>
            Salesforce Certified Associate (x2) — IDs: 3047747, 5181279
          </li>
          <li className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-accent mt-1.5 shrink-0">▹</span>
            Copado Certified Fundamentals I — ID: 023256
          </li>
        </ul>
      </div>
    </section>
  )
}
