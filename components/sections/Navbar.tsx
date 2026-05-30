'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function ThemeToggle({ compact }: { compact?: boolean }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative rounded-full border border-border transition-all duration-300',
        'hover:border-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        compact
          ? 'p-2'
          : 'w-16 h-8 p-1'
      )}
    >
      {/* Track background */}
      <span className={cn(
        'absolute inset-0 rounded-full transition-colors duration-300',
        isDark
          ? 'bg-secondary'
          : 'bg-amber-100'
      )} />

      {/* Thumb / icon */}
      {compact ? (
        <span className="relative z-10 block">
          {isDark ? <Moon size={16} /> : <Sun size={16} className="text-amber-500" />}
        </span>
      ) : (
        <span
          className={cn(
            'relative z-10 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300',
            isDark
              ? 'translate-x-0 bg-gray-700'
              : 'translate-x-8 bg-amber-400'
          )}
        >
          {isDark
            ? <Moon size={14} className="text-gray-300" />
            : <Sun size={14} className="text-amber-900" />
          }
        </span>
      )}
    </button>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 h-16 border-b border-border/50 bg-background/80 backdrop-blur-md flex items-center justify-between px-6 transition-all duration-300'
      )}
    >
      <a href="#" className="text-xl font-heading font-bold text-gradient">
        {'<SH />'}
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right side: desktop theme toggle + mobile hamburger */}
      <div className="flex items-center gap-3">
        {/* Desktop theme toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile theme toggle */}
            <div className="pt-2 border-t border-border/50 w-full flex justify-center">
              <ThemeToggle compact />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
