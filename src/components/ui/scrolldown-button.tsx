'use client'

import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export function ScrollDownButton() {
  const scrollToSection = () => {
    let pixelsToScroll

    if (window.innerWidth < 640) {
      pixelsToScroll = 900
    } else {
      pixelsToScroll = 700
    }
    const currentPosition = document.documentElement.scrollTop
    const targetPosition = currentPosition + pixelsToScroll

    window.scrollTo({ top: targetPosition, behavior: 'smooth' })
  }
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full animate-bounce"
      onClick={scrollToSection}
    >
      <ArrowDown className="text-yellow" />
    </Button>
  )
}
