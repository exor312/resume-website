'use client'

import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface AnimateSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'fade-in'
  delay?: number
  threshold?: number
}

export function AnimateSection({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.15,
}: AnimateSectionProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>({ threshold })

  const delayClass = delay > 0 ? `animation-delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={cn(
        isVisible && 'is-visible',
        className
      )}
    >
      <div className={cn(`animate-${animation}`, delayClass)}>
        {children}
      </div>
    </div>
  )
}
