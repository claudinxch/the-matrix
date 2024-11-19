'use client'

import { useState } from 'react'
import { Matrix } from '../matrix/matrix'
import { Button } from '../ui/button'
import { AIExplanation } from './ai-explanation'
import { Question } from './question'
import { AnimatePresence, motion } from 'framer-motion'
import { questions } from '@/mocks/questions'
import { ArrowRight } from 'lucide-react'
import type { Matrix as MatrixType } from '../core/operation'

export function GameWrapper() {
  const [gameStart, setGameStart] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [getAnswer, setGetAnswer] = useState(false)
  const [questionNumber, setQuestionNumber] = useState(0)

  const [matrix, setMatrix] = useState<MatrixType>({
    rows: questions[questionNumber].answer.length,
    cols: questions[questionNumber].answer[0].length,
    data: Array(questions[questionNumber].answer.length)
      .fill(0)
      .map(() => Array(questions[questionNumber].answer[0].length).fill(0)),
  })

  const handleVerifyAnswer = () => {
    setIsLoading(true)
    setGetAnswer(true)
  }

  const handleNextQuestion = () => {
    const nextQuestion = questions[questionNumber + 1]
    const rows = nextQuestion.answer.length
    const cols = nextQuestion.answer[0].length

    setMatrix({
      rows,
      cols,
      data: Array(rows)
        .fill(0)
        .map(() => Array(cols).fill(0)), // Initialize with zeros
    })
    setQuestionNumber((prev) => prev + 1)
    setGetAnswer(false)
  }

  const handleSetMatrix = (
    rowIndex: number,
    colIndex: number,
    value: number,
  ) => {
    setMatrix((prevMatrix) => {
      const updatedData = [...prevMatrix.data]
      if (!updatedData[rowIndex]) {
        updatedData[rowIndex] = Array(prevMatrix.cols).fill(0)
      }
      updatedData[rowIndex][colIndex] = value
      return { ...prevMatrix, data: updatedData }
    })
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
          <div className="border rounded-lg px-8 py-6 flex flex-col md:w-[1100px] gap-6">
            <Question
              questionNumber={questionNumber + 1}
              questionDescription={questions[questionNumber].questionDesc}
            />

            <div className="flex flex-col gap-6 md:flex-row">
              <Matrix
                cols={matrix.cols}
                rows={matrix.rows}
                data={matrix.data}
                handleSetMatrix={handleSetMatrix}
                matrixPosition={'resultado'}
              />

              <AnimatePresence mode="wait">
                {!getAnswer ? (
                  <motion.div
                    key="verify-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full flex items-center justify-between md:justify-end md:self-end md:gap-6"
                  >
                    <Button
                      variant={'outline'}
                      className="w-48 h-20 rounded-lg text-green hover:text-green"
                      onClick={handleVerifyAnswer}
                    >
                      Verificar resposta
                    </Button>

                    <Button
                      variant={'outline'}
                      className="w-48 h-20  rounded-lg text-green hover:text-green"
                      onClick={handleNextQuestion}
                      disabled
                    >
                      Próxima <ArrowRight />
                    </Button>
                  </motion.div>
                ) : (
                  <AIExplanation
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    handleNextQuestion={handleNextQuestion}
                    answer={matrix.data}
                    expectedAnswer={questions[questionNumber].answer}
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
