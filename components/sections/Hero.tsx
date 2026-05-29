'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, Download, Mail } from 'lucide-react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative bg-mesh">
      {/* Decorative glow — subtle pulse */}
      <div className={cn(
        "absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none transition-opacity duration-1000",
        mounted ? "opacity-100" : "opacity-0"
      )} />

      <div className="relative z-10 max-w-3xl">
        <p className={cn(
          "text-accent font-mono text-sm mb-4 tracking-wider transition-all duration-700 ease-out",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          Hello, I&apos;m
        </p>

        <h1 className={cn(
          "text-5xl md:text-7xl font-heading font-bold mb-6 transition-all duration-700 ease-out delay-150",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <span className="text-gradient">Chino Vicente</span>
        </h1>

        <p className={cn(
          "text-xl md:text-2xl text-muted-foreground mb-4 font-heading transition-all duration-700 ease-out",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )} style={{ transitionDelay: '300ms' }}>
          Business Automation Specialist &amp; Salesforce Developer
        </p>

        <p className={cn(
          "text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10 transition-all duration-700 ease-out",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )} style={{ transitionDelay: '450ms' }}>
          Certified Salesforce Admin and Platform App Builder with 5+ years of experience
          implementing solutions across Sales, Service, and Experience Clouds. Expert in
          automation strategy using Make.com, n8n, AI, and GHL.
        </p>

        <div className={cn(
          "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )} style={{ transitionDelay: '600ms' }}>
          <a
            href="#contact"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
              'bg-primary text-primary-foreground font-medium',
              'hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25'
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
              'hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10'
            )}
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator — enhanced with float */}
      <div className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )} style={{ transitionDelay: '900ms' }}>
        <div className="animate-bounce">
          <ChevronDown size={24} className="text-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
