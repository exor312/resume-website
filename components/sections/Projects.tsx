'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import type { Project } from '@/types'
import { Github, ExternalLink, ChevronDown, FolderGit2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const projects: Project[] = [
  {
    id: '1',
    title: 'Studio Shia — Self-Photo Studio Booking System',
    description: 'A full-stack Japanese-themed (Muji-style) booking website for a self-photo studio with real-time slot management and payment flow.',
    role: 'Full-Stack Developer & Designer',
    details: [
      'Designed and built the entire UI with a Japanese Muji aesthetic — warm stone/earth palette, Noto Sans JP headings, clean minimal layout',
      'Implemented 30-minute time slot booking system (10am–9:30pm) with 4 photo packages (Solo/Duo/Group/Premium)',
      'Built double-booking prevention via Supabase UNIQUE constraint on (booking_date, start_time)',
      'Created 10-min slot hold flow: slot locked on booking → released automatically if no payment submitted',
      'Payment screenshot upload with file preview, countdown timer, and holding→pending→approved status flow',
      'Admin dashboard with list/calendar views, approve/reject actions, payment screenshot preview modal',
      'Supabase email/password auth with middleware-protected admin routes',
      'Deployed on Vercel with Supabase PostgreSQL backend, 43 SDLC tickets, full pipeline execution',
    ],
    image: '/photo-studio-thumb.svg',
    tech: ['Next.js 15', 'Supabase', 'Tailwind CSS', 'shadcn/ui', 'PostgreSQL'],
    githubUrl: 'https://github.com/exor312/photo-studio',
    liveUrl: 'https://photo-studio-alpha-ten.vercel.app',
  },
  {
    id: '2',
    title: 'AI-Powered CRM & Contract Automation',
    description: 'Custom CRM pipeline managing Agents, Clients, Doctors, and contract workflows — automated end-to-end using Airtable, n8n, and Docuseal.',
    role: 'Automation Architect',
    details: [
      'Built a complete custom CRM for managing Agents, Clients, Doctors, and contract workflows using Airtable as the database layer',
      'Automated contract creation, monitoring, and sending via Docuseal integration — eliminating manual document handling',
      'Designed n8n workflows to sync data between Airtable, Slack, and email systems in real-time',
      'Reduced contract processing time from hours to minutes through automated pipeline orchestration',
      'Implemented stakeholder notification system — key events trigger instant Slack alerts to relevant teams',
    ],
    tech: ['Airtable', 'n8n', 'Docuseal', 'Slack', 'REST APIs'],
  },
  {
    id: '3',
    title: 'AI Image Generation & LinkedIn Publishing',
    description: 'Automated branded visual content creation using Gemini AI, published directly to LinkedIn via API integration.',
    role: 'AI Integration Developer',
    details: [
      'Developed an AI-powered image generation system using Gemini AI to create branded marketing visuals from text prompts',
      'Integrated with n8n workflow engine to automate the full pipeline: prompt → generation → review → publish',
      'Connected to LinkedIn API for automatic content publishing — scheduled posts go live without manual intervention',
      'Managed Azure OpenAI integration for additional AI capabilities beyond image generation',
      'Reduced content creation time by 80% while maintaining consistent brand visual identity',
    ],
    tech: ['Gemini AI', 'n8n', 'LinkedIn API', 'Azure OpenAI'],
  },
  {
    id: '4',
    title: 'AI Postoperative Virtual Receptionist',
    description: 'Intelligent patient follow-up system using Twilio + Azure OpenAI for automated post-surgery care and symptom triage.',
    role: 'Automation & AI Developer',
    details: [
      'Built an AI-powered virtual receptionist using n8n, Twilio, Azure OpenAI, and PostgreSQL',
      'System automatically messages patients after surgery at scheduled intervals to check recovery status',
      'Capable of answering symptom-related questions using fine-tuned GPT models with medical context',
      'Provides triage guidance — escalates to human staff when responses indicate urgent attention needed',
      'PostgreSQL backend stores patient history, conversation logs, and follow-up schedules for audit trail',
      'Reduced missed follow-up rates and improved patient satisfaction scores significantly',
    ],
    tech: ['n8n', 'Twilio', 'Azure OpenAI', 'PostgreSQL', 'AI Prompt Design'],
  },
  {
    id: '5',
    title: 'Invoice Generation Automation',
    description: 'End-to-end invoice automation connecting Connecteam timesheets to PDF generation via n8n and PDF.co.',
    role: 'Automation Developer',
    details: [
      'Automated invoice generation by integrating Connecteam (time tracking), n8n (workflow), and PDF.co (generation)',
      'Eliminated manual calculation of agent timesheets — system auto-calculates hours, rates, and totals',
      'Ensures accurate invoice production with zero human data entry from timesheet to final PDF',
      'Scheduled workflow runs daily, processes all active agents, and emails invoices to stakeholders',
      'Reduced billing cycle time from 3 days to under 2 hours with 100% calculation accuracy',
    ],
    tech: ['Connecteam', 'n8n', 'PDF.co', 'Automation'],
  },
  {
    id: '6',
    title: 'Salesforce SSO & API Integration',
    description: 'Enterprise SSO implementation and REST API integrations connecting Salesforce with third-party applications.',
    role: 'Salesforce Developer',
    details: [
      'Implemented Single Sign-On (SSO) for Salesforce — streamlined authentication across the organization',
      'Integrated Salesforce with third-party applications using REST APIs, Flows, and Apex triggers',
      'Enabled seamless data exchange with real-time synchronization between Salesforce and external systems',
      'Developed custom Apex components and Flows to automate complex business logic beyond standard config',
      'Enhanced security posture by centralizing identity management and reducing credential sprawl',
    ],
    tech: ['Salesforce', 'SSO', 'REST APIs', 'Apex', 'Azure DevOps'],
  },
  {
    id: '7',
    title: 'Applicant Screening System',
    description: 'Automated applicant capture from web forms into CRM with instant stakeholder notifications via Slack.',
    role: 'Automation Developer',
    details: [
      'Built an applicant screening system capturing form submissions directly into the CRM (Airtable)',
      'Automatically alerts relevant stakeholders via Slack when qualified applicants submit applications',
      'Implemented filtering logic to score and route applications based on predefined criteria',
      'Improved response speed to qualified applicants by cutting manual review latency to near-zero',
    ],
    tech: ['Airtable', 'n8n', 'Slack', 'CRM', 'Automation'],
  },
]

/* ─── Expandable Project Card ─── */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [expanded])

  const hasDetails = project.details && project.details.length > 0

  return (
    <div
      className={cn(
        "group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 animate-fade-in-up",
        expanded && "border-primary/40 shadow-lg shadow-primary/10",
        index > 0 && `animation-delay-${Math.min(index * 100, 800)}`
      )}
    >
      {/* Image / Letter */}
      {project.image ? (
        <div className="relative h-40 bg-secondary/30 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-40 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
          <span className="text-4xl font-heading font-bold text-primary/30 group-hover:text-primary/50 transition-all duration-300 group-hover:scale-110">
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-lg font-heading font-semibold leading-tight">{project.title}</h3>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 shrink-0 mt-0.5"
              aria-label={`${project.title} GitHub`}
            >
              <Github size={16} />
            </a>
          )}
        </div>

        {/* Role badge */}
        {project.role && (
          <div className="flex items-center gap-1.5 text-xs text-accent font-mono mb-2">
            <FolderGit2 size={12} />
            {project.role}
          </div>
        )}

        {/* Short description */}
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
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

        {/* Expand / Collapse button */}
        {hasDetails && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent/80 transition-colors duration-200 mb-3"
          >
            <ChevronDown
              size={14}
              className={cn(
                "transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
            {expanded ? 'Show less' : `View details (${project.details!.length})`}
          </button>
        )}

        {/* Expandable details panel */}
        <div
          style={{ maxHeight: expanded ? `${contentHeight}px` : '0px' }}
          className="overflow-hidden transition-all duration-300 ease-out"
        >
          <div ref={contentRef}>
            {project.details && project.details.length > 0 && (
              <div className="pt-3 border-t border-border">
                <ul className="space-y-2.5">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                      <span className="text-accent mt-1.5 shrink-0 text-[10px]">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Links row */}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border/50">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Projects Section ─── */

export function Projects() {
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div ref={ref} className={cn(isVisible && 'is-visible')}>
        <h2 className="animate-fade-in-up text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="animate-fade-in-up animation-delay-200 text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Click to expand each project and see the full breakdown of what was built.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
