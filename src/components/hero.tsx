import Link from 'next/link'
import { ScrollDownButton } from '@/components/ui/scrolldown-button'

export function Hero() {
  return (
    <div className="container flex flex-col gap-10">
      <div className="flex flex-col gap-2 md:w-[63%]">
        <h1 className={'text-4xl text-dark-gray dark:text-light-gray'}>
          Bem-vindo ao{' '}
          <span className="text-yellow font-semibold">The Matrix</span>.
        </h1>
        <p className="text-xl text-justify md:text-pretty text-dark-gray dark:text-light-gray">
          <span className="text-yellow font-semibold">The Matrix</span> é uma
          plataforma que vai te ajudar a{' '}
          <span className="text-yellow">descomplicar matrizes</span>, onde você
          poderá fazer qualquer <span className="text-yellow">operação</span>{' '}
          que desejar, além de participar de um{' '}
          <Link href={'/game'} className="text-yellow">
            mini-game
          </Link>{' '}
          de perguntas e respostas para treinar e aprimorar seus conhecimentos.
          E, caso esteja muito difícil, você pode revisar matrizes e suas
          propriedades{' '}
          <Link href="/learn" className="text-yellow underline">
            aqui
          </Link>
          .
        </p>
      </div>

      <div className="flex items-start flex-col gap-4 md:items-center md:flex-row">
        <p className="text-lg text-dark-gray dark:text-light-gray">
          Comece brincando um pouco com algumas{' '}
          <span className="text-yellow">operações</span>!
        </p>
        <div className="self-center">
          <ScrollDownButton />
        </div>
      </div>
    </div>
  )
}
