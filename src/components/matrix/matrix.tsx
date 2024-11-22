'use client'
import type { Matrix } from '../core/operation'

interface Props extends Matrix {
  matrixPosition: number | 'resultado' | 'scalar'
  handleSetMatrix: (
    row: number,
    col: number,
    value: number,
    matrixPosition?: number | 'resultado',
  ) => void
}

export function Matrix({
  matrixPosition,
  cols,
  rows,
  data,
  handleSetMatrix,
}: Props) {
  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    value: number,
  ) => {
    if (matrixPosition === 'scalar') {
      handleSetMatrix(rowIndex, colIndex, value, 2)
      return
    }
    handleSetMatrix(rowIndex, colIndex, value, matrixPosition)
  }

  return (
    <div className="flex flex-col gap-3 min-w-fit items-center md:items-start">
      <h4 className="text-green font-semibold text-lg">
        Matriz {matrixPosition !== 'scalar' && matrixPosition}
      </h4>
      <div
        className={`${cols > 0 && rows > 0 ? '' : 'hidden'} overflow-hidden border-zinc-300 dark:border-zinc-800`}
      >
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="w-12 h-12 flex items-center justify-center border border-zinc-300 dark:border-zinc-800"
              >
                <input
                  type="number"
                  className="w-full h-full text-center focus:outline-none"
                  value={cell}
                  onChange={(e) =>
                    handleCellChange(
                      rowIndex,
                      cellIndex,
                      e.target.valueAsNumber,
                    )
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function MatrixAnswer({ data }: Pick<Props, 'data'>) {
  return (
    <div className="flex flex-col gap-3 min-w-44">
      <div
        className={`${data[0].length > 0 && data.length > 0 ? '' : 'hidden'} overflow-hidden border-zinc-300 dark:border-zinc-800`}
      >
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="w-12 h-12 flex items-center justify-center border border-zinc-300 dark:border-zinc-800"
              >
                <input
                  type="number"
                  className="w-full h-full text-center focus:outline-none"
                  defaultValue={cell}
                  disabled
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
