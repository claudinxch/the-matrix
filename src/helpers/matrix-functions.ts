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

export const sumMatrices = (arr1: number[][], arr2: number[][]): number[][] => {
  return arr1.map((row, i) => row.map((value, j) => value + arr2[i][j]))
}

export const subtractMatrices = (
  arr1: number[][],
  arr2: number[][],
): number[][] => {
  return arr1.map((row, i) => row.map((value, j) => value - arr2[i][j]))
}

export const multiplyMatrices = (
  arr1: number[][],
  arr2: number[][],
): number[][] => {
  const multipliedArr: number[][] = []

  for (let i = 0; i < arr1.length; i++) {
    const row: number[] = []
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j]
      }
      row.push(sum)
    }
    multipliedArr.push(row)
  }

  return multipliedArr
}
