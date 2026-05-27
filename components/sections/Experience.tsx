import type { Experience } from '@/types'

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tacit Solutions Group',
    role: 'Business Automation Specialist',
    startDate: 'Jul 2025',
    endDate: 'Present',
    description: [
      'Built a complete custom CRM for managing Agents, Clients, Doctors, and contract workflows using Airtable, n8n, and Docuseal, enabling automated contract creation, monitoring, and sending.',
      'Developed an AI-powered image generation system using Gemini Image Generation and Gemini, integrated with n8n and the LinkedIn API, to automatically create branded marketing visuals and publish them on LinkedIn.',
      'Implemented an applicant screening system that captures form submissions directly into the CRM and automatically alerts stakeholders using Airtable and Slack, improving response speed to qualified applicants.',
      'Automated invoice generation by integrating Connecteam, n8n, and PDF.co, eliminating manual calculations and ensuring accurate invoice production from agent timesheets.',
      'Developed an AI-powered postoperative virtual receptionist using n8n, Twilio, Azure OpenAI, and PostgreSQL, capable of messaging patients after surgery, answering symptom-related questions, and providing triage guidance.',
    ],
    tech: ['Airtable', 'n8n', 'Gemini AI', 'Twilio', 'Azure OpenAI', 'PostgreSQL', 'Slack', 'Docuseal', 'PDF.co'],
  },
  {
    id: '2',
    company: 'Freelancer',
    role: 'Business Automation Specialist',
    startDate: 'Mar 2025',
    endDate: 'Present',
    description: [
      'Reduce Document Processing costs by using automation tools such as N8N.',
      'Built AI-powered email processing system that automated task creation and calendar event scheduling, improving efficiency 24/7.',
      'Identifying business pain points and designing automation and AI-driven solutions to streamline workflows and improve efficiency.',
    ],
    tech: ['N8N', 'AI', 'Automation'],
  },
  {
    id: '3',
    company: 'Accenture Inc.',
    role: 'Application Development Senior Analyst',
    startDate: 'Dec 2021',
    endDate: 'Feb 2025',
    description: [
      'Integrated Salesforce with third-party applications using REST APIs, Flows and APEX to enable seamless data exchange, ensuring real-time synchronization and enhancing operational efficiency.',
      'Implemented Single Sign-On (SSO) for Salesforce, streamlining user authentication processes, improving security, and enhancing user experience across the organization.',
      'Led a team of developers in delivering complex Salesforce solutions, improving business workflows by 20%.',
      'Developed custom components using Apex triggers and Flows, driving a 30% improvement in task automation.',
      'Utilized Azure DevOps to manage the lifecycle of user stories, ensuring timely completion and deployment.',
      'Conducted code reviews and provided mentorship to junior developers, resulting in a 15% reduction in bugs.',
      'Managed seamless migrations via Copado, collaborating with stakeholders for approvals and production releases.',
    ],
    tech: ['Salesforce', 'Apex', 'REST APIs', 'Azure DevOps', 'Copado', 'SSO', 'SOQL'],
  },
  {
    id: '4',
    company: 'Accenture Inc.',
    role: 'Application Development Analyst',
    startDate: 'Jan 2020',
    endDate: 'Dec 2021',
    description: [
      'Processed and imported large datasets (500k+ records) using Salesforce tools, achieving a 99.8% accuracy rate.',
      'Facilitated data repair and remediation processes, reducing data discrepancies by 25%.',
      'Coordinated with global partners to ensure smooth data import/export operations, improving client satisfaction.',
    ],
    tech: ['Salesforce', 'Data Loader', 'SOQL', 'Data Analysis'],
  },
  {
    id: '5',
    company: 'Accenture Inc.',
    role: 'Associate Software Engineer',
    startDate: 'Oct 2016',
    endDate: 'Apr 2018',
    description: [
      'Built and maintained automation scripts using Ranorex and Selenium, optimizing testing processes.',
      'Integrated automation tools with TFS and DevOps for version control and CI/CD.',
      'Conducted feasibility studies to ensure tools met client requirements and budgets.',
    ],
    tech: ['Ranorex', 'Selenium', 'TFS', 'DevOps', 'CI/CD'],
  },
  {
    id: '6',
    company: 'Potatocodes',
    role: 'Web Developer',
    startDate: 'Jul 2015',
    endDate: 'Sep 2015',
    description: [
      'Developed websites using PHP frameworks such as CodeIgniter and Laravel, ensuring high-quality agile delivery.',
      'Worked with WordPress and Drupal for content management, customizing features based on client needs.',
    ],
    tech: ['PHP', 'CodeIgniter', 'Laravel', 'WordPress', 'Drupal'],
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
