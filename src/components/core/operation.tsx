'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { NumberInput } from '@/components/ui/number-input'
import { Separator } from '@/components/ui/separator'
import { Matrix } from '@/components/matrix/matrix'
import { useState, MouseEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Equal, Minus, Plus, X } from 'lucide-react'
import {
  multiplyMatrices,
  subtractMatrices,
  sumMatrices,
} from '@/helpers/matrix-functions'
import { twMerge } from 'tailwind-merge'
import { validateMatrixOperation } from '@/helpers/validate-matrix'

interface Props {
  operation: 'sum' | 'subtraction' | 'multiplication' | 'scalar'
}

export interface Matrix {
  rows: number
  cols: number
  data: number[][]
}

export function Operation({ operation }: Props) {
  const [tempMatrix1, setTempMatrix1] = useState<Omit<Matrix, 'data'>>({
    rows: 0,
    cols: 0,
  })
  const [tempMatrix2, setTempMatrix2] = useState<Omit<Matrix, 'data'>>({
    rows: 0,
    cols: 0,
  })
  const [matrix1, setMatrix1] = useState<Matrix>({ rows: 0, cols: 0, data: [] })
  const [matrix2, setMatrix2] = useState<Matrix>({ rows: 0, cols: 0, data: [] })
  const [isMatrixGenerated, setIsMatrixGenerated] = useState(false)
  const [result, setResult] = useState<Matrix>({ rows: 0, cols: 0, data: [] })
  const [validationError, setValidationError] = useState<string | null>(null)

  const generateMatrices = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const isValidOperation = validateMatrixOperation(
      operation,
      { rows: tempMatrix1.rows, cols: tempMatrix1.cols },
      { rows: tempMatrix2.rows, cols: tempMatrix2.cols },
    )

    if (Array.isArray(isValidOperation)) {
      setValidationError(isValidOperation[0])
      return
    }

    setValidationError(null)

    setMatrix1({
      ...tempMatrix1,
      data: Array(tempMatrix1.rows)
        .fill(0)
        .map(() => Array(tempMatrix1.cols).fill(0)),
    })
    setMatrix2({
      ...tempMatrix2,
      data: Array(tempMatrix2.rows)
        .fill(0)
        .map(() => Array(tempMatrix2.cols).fill(0)),
    })
    operation === 'sum' || operation === 'subtraction'
      ? setResult({
          rows: tempMatrix1.rows,
          cols: tempMatrix1.cols,
          data: Array(tempMatrix1.rows)
            .fill(0)
            .map(() => Array(tempMatrix1.cols).fill(0)),
        })
      : setResult({
          rows: tempMatrix1.rows,
          cols: tempMatrix2.cols,
          data: Array(tempMatrix1.rows)
            .fill(0)
            .map(() => Array(tempMatrix2.cols).fill(0)),
        })
    setIsMatrixGenerated(true)
  }

  const handleSetMatrix = (
    rowIndex: number,
    colIndex: number,
    value: number,
    matrixPosition?: number | 'resultado',
  ) => {
    if (matrixPosition === 1) {
      setMatrix1((prevMatrix) => {
        const updatedData = [...prevMatrix.data]
        if (!updatedData[rowIndex]) {
          updatedData[rowIndex] = Array(prevMatrix.cols).fill(0)
        }
        updatedData[rowIndex][colIndex] = value
        return { ...prevMatrix, data: updatedData }
      })
    } else if (matrixPosition === 2) {
      setMatrix2((prevMatrix) => {
        const updatedData = [...prevMatrix.data]
        if (!updatedData[rowIndex]) {
          updatedData[rowIndex] = Array(prevMatrix.cols).fill(0)
        }
        updatedData[rowIndex][colIndex] = value
        return { ...prevMatrix, data: updatedData }
      })
    }
  }

  const handleCalculation = () => {
    operation === 'sum'
      ? setResult({ ...result, data: sumMatrices(matrix1.data, matrix2.data) })
      : operation === 'subtraction'
        ? setResult({
            ...result,
            data: subtractMatrices(matrix1.data, matrix2.data),
          })
        : operation === 'multiplication'
          ? setResult({
              ...result,
              data: multiplyMatrices(matrix1.data, matrix2.data),
            })
          : console.log('alo')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={twMerge('w-full', validationError && 'min-h-[360px]')}>
        <CardHeader>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-green">
              {operation === 'sum'
                ? 'Adição'
                : operation === 'subtraction'
                  ? 'Subtração'
                  : operation === 'multiplication'
                    ? 'Multiplicação'
                    : 'Multiplicação por escalar'}
            </CardTitle>
            <CardDescription>
              Insira os valores para realizar a{' '}
              {operation === 'sum'
                ? 'adição'
                : operation === 'subtraction'
                  ? 'subtração'
                  : operation === 'multiplication'
                    ? 'multiplicação'
                    : 'multiplicação por escalar'}
              .
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col gap-8 relative md:flex-row">
          <motion.form
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={twMerge(
              'flex flex-col md:flex-row gap-16',
              isMatrixGenerated ? 'md:w-fit' : 'md:w-full',
            )}
          >
            <div
              className={`flex flex-col md:flex-row space-y-8 md:space-y-0 md:w-full ${isMatrixGenerated ? 'md:gap-8' : 'md:justify-between'}`}
            >
              <motion.div
                variants={itemVariants}
                className={`flex flex-col space-y-8 ${isMatrixGenerated ? 'md:w-40' : 'md:w-72'}`}
              >
                <NumberInput
                  label="Linhas da matriz 1"
                  onChange={(e) =>
                    setTempMatrix1({
                      ...tempMatrix1,
                      rows: e.target.value === '' ? 0 : e.target.valueAsNumber,
                    })
                  }
                />
                <NumberInput
                  label="Colunas da matriz 1"
                  onChange={(e) =>
                    setTempMatrix1({
                      ...tempMatrix1,
                      cols: e.target.value === '' ? 0 : e.target.valueAsNumber,
                    })
                  }
                />
              </motion.div>
              <Separator
                orientation="vertical"
                className="h-[80%] hidden md:flex"
              />
              <Separator className="md:w-60 md:hidden" />
              <motion.div
                variants={itemVariants}
                className={`flex flex-col space-y-8 ${isMatrixGenerated ? 'md:w-40' : 'md:w-72'}`}
              >
                <NumberInput
                  label="Linhas da matriz 2"
                  onChange={(e) =>
                    setTempMatrix2({
                      ...tempMatrix2,
                      rows: e.target.value === '' ? 0 : e.target.valueAsNumber,
                    })
                  }
                />
                <NumberInput
                  label="Colunas da matriz 2"
                  onChange={(e) =>
                    setTempMatrix2({
                      ...tempMatrix2,
                      cols: e.target.value === '' ? 0 : e.target.valueAsNumber,
                    })
                  }
                />
                {validationError && (
                  <p
                    className={twMerge(
                      'absolute text-red-600 left-5 font-semibold text-pretty hidden md:block',
                      isMatrixGenerated
                        ? 'max-w-64 -bottom-1'
                        : 'max-w-[540px] bottom-6',
                    )}
                  >
                    {validationError}
                  </p>
                )}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-end"
                >
                  <Button
                    variant={'outline'}
                    className="text-green hover:text-green hidden md:flex min-w-fit w-1/2 self-end transition-all [box-shadow:0px_1px_1px_#008f11] active:translate-y-[2px] active:!shadow-none"
                    onClick={(e) => generateMatrices(e)}
                  >
                    Gerar matrizes
                  </Button>
                </motion.div>
              </motion.div>
              <Button
                variant={'outline'}
                className="text-green hover:text-green md:hidden"
                onClick={(e) => generateMatrices(e)}
              >
                Gerar matrizes
              </Button>
              {validationError && (
                <p
                  className={twMerge(
                    'text-red-600 font-semibold text-center text-pretty max-w-full md:hidden',
                  )}
                >
                  {validationError}
                </p>
              )}
            </div>
          </motion.form>

          <AnimatePresence>
            {isMatrixGenerated && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-16"
                onKeyDown={(e) => {
                  e.key === 'Enter' && handleCalculation()
                }}
              >
                <Matrix
                  matrixPosition={1}
                  rows={matrix1.rows}
                  cols={matrix1.cols}
                  data={matrix1.data}
                  handleSetMatrix={handleSetMatrix}
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="md:self-center"
                >
                  {operation === 'sum' ? (
                    <span className="md:self-center">
                      <Plus color="#008F11" />
                    </span>
                  ) : operation === 'subtraction' ? (
                    <span className="md:self-center">
                      <Minus
                        className="block w-6 md:self-center"
                        color="#008F11"
                      />
                    </span>
                  ) : (
                    <span className="md:self-center">
                      <X className="block w-6 md:self-center" color="#008F11" />
                    </span>
                  )}
                </motion.div>

                <Matrix
                  matrixPosition={2}
                  rows={matrix2.rows}
                  cols={matrix2.cols}
                  data={matrix2.data}
                  handleSetMatrix={handleSetMatrix}
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="md:self-center"
                >
                  <Button
                    className="self-center"
                    variant={'outline'}
                    onClick={handleCalculation}
                  >
                    <Equal className="block md:self-center" color="#008F11" />
                  </Button>
                </motion.div>

                <Matrix
                  matrixPosition={'resultado'}
                  rows={result.rows}
                  cols={result.cols}
                  data={result.data}
                  handleSetMatrix={handleSetMatrix}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}
