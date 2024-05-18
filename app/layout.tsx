import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from './components/footer'
import Header from './components/header'
import { cn } from '@/lib/utils'
import Sidebar from './components/side-bar'
import { AppConfig } from './app.config'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={cn('h-dvh flex flex-col', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <Header />
          </Suspense>
          <main className="flex flex-1">
            <Suspense>
              <Sidebar />
            </Suspense>
            <div className="flex-1 bg-muted/30">
              <Suspense>{children}</Suspense>
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
