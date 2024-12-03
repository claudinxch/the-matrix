export const compareMatrices = (matrix1: number[][], matrix2: number[][]) => {
  if (
    matrix1.length !== matrix2.length ||
    matrix1[0].length !== matrix2[0].length
  ) {
    return false
  }

  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) return false
    }
  }

  return true
}

export const sumMatrices = (
  matrix1: number[][],
  matrix2: number[][],
): number[][] => {
  return matrix1.map((row, i) => row.map((value, j) => value + matrix2[i][j]))
}

export const subtractMatrices = (
  matrix: number[][],
  matrix2: number[][],
): number[][] => {
  return matrix.map((row, i) => row.map((value, j) => value - matrix2[i][j]))
}

export const multiplyMatrices = (
  matrix1: number[][],
  matrix2: number[][],
): number[][] => {
  const multipliedMatrix: number[][] = []

  for (let i = 0; i < matrix1.length; i++) {
    const row: number[] = []
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0
      for (let k = 0; k < matrix2.length; k++) {
        sum += matrix1[i][k] * matrix2[k][j]
      }
      row.push(sum)
    }
    multipliedMatrix.push(row)
  }

  return multipliedMatrix
}

export const multiplyMatriceByScalar = (
  matrix: number[][],
  scalar: number,
): number[][] => {
  return matrix.map((row) => row.map((value) => value * scalar))
}
