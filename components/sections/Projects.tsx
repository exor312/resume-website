'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import type { Project, ImpactStat } from '@/types'
import {
  Github, ExternalLink, FolderGit2,
  Clock, DollarSign, TrendingUp, Users, Zap, Shield, Percent,
  X, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<ImpactStat['icon'], React.ComponentType<{ size?: number; className?: string }>> = {
  clock: Clock,
  dollar: DollarSign,
  trending: TrendingUp,
  users: Users,
  zap: Zap,
  shield: Shield,
  percent: Percent,
}

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
    impact: [
      { label: 'Booking Automation', value: '100%', icon: 'percent' },
      { label: 'Hours Saved', value: '~5 hrs/wk', icon: 'clock' },
      { label: 'Client Time Saved', value: '~15 min/booking', icon: 'users' },
      { label: 'Admin Review', value: '< 2 min', icon: 'zap' },
    ],
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
    impact: [
      { label: 'Contract Processing', value: 'Hours → Minutes', icon: 'clock' },
      { label: 'Manual Handling', value: '100% Eliminated', icon: 'percent' },
      { label: 'Workflow Steps', value: '12+ Automated', icon: 'zap' },
      { label: 'Notifications', value: 'Real-time', icon: 'users' },
    ],
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
    impact: [
      { label: 'Content Time', value: '80% Reduction', icon: 'percent' },
      { label: 'Design Work', value: 'Fully Automated', icon: 'zap' },
      { label: 'Brand Consistency', value: '100%', icon: 'shield' },
      { label: 'Post Frequency', value: '3x Increase', icon: 'trending' },
    ],
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
    impact: [
      { label: 'Follow-up Miss Rate', value: '~90% Reduction', icon: 'percent' },
      { label: 'Monitoring', value: '24/7 Auto', icon: 'users' },
      { label: 'Staff Time Saved', value: '~10 hrs/wk', icon: 'clock' },
      { label: 'Escalation', value: 'AI-Triage', icon: 'shield' },
    ],
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
    impact: [
      { label: 'Billing Cycle', value: '3 days → 2 hrs', icon: 'clock' },
      { label: 'Accuracy', value: '100%', icon: 'shield' },
      { label: 'Manual Entry', value: 'Fully Eliminated', icon: 'zap' },
      { label: 'Labor Cost Saved', value: '~85%', icon: 'dollar' },
    ],
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
    impact: [
      { label: 'Auth Centralized', value: '100%', icon: 'shield' },
      { label: 'Credential Sprawl', value: 'Eliminated', icon: 'zap' },
      { label: 'Data Sync', value: 'Real-time', icon: 'trending' },
      { label: 'Custom Flows', value: '15+', icon: 'percent' },
    ],
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
    impact: [
      { label: 'Response Time', value: 'Near-Zero', icon: 'clock' },
      { label: 'Manual Review', value: 'Automated', icon: 'zap' },
      { label: 'Leads Caught', value: '100%', icon: 'trending' },
      { label: 'Slack Alerts', value: 'Instant', icon: 'users' },
    ],
  },
]

/* ─── Icon helper ─── */

function ImpactIcon({ icon, className }: { icon: ImpactStat['icon']; className?: string }) {
  const Icon = iconMap[icon]
  return <Icon size={18} className={className} />
}

/* ─── Project Card (clickable, opens modal) ─── */

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const hasImpact = project.impact && project.impact.length > 0

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group text-left bg-surface border border-border rounded-2xl overflow-hidden",
        "hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5",
        "animate-fade-in-up focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
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
        {/* Top row: title + arrow */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-lg font-heading font-semibold leading-tight">{project.title}</h3>
          <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-1" />
        </div>

        {/* Role badge */}
        {project.role && (
          <div className="flex items-center gap-1.5 text-xs text-accent font-mono mb-2">
            <FolderGit2 size={12} />
            {project.role}
          </div>
        )}

        {/* Short description */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags (first 3) */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/50 text-muted-foreground">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Impact teaser — 2 stats preview */}
        {hasImpact && (
          <div className="flex items-center gap-3 pt-3 border-t border-border/50">
            {project.impact!.slice(0, 2).map((stat) => (
              <div key={stat.label} className="flex items-center gap-1.5">
                <ImpactIcon icon={stat.icon} className="text-primary/70" />
                <span className="text-[11px] font-mono text-muted-foreground">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </button>
  )
}

/* ─── Project Modal (full-screen overlay) ─── */

function ProjectModal({ project, onClose, onPrev, onNext, hasPrev, hasNext }: {
  project: Project
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      {/* Backdrop */}
      <div className="modal-backdrop" />

      {/* Content container */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Prev / Next arrows */}
        {hasPrev && (
          <button
            type="button"
            onClick={onPrev}
            className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {hasNext && (
          <button
            type="button"
            onClick={onNext}
            className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* === Scrollable content === */}
        <div className="modal-scroll">

          {/* Hero area */}
          <div className="relative">
            {project.image ? (
              <div className="relative h-56 md:h-72 bg-secondary/30">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
              </div>
            ) : (
              <div className="h-40 md:h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
            )}
          </div>

          {/* Content wrapper */}
          <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20 -mt-8 relative">

            {/* Title + role */}
            <div className="mb-6">
              {project.role && (
                <div className="flex items-center gap-1.5 text-xs text-accent font-mono mb-2">
                  <FolderGit2 size={12} />
                  {project.role}
                </div>
              )}
              <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight">
                {project.title}
              </h2>
              <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>

            {/* ─── Impact Stats ─── */}
            {project.impact && project.impact.length > 0 && (
              <div className="mb-10">
                <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Impact & Results
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.impact.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-surface border border-border rounded-xl p-4 hover:border-primary/40 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-primary/10">
                          <ImpactIcon icon={stat.icon} className="text-primary" />
                        </div>
                      </div>
                      <p className="text-lg md:text-xl font-heading font-bold text-foreground leading-none mb-1">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-muted-foreground font-mono">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─── What was built ─── */}
            {project.details && project.details.length > 0 && (
              <div className="mb-10">
                <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  What Was Built
                </h3>
                <ul className="space-y-3">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0 text-[10px]">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ─── Links ─── */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono hover:bg-secondary/80 transition-colors duration-200"
                >
                  <Github size={16} />
                  View Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-mono hover:bg-primary/90 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Projects Section ─── */

export function Projects() {
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.05 })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openModal = useCallback((index: number) => setActiveIndex(index), [])
  const closeModal = useCallback(() => setActiveIndex(null), [])
  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
  }, [])
  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev !== null && prev < projects.length - 1 ? prev + 1 : prev))
  }, [])

  const activeProject = activeIndex !== null ? projects[activeIndex] : null

  return (
    <>
      <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div ref={ref} className={cn(isVisible && 'is-visible')}>
          <h2 className="animate-fade-in-up text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="animate-fade-in-up animation-delay-200 text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Click a project to see the full breakdown — impact metrics, what was built, and results.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onClick={() => openModal(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal rendered at root level for proper overlay */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={closeModal}
          onPrev={prevProject}
          onNext={nextProject}
          hasPrev={activeIndex !== null && activeIndex > 0}
          hasNext={activeIndex !== null && activeIndex < projects.length - 1}
        />
      )}
    </>
  )
}
