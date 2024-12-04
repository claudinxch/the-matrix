'use client'

import { Suspense } from 'react'
import { Sidebar } from '@/components/sidebar'

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen px-6 md:items-center md:justify-center">
      <Suspense fallback={<div>Loading sidebar...</div>}>
        <Sidebar className="w-64 px-4 py-8 hidden md:flex md:py-16 md:self-start" />
      </Suspense>
      <main className="flex min-h-screen flex-col gap-16 px-6 py-10 items-center md:items-start md:py-20">
        {children}
      </main>
    </div>
  )
}
