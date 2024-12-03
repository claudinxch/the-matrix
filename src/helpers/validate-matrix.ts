// In your validate-matrix.ts helper
import { z } from 'zod'

const MatrixSchema = z.object({
  rows: z
    .number()
    .min(1, { message: 'O número de linhas deve ser maior que 0.' }),
  cols: z
    .number()
    .min(1, { message: 'O número de colunas deve ser maior que 0.' }),
})

export const validateMatrixOperation = (
  operation: 'sum' | 'subtraction' | 'multiplication' | 'scalar',
  matrix1: { rows: number; cols: number },
  matrix2?: { rows: number; cols: number },
) => {
  const errors: string[] = []

  try {
    // Validate first matrix for all operations
    MatrixSchema.parse(matrix1)

    // For non-scalar operations, validate matrix2 and operation-specific constraints
    if (operation !== 'scalar') {
      if (!matrix2) {
        errors.push('Segunda matriz é necessária para operações não escalares.')
        return errors
      }

      MatrixSchema.parse(matrix2)

      switch (operation) {
        case 'sum':
        case 'subtraction':
          if (matrix1.rows !== matrix2.rows || matrix1.cols !== matrix2.cols) {
            errors.push(
              'As matrizes devem ter a mesma dimensão para soma e subtração.',
            )
          }
          break
        case 'multiplication':
          if (matrix1.cols !== matrix2.rows) {
            errors.push(
              'O número de colunas na primeira matrix deve ser igual ao número de linha na segunda matrix.',
            )
          }
          break
      }
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.push(...error.errors.map((err) => err.message))
    }
  }

  return errors.length === 0 ? true : errors
}
