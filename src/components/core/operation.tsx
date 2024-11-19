'use client'

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

  const generateMatrices = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
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
    setResult({
      rows: 3,
      cols: 3,
      data: Array(3)
        .fill(0)
        .map(() => Array(3).fill(0)),
    })
    setIsMatrixGenerated(true)
  }

  const handleSetMatrix = (
    matrixPosition: number,
    rowIndex: number,
    colIndex: number,
    value: number,
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

  return (
    <Card className="w-full">
      <CardHeader>
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
      </CardHeader>
      <CardContent className="flex flex-col gap-8 md:flex-row">
        <form className="flex flex-col md:flex-row gap-16 md:w-full">
          <div
            className={`flex flex-col md:flex-row space-y-8 md:space-y-0 md:w-full ${isMatrixGenerated ? 'md:gap-8' : 'md:justify-between'}`}
          >
            <div
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
            </div>
            <Separator
              orientation="vertical"
              className="h-[80%] hidden md:flex"
            />
            <Separator className="md:w-60 md:hidden" />
            <div
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
              <Button
                variant={'outline'}
                className="text-green hover:text-green hidden md:flex min-w-fit w-1/2 self-end transition-all [box-shadow:0px_1px_1px_#008f11] active:translate-y-[2px] active:!shadow-none"
                onClick={(e) => generateMatrices(e)}
              >
                Gerar matrizes
              </Button>
            </div>
            <Button
              variant={'outline'}
              className="text-green hover:text-green md:hidden"
              onClick={(e) => generateMatrices(e)}
            >
              Gerar matrizes
            </Button>
          </div>
        </form>
        {isMatrixGenerated && (
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* <div className="flex flex-col md:flex-row gap-8 md:gap-16"> */}
            <Matrix
              matrixPosition={1}
              rows={matrix1.rows}
              cols={matrix1.cols}
              data={matrix1.data}
              handleSetMatrix={() => handleSetMatrix}
            />

            {operation === 'sum' ? (
              <Plus className="self-center" />
            ) : operation === 'subtraction' ? (
              <Minus className="self-center" />
            ) : (
              <X className="self-center" />
            )}

            <Matrix
              matrixPosition={2}
              rows={matrix2.rows}
              cols={matrix2.cols}
              data={matrix2.data}
              handleSetMatrix={() => handleSetMatrix}
            />
            {/* </div> */}
            {/* <div className="flex flex-col gap-8 md:flex-row md:gap-16"> */}
            <Equal className="self-center" />
            <Matrix
              matrixPosition={'resultado'}
              rows={result.rows}
              cols={result.cols}
              data={result.data}
              handleSetMatrix={() => handleSetMatrix}
            />
            {/* </div> */}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
