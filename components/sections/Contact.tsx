import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const socialLinks = [
  { platform: 'Email', url: 'mailto:chinovicente312@gmail.com', icon: Mail },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/chinovicente', icon: Linkedin },
  { platform: 'Trailhead', url: 'https://www.salesforce.com/trailblazer/chinovicente', icon: ExternalLink },
  { platform: 'GitHub', url: 'https://github.com/exor312', icon: Github },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          I&apos;m always open to new opportunities, collaborations, or just a friendly chat.
          Feel free to reach out!
        </p>

        <a
          href="mailto:chinovicente312@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors glow-primary mb-10"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-3 rounded-xl hover:bg-surface border border-transparent hover:border-border"
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
