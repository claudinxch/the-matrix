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
  {
    id: 6,
    questionDesc:
      'Qual é o resultado da soma de [[1, 2, 3], [4, 5, 6]] e [[7, 8, 9], [1, 0, -1]]?',
    answer: [
      [8, 10, 12],
      [5, 5, 5],
    ],
  },
  {
    id: 7,
    questionDesc:
      'Qual é o produto escalar da matriz [[1, 3], [2, 4]] multiplicada por 3?',
    answer: [
      [3, 9],
      [6, 12],
    ],
  },
  {
    id: 8,
    questionDesc: 'Qual é a matriz identidade de ordem 4?',
    answer: [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
  },
  {
    id: 9,
    questionDesc:
      'Qual é o resultado da subtração da matriz [[5, 6], [7, 8]] por [[2, 1], [3, 4]]?',
    answer: [
      [3, 5],
      [4, 4],
    ],
  },
  {
    id: 10,
    questionDesc: 'Qual é o determinante da matriz [[4, 7], [2, 6]]?',
    answer: [[10]],
  },
  {
    id: 11,
    questionDesc:
      'Qual é o resultado da multiplicação da matriz [[2, 0], [1, 3]] por [[3, 1], [0, 2]]?',
    answer: [
      [6, 2],
      [3, 7],
    ],
  },
  {
    id: 11,
    questionDesc:
      'Qual é o resultado da multiplicação da matriz [[1, 2, 3]] por 5?',
    answer: [[5, 10, 15]],
  },
  {
    id: 12,
    questionDesc:
      'Qual é o resultado da soma de [[2, 3], [4, 5]] com a matriz identidade de ordem 2?',
    answer: [
      [3, 3],
      [4, 6],
    ],
  },
  {
    id: 13,
    questionDesc:
      'Qual é o resultado da multiplicação da matriz [[1, 2], [3, 4]] pela matriz identidade de ordem 2?',
    answer: [
      [1, 2],
      [3, 4],
    ],
  },
  {
    id: 14,
    questionDesc:
      'Qual é o resultado da soma de [[1, -1, 0], [2, 3, -3]] e [[0, 4, 2], [-1, 0, 5]]?',
    answer: [
      [1, 3, 2],
      [1, 3, 2],
    ],
  },
  {
    id: 15,
    questionDesc: 'Qual é a transposta da matriz [[5, 3], [2, 6], [1, 4]]?',
    answer: [
      [5, 2, 1],
      [3, 6, 4],
    ],
  },
  {
    id: 16,
    questionDesc:
      'Qual é o determinante da matriz [[2, 1, 0], [4, 3, 2], [1, 5, 6]]?',
    answer: [[10]],
  },
  {
    id: 17,
    questionDesc:
      'Qual é o resultado da multiplicação da matriz [[1, 2], [3, 4]] por [[0, 1], [1, 0]]?',
    answer: [
      [2, 1],
      [4, 3],
    ],
  },
  {
    id: 18,
    questionDesc:
      'Qual é o resultado da matriz [[2, 4], [1, 3]] elevada ao quadrado?',
    answer: [
      [10, 20],
      [5, 13],
    ],
  },
  {
    id: 19,
    questionDesc:
      'Qual é o resultado da subtração da matriz [[10, 8], [6, 4]] por [[4, 3], [2, 1]]?',
    answer: [
      [6, 5],
      [4, 3],
    ],
  },
  {
    id: 20,
    questionDesc:
      'Qual é o resultado da subtração da matriz [[2, 5], [7, 4]] por [[4, 6], [8, 5]]?',
    answer: [
      [-2, -1],
      [-1, -1],
    ],
  },
]
