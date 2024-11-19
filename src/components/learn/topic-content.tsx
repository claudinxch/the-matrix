'use client'

import { learnContent } from '@/components/learn/matrix-content'
import { TableOfContents } from '@/components/learn/table-of-contents'
import { slugify } from '@/helpers/slugify'

interface TopicContentProps {
  topic: string
}

export function TopicContent({ topic }: TopicContentProps) {
  const content = learnContent[topic]
  if (!content) return null

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[705px,160px] gap-10">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
            {content.description && (
              <p className="text-lg text-gray-600">{content.description}</p>
            )}
          </div>

          {content.sections.map((section) => {
            const slug = slugify(section.title)
            return (
              <section key={slug} id={slug} className="scroll-mt-20">
                <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
                <div className="max-w-none">{section.content}</div>
              </section>
            )
          })}
        </div>

        <div className="relative hidden md:flex">
          <div className="sticky top-6">
            <TableOfContents sections={content.sections} />
          </div>
        </div>
      </div>
    </div>
  )
}
