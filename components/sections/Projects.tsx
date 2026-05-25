import type { Project } from '@/types'
import { Github, ExternalLink } from 'lucide-react'

const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Project Beta',
    description: 'AI-powered content generation tool with collaborative editing, version control, and team workspaces.',
    tech: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '3',
    title: 'Project Gamma',
    description: 'Real-time analytics dashboard with customizable widgets, data visualization, and automated reporting.',
    tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '4',
    title: 'Project Delta',
    description: 'Mobile-first social platform with real-time messaging, content sharing, and community features.',
    tech: ['React Native', 'Firebase', 'GraphQL', 'TypeScript'],
    githubUrl: 'https://github.com',
  },
  {
    id: '5',
    title: 'Project Epsilon',
    description: 'Developer tool for automated code review, security scanning, and CI/CD pipeline integration.',
    tech: ['Go', 'Docker', 'Kubernetes', 'GitHub Actions'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '6',
    title: 'Project Zeta',
    description: 'Open-source design system with accessible components, theming engine, and comprehensive documentation.',
    tech: ['TypeScript', 'Storybook', 'Tailwind CSS', 'Radix UI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        A selection of projects I&apos;ve built that showcase my skills and passion.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
          >
            {/* Image placeholder */}
            <div className="h-40 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
              <span className="text-4xl font-heading font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                {project.title.charAt(0)}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-heading font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
