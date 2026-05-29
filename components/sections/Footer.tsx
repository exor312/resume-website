'use client'

import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

export function Footer() {
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <footer ref={ref} className={cn("border-t border-border py-8 text-center text-sm text-muted-foreground", isVisible && 'is-visible')}>
      <p className="animate-fade-in">
        © {new Date().getFullYear()} Chino Vicente. Built with{' '}
        <span className="text-primary">Next.js</span> &amp;{' '}
        <span className="text-accent">Tailwind CSS</span>.
      </p>
    </footer>
  )
}
