import { ModeToggle } from '@/components/mode-toggle'

export default function Footer() {
  return (
    <footer className="border sticky top-full">
      <div className="container h-16 gap-1  flex items-center">
        <p className="text-muted-foreground">&copy; kame</p>
        <span className="flex-1" />
        <ModeToggle />
        <p>🌅</p>
      </div>
    </footer>
  )
}
