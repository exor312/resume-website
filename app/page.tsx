import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Chino Vicente | Business Automation Specialist & Salesforce Developer',
  description: 'Personal portfolio of Chino Vicente — Salesforce Certified Admin, Platform App Builder, and Business Automation Specialist. 5+ years of experience in Salesforce, n8n, Make.com, and AI-powered workflow automation.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
