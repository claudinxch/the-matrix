interface Question {
  id: number
  questionDesc: string
  answer: number[][]
}

export const questions: Question[] = [
  {
    id: 1,
    questionDesc: 'Qual é a matriz identidade de ordem 2?',
    answer: [
      [1, 0],
      [0, 1],
    ],
  },
  {
    id: 2,
    questionDesc:
      'Qual é o resultado da soma das matrizes [[1, 2], [3, 4]] e [[4, 3], [2, 1]]?',
    answer: [
      [5, 5],
      [5, 5],
    ],
  },
  {
    id: 3,
    questionDesc: 'Qual é a transposta da matriz [[1, 2, 3], [4, 5, 6]]?',
    answer: [
      [1, 4],
      [2, 5],
      [3, 6],
    ],
  },
  {
    id: 4,
    questionDesc:
      'Qual é o resultado da multiplicação da matriz [[1, 2], [3, 4]] por 2?',
    answer: [
      [2, 4],
      [6, 8],
    ],
  },
  {
    id: 5,
    questionDesc: 'Qual é a matriz nula de ordem 3?',
    answer: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
]
