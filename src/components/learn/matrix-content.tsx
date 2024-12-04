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
              <div className="sm:hidden flex w-full justify-center">
                <MatrixAnswer
                  data={[
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                  ]}
                />
              </div>
              <div className="hidden sm:flex justify-around">
                <MatrixAnswer
                  data={[
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                  ]}
                />
                <MatrixAnswer
                  data={[
                    [10, 22, 33],
                    [47, 51, 62],
                    [77, 84, 91],
                  ]}
                />
                <MatrixAnswer
                  data={[
                    [-12, 2, 13],
                    [46, 52, -6],
                    [71, 8, 9],
                  ]}
                />
              </div>
            </div>

            {/* <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">
                Try it yourself:
              </h4>
              <MatrixAnswer
                rows={3}
                cols={3}
                onValueChange={(values) => console.log(values)}
              />
            </div> */}
          </div>
        ),
      },

      {
        title: 'Propriedades das matrizes',
        content: (
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Matriz Identidade</h5>
              <p className="text-pretty text-justify ">
                A matriz identidade é uma matriz especial que funciona como o
                {' "1"'} das matrizes. Multiplicar qualquer matriz pela matriz
                identidade resulta na própria matriz.
              </p>
            </div>

            {/** identidade */}
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="border-b pb-4">
                <p className="mb-3">
                  A matriz identidade 𝐼 é diagonal, com 1s na diagonal principal
                  e 0s nos outros elementos.
                </p>
                <span className="italic">Para uma matriz identidade 2x2</span>
                <MatrixAnswer
                  data={[
                    [1, 0],
                    [0, 1],
                  ]}
                  className=" mt-3"
                />
              </div>
              <div className="flex w-full gap-2">
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    Seja
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [2, 3],
                      [4, 5],
                    ]}
                  />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    Então
                    <span className="italic"> A . I </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [2, 3],
                      [4, 5],
                    ]}
                  />
                </div>
              </div>
            </div>

            {/** Comutativa */}
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Propriedade Comutativa na Adição
              </h5>
              <p className="text-pretty text-justify ">
                A adição de matrizes é comutativa, ou seja, a ordem das matrizes
                não altera o resultado.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <p className="mb-3">
                  Propriedade:{' '}
                  <span className="italic text-green">A + B = B + A</span>
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    Se
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 2],
                      [3, 4],
                    ]}
                  />
                  <span>
                    e<span className="italic"> B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [5, 6],
                      [7, 8],
                    ]}
                  />
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex items-center gap-2 mt-2">
                  <span className="italic"> A + B =</span>
                  <MatrixAnswer
                    data={[
                      [6, 8],
                      [10, 12],
                    ]}
                  />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="italic"> B + A =</span>
                  <MatrixAnswer
                    data={[
                      [6, 8],
                      [10, 12],
                    ]}
                  />
                </div>
              </div>
            </div>

            {/** associativa */}
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Propriedade Associativa na Multiplicação
              </h5>
              <p className="text-pretty text-justify ">
                A multiplicação de matrizes é associativa, ou seja:
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <p className="mb-3">
                  Propriedade associativa:{' '}
                  <span className="italic text-green">
                    A . (B . C) = (A . B) . C
                  </span>
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    Se
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 0],
                      [0, 1],
                    ]}
                  />
                  <span>
                    e<span className="italic"> B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [2, 3],
                      [4, 5],
                    ]}
                  />
                  <span>
                    e<span className="italic"> C </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 1],
                      [1, 1],
                    ]}
                  />
                </div>
              </div>
              <p className="flex w-full gap-2">
                O resultado será o mesmo, independentemente da ordem em que
                multiplicarmos:
              </p>
              <span className="italic text-green">
                A . (B . C) = (A . B) . C
              </span>
            </div>

            {/* Distributiva */}
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Propriedade Distributiva</h5>
              <p className="text-pretty text-justify ">
                A multiplicação de uma matriz por um escalar ou por outra matriz
                é distributiva:
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <p className="mb-3">
                  Propriedade:{' '}
                  <span className="italic text-green">
                    A . (B + C) = (A . B) + (A . C)
                  </span>
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    Se
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 0],
                      [0, 1],
                    ]}
                  />
                  <span>
                    e<span className="italic"> B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [2, 3],
                      [4, 5],
                    ]}
                  />
                  <span>
                    e<span className="italic"> C </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 1],
                      [1, 1],
                    ]}
                  />
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="flex items-center gap-2 mt-2">
                  <span className="italic"> A . (B + C) =</span>
                  <MatrixAnswer
                    data={[
                      [3, 4],
                      [5, 6],
                    ]}
                  />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="italic"> (A . B) + (A + C) =</span>
                  <MatrixAnswer
                    data={[
                      [3, 4],
                      [5, 6],
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Transposta */}
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Matriz Transposta</h5>
              <p className="text-pretty text-justify ">
                A matriz transposta é obtida ao trocar as linhas pelas colunas
                de uma matriz.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <p className="mb-3">
                  Seja
                  <span className="italic"> A </span>
                  uma matriz
                  <span className="italic"> m x n</span>, sua transposta
                  <span className="italic">
                    {' '}
                    A<sup>T</sup>{' '}
                  </span>
                  será
                  <span className="italic"> n x m</span>.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    Se
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 2, 3],
                      [4, 5, 6],
                    ]}
                  />
                  <span>
                    então{' '}
                    <span className="italic">
                      {' '}
                      A<sup>T</sup>{' '}
                    </span>
                    =
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 4],
                      [2, 5],
                      [3, 6],
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Determinante */}
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Determinante</h5>
              <p className="text-pretty text-justify ">
                O determinante é um número associado a matrizes quadradas, usado
                para verificar se uma matriz é invertível.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <p className="mb-3">
                  Uma matriz
                  <span className="italic"> A </span>é invertível se, e somente
                  se, <span className="italic">det</span>(A) &ne; 0.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    Se
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 2],
                      [3, 4],
                    ]}
                  />
                  <span>
                    então <span className="italic">det</span>(A) = (1 . 4) - (2
                    . 3) = <span className="text-green">-2</span>
                  </span>
                </div>
              </div>
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
