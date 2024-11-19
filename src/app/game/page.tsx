import { GameWrapper } from '@/components/game/game-wrapper'
import { ReactNode } from 'react'

export default function Game() {
  return (
    <main className="flex min-h-screen flex-col gap-16 py-10 px-6 items-center md:items-start md:py-16 md:px-24">
      <div className="container">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 md:w-[63%]">
            <h1 className={'text-4xl text-dark-gray dark:text-light-gray'}>
              <span className="text-green font-semibold">Mini-game</span>
            </h1>
            <p className="text-xl text-justify md:text-pretty text-dark-gray dark:text-light-gray">
              Participe do nosso{' '}
              <span className="text-green">
                mini-game de perguntas e respostas sobre matrizes
              </span>{' '}
              para testar seus conhecimentos.
            </p>
            <ul className="mt-4 ml-6 list-disc flex flex-col gap-px">
              <Instruction>
                Você responderá a{' '}
                <span className="text-green">10 perguntas</span>.
              </Instruction>
              <Instruction>
                A cada resposta <span className="text-green">certa</span> você{' '}
                <span className="text-green">ganha pontos</span>.
              </Instruction>
              <Instruction>
                A cada resposta <span className="text-red-600">errada</span>{' '}
                você é <span className="text-red-600">penalizado</span>.
              </Instruction>
              <Instruction>
                Após a tentativa, você pode{' '}
                <span className="text-green">ver a resposta correta</span>.
              </Instruction>
              <Instruction>
                Você também pode pedir explicação para a{' '}
                <span className="text-green">IA</span>.
              </Instruction>
              <Instruction>
                Quando finalizar, você pode{' '}
                <span className="text-green">jogar novamente</span>.
              </Instruction>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-start md:items-center">
        {/* <Button
          variant={'outline'}
          className="text-green h-20 w-60 text-2xl font-light rounded-xl dark:text-green transition-all [box-shadow:0px_1px_1px_#008f11] active:translate-y-[2px] active:!shadow-none"
        >
          Iniciar
        </Button> */}
        <GameWrapper />
      </div>
    </main>
  )
}

function Instruction({ children }: { children: ReactNode }) {
  return (
    <li className="text-xl text-dark-gray dark:text-light-gray">{children}</li>
  )
}
