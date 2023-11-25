import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anivawe Pro',
  description: 'Build an anime web app with nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  )
}
