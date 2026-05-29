'use client'

import { useInView } from '@/hooks/useInView'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const socialLinks = [
  { platform: 'Email', url: 'mailto:chinovicente312@gmail.com', icon: Mail },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/chinovicente', icon: Linkedin },
  { platform: 'Trailhead', url: 'https://www.salesforce.com/trailblazer/chinovicente', icon: ExternalLink },
  { platform: 'GitHub', url: 'https://github.com/exor312', icon: Github },
]

export function Contact() {
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div ref={ref} className={cn(isVisible && 'is-visible', "max-w-2xl mx-auto text-center")}>
        <h2 className="animate-fade-in-up text-3xl md:text-4xl font-heading font-bold mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="animate-fade-in-up animation-delay-200 text-muted-foreground mb-10">
          I&apos;m always open to new opportunities, collaborations, or just a friendly chat.
          Feel free to reach out!
        </p>

        <div className="animate-scale-in animation-delay-400 mb-10">
          <a
            href="mailto:chinovicente312@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 animate-pulse-glow"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-muted-foreground hover:text-foreground p-3 rounded-xl hover:bg-surface border border-transparent hover:border-border transition-all duration-300 hover:scale-110 animate-fade-in-up",
                  i > 0 && `animation-delay-${Math.min((i + 1) * 100, 500)}`
                )}
                aria-label={link.platform}
              >
                <Icon size={22} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
