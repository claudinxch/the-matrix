'use client'

import { useState } from 'react'
import { Matrix } from '../matrix/matrix'
import { Button } from '../ui/button'
import { AIExplanation } from './ai-explanation'
import { Question } from './question'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {}

export function GameWrapper() {
  const [gameStart, setGameStart] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [getAnswer, setGetAnswer] = useState(false)

  const handleVerifyAnswer = () => {
    setIsLoading(true)
    setGetAnswer(true)
  }

  return (
    <AnimatePresence mode="wait">
      {!gameStart ? (
        <Button
          variant={'outline'}
          className="text-green h-20 w-60 text-2xl font-light rounded-xl dark:text-green transition-all [box-shadow:0px_1px_1px_#008f11] active:translate-y-[2px] active:!shadow-none"
          onClick={() => setGameStart(true)}
        >
          Iniciar
        </Button>
      ) : (
        <motion.div
          key="game-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4 }}
        >
          <div className="border rounded-lg px-8 py-6 flex flex-col gap-6">
            <Question
              questionNumber={1}
              questionDescription="Qual o resultado da matriz 2 dividida por 4 que ao ficar gigantesca se compara ao tamanho da minha piroca imensa?"
            />

            <div className="flex flex-col gap-6 md:flex-row">
              <Matrix cols={4} rows={4} matrixPosition={'resultado'} />

              <AnimatePresence mode="wait">
                {!getAnswer ? (
                  <motion.div
                    key="verify-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full flex items-center md:justify-center"
                  >
                    <Button
                      variant={'outline'}
                      className="w-1/2 h-20 rounded-lg text-green hover:text-green"
                      onClick={handleVerifyAnswer}
                    >
                      Verificar resposta
                    </Button>
                  </motion.div>
                ) : (
                  <AIExplanation
                    isCorrect={isCorrect}
                    setIsCorrect={setIsCorrect}
                    message="bla bla bla"
                    explanation="that is the explanation"
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
