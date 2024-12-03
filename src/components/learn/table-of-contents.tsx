'use client'

import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { slugify } from '@/helpers/slugify'

interface TableOfContentsProps {
  sections: Array<{ title: string }>
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -35% 0px' },
    )

    sections.forEach(({ title }) => {
      const element = document.getElementById(slugify(title))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="space-y-1">
      <p className="font-medium mb-4 text-sm text-zinc-800 dark:text-zinc-500">
        Nesta página
      </p>
      {sections.map(({ title }) => {
        const slug = slugify(title)
        return (
          <a
            key={slug}
            href={`#${slug}`}
            className={twMerge(
              'block py-1 text-sm transition-colors text-zinc-600 dark:text-zinc-400',
              activeSection === slug
                ? 'dark:text-green font-medium'
                : 'hover:text-green',
            )}
          >
            {title}
          </a>
        )
      })}
    </nav>
  )
}
