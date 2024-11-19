'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function OperationsTabsAnimation({ children }: { children: ReactNode }) {
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={tabVariants}>
      {children}
    </motion.div>
  )
}
