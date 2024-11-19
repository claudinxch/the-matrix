import { TopicContent } from '@/components/learn/topic-content'

export default function Learn({
  searchParams,
}: {
  searchParams: { topic: string }
}) {
  return <TopicContent topic={searchParams.topic || 'introduction'} />
}
