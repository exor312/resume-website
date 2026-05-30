'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggle: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  // On mount, read saved preference or default to dark
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
    }
    setMounted(true)
  }, [])

  // Apply class to <html>
  useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  // Prevent flash — don't render until we know the theme
  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
