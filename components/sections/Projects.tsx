import type { Project } from '@/types'
import { Github, ExternalLink } from 'lucide-react'

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered CRM & Contract Automation',
    description: 'Built a complete custom CRM for managing Agents, Clients, Doctors, and contract workflows using Airtable, n8n, and Docuseal. Enabled automated contract creation, monitoring, and sending.',
    tech: ['Airtable', 'n8n', 'Docuseal', 'Slack', 'REST APIs'],
  },
  {
    id: '2',
    title: 'AI Image Generation & LinkedIn Publishing',
    description: 'Developed an AI-powered image generation system using Gemini AI, integrated with n8n and LinkedIn API to automatically create branded marketing visuals and publish them.',
    tech: ['Gemini AI', 'n8n', 'LinkedIn API', 'Azure OpenAI'],
  },
  {
    id: '3',
    title: 'AI Postoperative Virtual Receptionist',
    description: 'Built an AI-powered virtual receptionist using n8n, Twilio, Azure OpenAI, and PostgreSQL. Capable of messaging patients after surgery, answering symptom-related questions, and providing triage guidance.',
    tech: ['n8n', 'Twilio', 'Azure OpenAI', 'PostgreSQL', 'AI Prompt Design'],
  },
  {
    id: '4',
    title: 'Invoice Generation Automation',
    description: 'Automated invoice generation by integrating Connecteam, n8n, and PDF.co, eliminating manual calculations and ensuring accurate invoice production from agent timesheets.',
    tech: ['Connecteam', 'n8n', 'PDF.co', 'Automation'],
  },
  {
    id: '5',
    title: 'Salesforce SSO & API Integration',
    description: 'Implemented Single Sign-On (SSO) for Salesforce and integrated with third-party applications using REST APIs, Flows, and Apex — enabling seamless data exchange and real-time synchronization.',
    tech: ['Salesforce', 'SSO', 'REST APIs', 'Apex', 'Azure DevOps'],
  },
  {
    id: '6',
    title: 'Applicant Screening System',
    description: 'Implemented an applicant screening system that captures form submissions directly into the CRM and automatically alerts stakeholders, improving response speed to qualified applicants.',
    tech: ['Airtable', 'n8n', 'Slack', 'CRM', 'Automation'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        A selection of automation and Salesforce solutions I&apos;ve built.
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
