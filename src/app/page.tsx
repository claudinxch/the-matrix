import type { Metadata } from 'next'
import { OperationsTabs } from '@/components/core/operations-tabs'
import { Hero } from '@/components/hero'

export const metadata: Metadata = {
  title: 'The Matrix | Operações',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-16 py-10 px-6 items-center md:items-start md:py-16 md:px-24">
      <Hero />
      <OperationsTabs />
    </main>
  )
}
