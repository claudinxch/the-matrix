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
    description:
      'Podemos realizar diferentes tipos de operações com matrizes, incluindo as mais básicas, como adição, subtração e multiplicação. Vamos entender como cada uma funciona de forma simples:',
    sections: [
      {
        title: 'Adição',
        content: (
          <div className="space-y-6">
            <p>
              Para somar duas matrizes, elas precisam ter o mesmo número de
              linhas e colunas. Basta somar os números/elementos que estão na
              mesma posição em cada matriz.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [10, 20],
                      [30, 40],
                    ]}
                  />
                  <span>
                    <span className="italic"> B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [50, 60],
                      [70, 80],
                    ]}
                  />
                  <span>
                    <span className="italic"> A + B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [60, 80],
                      [100, 120],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      /* Subtraction */
      {
        title: 'Subtração',
        content: (
          <div className="space-y-6">
            <p>
              Na subtração de matrizes usamos a mesma regra da adição:
              subtraímos os elementos que estão nas mesmas posições de cada
              matriz. Elas também precisam ter o mesmo número de linhas e
              colunas.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [50, 20],
                      [70, 40],
                    ]}
                  />
                  <span>
                    <span className="italic"> B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [10, 33],
                      [20, 84],
                    ]}
                  />
                  <span>
                    <span className="italic"> A - B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [40, -13],
                      [50, -44],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      },

      /** Multiplication */
      {
        title: 'Multiplicação',
        content: (
          <div className="space-y-6">
            <p>
              A multiplicação de matrizes é um pouco mais complicada. O número
              de linhas da matriz A e o número de colunas da matriz B precisam
              ser iguais para realizarmos a multiplicação. Para calcular o
              produto fazemos a soma dos produtos entre as linhas da primeira
              matriz e as colunas da segunda matriz.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 2],
                      [3, 4],
                    ]}
                  />
                  <span>
                    <span className="italic"> B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [5, 6],
                      [7, 8],
                    ]}
                  />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A ⋅ B </span>=
                  </span>
                  <p className="mt-3 text-green">
                    [(1 x 5 + 2 x 7) (1 x 6 + 2 x 8)]<br></br>
                    [(3 x 5 + 4 x 7) (3 x 6 + 4 x 8)]
                  </p>
                  =
                  <MatrixAnswer
                    data={[
                      [19, 22],
                      [43, 50],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      },

      /* Scalar multiplication */
      {
        title: 'Multiplicação Escalar',
        content: (
          <div className="space-y-6">
            <p>
              A multiplicação escalar consiste em multiplicar uma matriz inteira
              por um único número, que chamamos de escalar. Para fazer o
              cálculo, basta multiplicar cada elemento da matriz por esse
              número.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 2],
                      [3, 4],
                    ]}
                  />
                  <span>
                    <span className="italic"> K </span> =
                  </span>
                  <input
                    type="number"
                    className="size-[46px] text-center border border-zinc-300 dark:border-zinc-800 focus:outline-none mr-5"
                    value={3}
                    disabled
                  />
                  <span>
                    <span className="italic"> A ⋅ K </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [3, 6],
                      [9, 12],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  addition: {
    title: 'Adição de Matrizes',
    description:
      'A adição de matrizes é uma operação matemática que consiste em somar os elementos correspondentes de duas matrizes. Isso significa que somamos os números que ocupam a mesma posição em cada matriz.',
    sections: [
      {
        title: 'Regras de adição',
        content: (
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Dimensões iguais</h5>
              <p className="text-pretty text-justify ">
                Para que seja possível realizar a adição de duas matrizes, ambas
                devem ter as mesmas dimensões (ou seja, o mesmo número de linhas
                e colunas). Por exemplo, não é possível somar uma matriz 2x3 com
                uma matriz 3x2.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Soma Elemento a Elemento</h5>
              <p className="text-pretty text-justify ">
                A operação é feita somando cada elemento correspondente das duas
                matrizes.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Como somar',
        content: (
          <div className="space-y-6">
            <p className="text-pretty text-justify ">
              Somar matrizes é um processo simples que segue algumas regras
              básicas. Para realizar a soma, você deve somar os elementos
              correspondentes de cada matriz, ou seja, os elementos que ocupam a
              mesma posição em ambas as matrizes.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [8, 7],
                      [6, 5],
                    ]}
                  />
                  <span>
                    <span className="italic"> B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [4, 3],
                      [2, 1],
                    ]}
                  />
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span>
                    <span className="italic"> A + B </span>=
                  </span>
                  <p className="mt-3 text-green">
                    [(8 + 4) (7 + 3)]<br></br>
                    [(6 + 2) (5 + 1)]
                  </p>
                  =
                  <MatrixAnswer
                    data={[
                      [12, 10],
                      [8, 6],
                    ]}
                  />
                </div>
                <p className="font-semibold">Observação</p>
                <span>
                  Se as dimensões das matrizes forem{' '}
                  <span className="text-green">diferentes</span>, a soma{' '}
                  <span className="text-green">não será possível</span>. Por
                  isso, sempre verifique as dimensões antes de iniciar o
                  cálculo.
                </span>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

  subtraction: {
    title: 'Subtração de Matrizes',
    description:
      'A subtração de matrizes é uma operação matemática que consiste em subtrair os elementos correspondentes de duas matrizes. Isso significa que subtraímos os números que ocupam a mesma posição em cada matriz.',
    sections: [
      {
        title: 'Regras de subtração',
        content: (
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Dimensões iguais</h5>
              <p className="text-pretty text-justify ">
                Assim como na adição, a subtração só pode ser realizada se as
                duas matrizes tiverem as mesmas dimensões, garantindo que cada
                elemento correspondente possa ser subtraído. Por exemplo, não é
                possível subtrair uma matriz 2x3 com uma matriz 3x2.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Subtração Elemento a Elemento
              </h5>
              <p className="text-pretty text-justify ">
                A operação é feita subtraindo cada elemento correspondente das
                duas matrizes.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Como subtrair',
        content: (
          <div className="space-y-6">
            <p className="text-pretty text-justify ">
              Subtrair matrizes é um processo simples que segue algumas regras
              básicas. Para realizar a subtração, você deve subtrair os
              elementos correspondentes de cada matriz, ou seja, os elementos
              que ocupam a mesma posição em ambas as matrizes.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [9, 8],
                      [7, 6],
                    ]}
                  />
                  <span>
                    <span className="italic"> B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [2, 3],
                      [4, 15],
                    ]}
                  />
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span>
                    <span className="italic"> A + B </span>=
                  </span>
                  <p className="mt-3 text-green">
                    [(9 - 2) (8 - 3)]<br></br>
                    [(7 - 4) (6 - 15)]
                  </p>
                  =
                  <MatrixAnswer
                    data={[
                      [7, 5],
                      [3, -9],
                    ]}
                  />
                </div>
                <p className="font-semibold">Observação</p>
                <span>
                  Se as dimensões das matrizes forem{' '}
                  <span className="text-green">diferentes</span>, a subtração{' '}
                  <span className="text-green">não será possível</span>. Por
                  isso, sempre verifique as dimensões antes de iniciar o
                  cálculo.
                </span>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

  multiplication: {
    title: 'Multiplicação de Matrizes',
    description:
      'A multiplicação entre duas matrizes é um pouco mais complexa e exige mais atenção para entende-la. Para que seja possível efetua-la, o número de colunas de uma das matrizes deve ser igual ao número da outra. O resultado será uma nova matriz com o número de linhas da primeira e o número de colunas da segunda.',
    sections: [
      {
        title: 'Regras de multiplicação',
        content: (
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Condição para Multiplicação
              </h5>
              <p className="text-pretty text-justify ">
                A multiplicação de duas matrizes{' '}
                <span className="italic">A</span> e{' '}
                <span className="italic">B</span> só é possível se o número de
                colunas de <span className="italic">A</span> for igual ao número
                de linhas de <span className="italic">B</span>.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Dimensão da Matriz Resultante
              </h5>
              <p className="text-pretty text-justify ">
                A matriz resultante terá o número de linhas da primeira matriz (
                <span className="italic">A</span>) e o número de colunas da
                segunda matriz (<span className="italic">B</span>).
              </p>
              <span className="">
                Se <span className="italic">A</span> é{' '}
                <span className="italic">m x n</span> e{' '}
                <span className="italic">B</span> é{' '}
                <span className="italic">n x p</span>, então{' '}
                <span className="italic">C</span> será{' '}
                <span className="italic text-green">
                  m <span className="not-italic">x </span>p
                </span>
                .
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Multiplicação não comutativa
              </h5>
              <p className="text-pretty text-justify ">
                A ordem das matrizes importa. Em geral
                <span className="italic"> A</span> ⋅{' '}
                <span className="italic">B</span> &ne;{' '}
                <span className="italic">B</span> ⋅{' '}
                <span className="italic">A</span>.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Matriz Identidade</h5>
              <p className="text-pretty text-justify ">
                Quando uma matriz é multiplicada pela matriz identidade de
                dimensões compatíveis, o resultado é a própria matriz:
                <span className="italic"> A</span> ⋅{' '}
                <span className="italic">I</span> ={' '}
                <span className="italic">A</span> e{' '}
                <span className="italic">I</span> ⋅{' '}
                <span className="italic">A</span> ={' '}
                <span className="italic">A</span>.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Propriedade Associativa</h5>
              <p className="text-pretty text-justify ">
                A multiplicação de matrizes é associativa:
                <span className="italic"> (A ⋅ B)</span> ⋅{' '}
                <span className="italic">C</span> ={' '}
                <span className="italic">A</span> ⋅{' '}
                <span className="italic">(B ⋅ C)</span>.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Propriedade Distributiva</h5>
              <p className="text-pretty text-justify ">
                A multiplicação de matrizes é distributiva em relação à adição:
                <span className="italic"> A</span> ⋅{' '}
                <span className="italic">(B + C)</span> ={' '}
                <span className="italic">A ⋅ B</span> +{' '}
                <span className="italic">A ⋅ C</span>.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Como multiplicar',
        content: (
          <div className="space-y-6">
            <p className="text-pretty text-justify ">
              Para realizarmos o cálculo, pegamos uma linha da primeira matriz e
              uma coluna da segunda matriz , multiplicamos os elementos
              correspondentes e somamos os resultados. Devemos fazer isso com
              cada linha e coluna das matrizes.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <p>
                  Vamos multiplicar a matriz <span className="italic"> A </span>{' '}
                  pela matriz <span className="italic"> B </span>
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [1, 2],
                      [3, 4],
                    ]}
                  />
                  <span>
                    <span className="italic"> B </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [5, 6],
                      [7, 8],
                    ]}
                  />
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <ul className="flex flex-col gap-4 list-decimal ml-4">
                    <li>
                      Multiplicamos a 1ª linha de A pela 1ª coluna de B para
                      encontrar o elemento (1,1): <br />
                      (1 x 5) + (2 x 7) = 19
                    </li>
                    <li>
                      Multiplicamos a 1ª linha de A pela 2ª coluna de B para
                      encontrar o elemento (1,2): <br />
                      (1 x 6) + (2 x 8) = 22
                    </li>
                    <li>
                      Multiplicamos a 2ª linha de A pela 1ª coluna de B para
                      encontrar o elemento (2,1): <br />
                      (3 x 5) + (4 x 7) = 43
                    </li>
                    <li>
                      Multiplicamos a 2ª linha de A pela 2ª coluna de B para
                      encontrar o elemento (2,2): <br />
                      (3 x 6) (4 x 8) = 50
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span>Resultando assim na matriz: </span>
                  <MatrixAnswer
                    data={[
                      [19, 22],
                      [43, 50],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

  'scalar-multiplication': {
    title: 'Multiplicação escalar',
    description:
      'A multiplicação escalar de matrizes é uma operação matemática que consiste em multiplicar cada elemento de uma matriz por um número escalar. Esse número escalar pode ser qualquer valor real ou complexo, dependendo do contexto da matriz. Essa operação é útil para aumentarmos os valores de uma matriz de maneira proporcional.',
    sections: [
      {
        title: 'Regras da multiplicação escalar',
        content: (
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Número Escalar</h5>
              <p className="text-pretty text-justify ">
                O valor escalar é um único número que será multiplicado por
                todos os elementos da matriz.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Dimensões Mantidas</h5>
              <p className="text-pretty text-justify ">
                A multiplicação escalar não altera as dimensões da matriz. A
                matriz resultante terá exatamente o mesmo tamanho que a matriz
                original.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Multiplicação Elemento a Elemento
              </h5>
              <p className="text-pretty text-justify ">
                Cada elemento da matriz original é multiplicado individualmente
                pelo escalar <span className="italic">K</span> : C[ i ][ j ] = K
                ⋅ A[ i ][ j ].
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Como Multiplicar por um Escalar',
        content: (
          <div className="space-y-6">
            <p className="text-pretty text-justify ">
              A multiplicação escalar é quando multiplicamos um número (chamado
              de {'"escalar"'}) por uma matriz inteira. Para efetua-la, basta
              multiplicar cada número da matriz por um único número.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Exemplo:</h4>
              <div className="pb-4">
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [3, 4],
                      [8, 9],
                    ]}
                  />
                  <span>
                    <span className="italic"> K </span> =
                  </span>
                  <input
                    type="number"
                    className="size-[46px] text-center border border-zinc-300 dark:border-zinc-800 focus:outline-none mr-5"
                    value={10}
                    disabled
                  />
                  <span>
                    <span className="italic"> A ⋅ K </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [30, 40],
                      [80, 90],
                    ]}
                  />
                </div>
                <p className="mt-4">
                  A multiplicação escalar é amplamente utilizada em álgebra
                  linear para escalonar matrizes ou manipular seus valores
                  proporcionalmente.
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

  determinant: {
    title: 'Determinante de Matrizes',
    description:
      'O determinante de uma matriz é um valor escalar que pode ser calculado a partir dos elementos da matriz. Ele desempenha um papel fundamental na álgebra linear, sendo utilizado para verificar se uma matriz é invertível, resolver sistemas lineares, entre outras aplicações.',
    sections: [
      {
        title: 'Regras para o Cálculo do Determinante',
        content: (
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Definição para Matrizes Quadradas
              </h5>
              <p className="text-pretty text-justify ">
                O determinante só pode ser calculado para matrizes quadradas, ou
                seja, matrizes em que o número de linhas é igual ao número de
                colunas. Matrizes não quadradas não possuem determinante.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Matriz Identidade</h5>
              <p className="text-pretty text-justify ">
                O determinante da matriz identidade ({' '}
                <span className="italic">I</span> ) é sempre igual a 1,
                independentemente de sua dimensão.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Troca de Linhas</h5>
              <p className="text-pretty text-justify ">
                Trocar duas linhas de uma matriz altera o sinal do determinante.
                Por exemplo, se o determinante era positivo, ele se torna
                negativo após a troca.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Multiplicação por um Escalar
              </h5>
              <p className="text-pretty text-justify ">
                Multiplicar uma linha ou coluna de uma matriz por um escalar (
                <span className="italic">K</span>) multiplica o determinante por{' '}
                <span className="italic">K</span>.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">
                Propriedade de Matrizes Singulares
              </h5>
              <p className="text-pretty text-justify ">
                Se o determinante de uma matriz for igual a 0 (det(
                <span className="italic">A</span>) = 0), a matriz é singular, ou
                seja, não possui inversa.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl text-green">Propriedade Multiplicativa</h5>
              <p className="text-pretty text-justify ">
                O determinante do produto de duas matrizes quadradas é igual ao
                produto dos determinantes: <br />
                det(<span className="italic">A</span> ⋅{' '}
                <span className="italic">B</span>) = det(
                <span className="italic">A</span>) ⋅ det(
                <span className="italic">B</span>).
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Como Calcular o Determinante',
        content: (
          <div className="space-y-6">
            <p className="text-pretty text-justify">
              O determinante de uma matriz é um valor escalar calculado a partir
              dos elementos de uma matriz quadrada. Ele é essencial para
              diversas aplicações em álgebra linear, como verificar a
              invertibilidade de uma matriz ou resolver sistemas de equações.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border flex flex-col gap-4">
              <h4 className="font-semibold">Regras:</h4>
              <ul className="list-disc pl-6">
                <li>
                  O determinante só pode ser calculado para{' '}
                  <span className="italic">matrizes quadradas</span>.
                </li>
                <li>
                  Se o determinante for <span className="text-green">zero</span>
                  , a matriz é considerada
                  <span className="italic"> singular</span> e não possui
                  inversa.
                </li>
                <li>O determinante da matriz identidade é sempre 1.</li>
              </ul>

              <h4 className="font-semibold">Exemplo de Cálculo:</h4>
              <div className="pb-4">
                <div className="flex items-center gap-2 mt-2">
                  <span>
                    <span className="italic"> A </span>=
                  </span>
                  <MatrixAnswer
                    data={[
                      [2, 3],
                      [1, 4],
                    ]}
                  />
                </div>

                <p className="mt-4">
                  Para uma matriz 2x2, o determinante é calculado pela fórmula:
                </p>
                <p className="mt-3 text-green font-semibold">
                  det(A) = (2 × 4) - (3 × 1)
                </p>
                <p className="mt-3 text-green font-semibold">
                  det(A) = 8 - 3 = 5
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <span>Resultado:</span>
                  <span className="text-green font-semibold">5</span>
                </div>
              </div>
              <div className="-mt-3">
                <p className="font-semibold">Observação</p>
                <span>
                  Para matrizes maiores que 2x2, utilize o método de expansão
                  por cofatores.
                </span>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
}
