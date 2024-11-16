'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '../ui/button'

interface Props {
  isCorrect?: boolean
  setIsCorrect: (isCorrect: boolean) => void
  message: string
  explanation?: string
  isLoading?: boolean
  setIsLoading: (isLoading: boolean) => void
}

export function AIExplanation({
  isCorrect,
  setIsCorrect,
  message,
  explanation,
  isLoading,
  setIsLoading,
}: Props) {
  const [seeExplanation, setSeeExplanation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setIsCorrect(false)
    }, 1500)
  }, [setIsCorrect, setIsLoading])

  // Animation variants for the main container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        duration: 0.5,
        bounce: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  }

  // Animation variants for the explanation
  const explanationVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.6,
        bounce: 0.3,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="p-4 w-full"
      >
        <div className="flex justify-center items-center p-4 rounded-lg mt-6 h-full border gap-2">
          <div className="w-6 h-6 rounded-full border-2 border-green border-t-transparent animate-spin" />
          <span className="text-dark-gray dark:text-light-gray text-lg">
            Verificando resposta...
          </span>
        </div>
      </motion.div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="answer-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="p-4 w-full mt-6"
      >
        <div
          className={twMerge(
            'p-4 rounded-lg border',
            isCorrect ? 'border-green' : 'border-red-600',
          )}
        >
          <div
            className={`flex items-center gap-2 mb-2 ${
              isCorrect ? 'text-green' : 'text-red-600'
            }`}
          >
            {isCorrect ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            )}
            <span className="font-medium">
              {isCorrect ? 'Correto!' : 'Incorreto'}
            </span>
          </div>

          <p className="text-gray-700 mb-2">{message}</p>

          {!seeExplanation ? (
            <motion.div
              key="explanation-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant={'outline'}
                size={'lg'}
                className="font-semibold text-green hover:text-green transition-all [box-shadow:0px_1px_1px_#008f11] active:translate-y-[2px] active:!shadow-none"
                onClick={() => setSeeExplanation(true)}
              >
                Ver explicação da IA
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="explanation-content"
              variants={explanationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mt-4 p-3 bg-gray-50 rounded-md border">
                <h3 className="font-medium mb-2">Explicação:</h3>
                <p className="text-gray-600">{explanation}</p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
