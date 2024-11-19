import { MatrixAnswer } from '@/components/matrix/matrix'
import { ReactNode } from 'react'

export interface ContentSection {
  title: string
  description?: string
  sections: {
    title: string
    content: ReactNode
  }[]
}

export const learnContent: Record<string, ContentSection> = {
  introduction: {
    title: 'Introdução a Matrizes',
    description:
      'Learn the fundamentals of matrix operations and their applications',
    sections: [
      {
        title: 'What is a Matrix?',
        content: (
          <div className="space-y-6">
            <p>
              A matrix is a rectangular array of numbers, symbols, or
              expressions arranged in rows and columns.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h4 className="font-semibold mb-4">Example:</h4>
              <MatrixAnswer
                data={[
                  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9],
                ]}
              />
            </div>

            {/* <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Try it yourself:</h4>
              <InteractiveMatrix 
                rows={3}
                cols={3}
                onValueChange={(values) => console.log(values)}
              />
            </div> */}
          </div>
        ),
      },
      // More sections...
    ],
  },
  'basic-operations': {
    title: 'Operações básicas',
    description: 'Aprenda as operações básicas',
    sections: [
      {
        title: 'Adição',
        content: (
          <div className="space-y-6">
            <p>Para somar matrizes</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Matrix A</h5>
                <MatrixAnswer
                  data={[
                    [1, 2],
                    [3, 4],
                  ]}
                />
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  addition: {
    title: 'Matrix Addition',
    description: 'Learn how to add matrices and understand their properties',
    sections: [
      {
        title: 'Rules of Addition',
        content: (
          <div className="space-y-6">
            <p>
              To add two matrices, they must have the same dimensions. Addition
              is performed element by element.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Matrix A</h5>
                <MatrixAnswer
                  data={[
                    [1, 2],
                    [3, 4],
                  ]}
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Matrix B</h5>
                <MatrixAnswer
                  data={[
                    [5, 6],
                    [7, 8],
                  ]}
                />
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-medium text-green-900 mb-2">Result:</h5>
              <MatrixAnswer
                data={[
                  [6, 8],
                  [10, 12],
                ]}
              />
            </div>
          </div>
        ),
      },
      // More sections...
    ],
  },
  // More topics...
}
