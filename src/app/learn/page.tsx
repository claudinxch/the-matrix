import type { Metadata } from 'next'
import { TopicContent } from '@/components/learn/topic-content'

export const metadata: Metadata = {
  title: 'Aprenda',
}
export default function Learn({
  searchParams,
}: {
  searchParams: { topic: string }
}) {
  return <TopicContent topic={searchParams.topic || 'introduction'} />
}
