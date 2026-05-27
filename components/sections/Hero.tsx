import { cn } from '@/lib/utils'
import { ChevronDown, Download, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative bg-mesh">
      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-accent font-mono text-sm mb-4 tracking-wider">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
          <span className="text-gradient">Chino Vicente</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-heading">
          Business Automation Specialist &amp; Salesforce Developer
        </p>

        <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10">
          Certified Salesforce Admin and Platform App Builder with 5+ years of experience
          implementing solutions across Sales, Service, and Experience Clouds. Expert in
          automation strategy using Make.com, n8n, AI, and GHL.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
              'bg-primary text-primary-foreground font-medium',
              'hover:bg-primary/90 transition-colors glow-primary'
            )}
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="/Chino_Vicente_CV_-_Automation.pdf"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
              'border border-border text-foreground font-medium',
              'hover:border-primary/50 transition-colors'
            )}
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-muted-foreground/50" />
      </div>
    </section>
  )
}
