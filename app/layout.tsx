import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kunwar Ayush Pratap Singh - Full-Stack Developer',
  description: 'Full-Stack Developer specializing in Next.js & MERN — I build high-performance web applications and SaaS platforms that ship fast and scale.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'MERN Stack', 'IIIT Una', 'Web Development', 'AI Integration'],
  authors: [{ name: 'Kunwar Ayush Pratap Singh' }],
  icons: {
    icon: [
      {
        url: '/icon.svg?v=1',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.svg?v=1',
  },
  openGraph: {
    title: 'Kunwar Ayush Pratap Singh - Full-Stack Developer',
    description: 'B.Tech IT student at IIIT Una. Full-stack developer building impactful web applications and emergency response systems.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
