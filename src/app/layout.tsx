import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/navbar/nav-bar'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/core/footer'

const vazirmatn = Vazirmatn({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'The Matrix',
    template: 'The Matrix | %s',
  },
  description: 'The best place to learn matrices!',
  openGraph: {
    title: 'The Matrix',
    description: 'Matrices made easy!',
    type: 'website',
    // url: 'cookbooked.com',
    siteName: 'The Matrix',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={vazirmatn.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
