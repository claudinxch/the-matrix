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
      'Na matemática, as matrizes são ferramentas essenciais para organizar dados e informações, facilitando a resolução de problemas complexos de maneira eficiente. Elas têm aplicações em diversas áreas, como engenharia, economia, computação, entre outras.',
    sections: [
      {
        title: 'O que é uma matriz?',
        content: (
          <div className="space-y-6">
            <p className="text-pretty text-justify ">
              As matrizes são tabelas organizadas em linhas (horizontais) e
              colunas(verticais) que armazenam números ou elementos. Por
              exemplo, ela pode ser usada para representar dados, resolver
              equações ou até realizar cálculos em computadores.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h4 className="font-semibold mb-4">Exemplo:</h4>
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
      {
        title: 'Fundamentos das Matrizes',
        content: (
          <div className="space-y-6">
            <p className="text-pretty text-justify ">
              As matrizes são tabelas organizadas em linhas (horizontais) e
              colunas(verticais) que armazenam números ou elementos. Por
              exemplo, ela pode ser usada para representar dados, resolver
              equações ou até realizar cálculos em computadores.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h4 className="font-semibold mb-4">Exemplo:</h4>
              <MatrixAnswer
                data={[
                  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9],
                ]}
              />
            </div>
          </div>
        ),
      },
      {
        title: 'dadododododo',
        content: (
          <div className="space-y-6">
            <p className="text-pretty text-justify ">
              As matrizes são tabelas organizadas em linhas (horizontais) e
              colunas(verticais) que armazenam números ou elementos. Por
              exemplo, ela pode ser usada para representar dados, resolver
              equações ou até realizar cálculos em computadores.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h4 className="font-semibold mb-4">Exemplo:</h4>
              <MatrixAnswer
                data={[
                  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9],
                ]}
              />
            </div>
          </div>
        ),
      },
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
