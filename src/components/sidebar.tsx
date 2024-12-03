'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const topics = [
  {
    title: 'Começando',
    items: [
      { title: 'Introduction', slug: 'introduction' },
      { title: 'Basic Operations', slug: 'basic-operations' },
    ],
  },
  {
    title: 'Matrix Operations',
    items: [
      { title: 'Addition', slug: 'addition' },
      { title: 'Multiplication', slug: 'multiplication' },
      { title: 'Determinant', slug: 'determinant' },
    ],
  },
]

interface Props {
  className?: string
}

export function Sidebar({ className }: Props) {
  const searchParams = useSearchParams()
  const currentTopic = searchParams.get('topic') || 'introduction'

  return (
    <nav className={twMerge('flex flex-col gap-4', className)}>
      {topics.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-100 mb-2">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/learn?topic=${item.slug}`}
                  className={twMerge(
                    'block px-3 py-2 rounded-md text-left text-sm text-zinc-800 font-normal dark:text-zinc-100 transition-all duration-200',
                    currentTopic === item.slug
                      ? 'bg-zinc-200/50 dark:bg-zinc-800 dark:text-green font-medium'
                      : 'hover:bg-zinc-200/50 dark:hover:bg-zinc-800',
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
