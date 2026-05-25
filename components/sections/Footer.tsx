export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} Your Name. Built with{' '}
        <span className="text-primary">Next.js</span> &amp;{' '}
        <span className="text-accent">Tailwind CSS</span>.
      </p>
    </footer>
  )
}
