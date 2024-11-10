import type { Matrix } from '../core/operation'

interface Props extends Matrix {
  matrixPosition: number | 'resultado'
}

export function Matrix({ matrixPosition, cols, rows }: Props) {
  const matrixValues = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(0))

  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    value: number,
  ) => {
    matrixValues[rowIndex][colIndex] = value
    console.log(matrixValues)
  }

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-green font-semibold text-lg">
        Matriz {matrixPosition}
      </h4>
      <div
        className={`${cols > 0 && rows > 0 ? '' : 'hidden'} overflow-hidden border-zinc-300 dark:border-zinc-800`}
      >
        {matrixValues.map((row, rowIndex) => (
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
