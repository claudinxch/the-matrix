import Link from 'next/link'
import { ScrollDownButton } from '@/components/ui/scrolldown-button'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="container flex flex-row">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 md:w-[63%]">
          <h1 className={'text-4xl text-dark-gray dark:text-light-gray'}>
            Bem-vindo a{' '}
            <span className="text-green font-semibold">The Matrix</span>.
          </h1>
          <p className="text-xl text-justify md:text-pretty text-dark-gray dark:text-light-gray">
            <span className="text-green font-semibold">The Matrix</span> é uma
            plataforma que vai te ajudar a{' '}
            <span className="text-green">descomplicar matrizes</span>, onde você
            poderá fazer qualquer <span className="text-green">operação</span>{' '}
            que desejar, além de participar de um{' '}
            <Link href={'/game'} className="text-green">
              mini-game
            </Link>{' '}
            de perguntas e respostas para treinar e aprimorar seus
            conhecimentos. E, caso esteja muito difícil, você pode revisar
            matrizes e suas propriedades{' '}
            <Link href="/learn" className="text-green underline">
              aqui
            </Link>
            .
          </p>
        </div>

        <div className="flex items-start flex-col gap-4 md:items-center md:flex-row">
          <p className="text-lg text-dark-gray dark:text-light-gray">
            Comece brincando um pouco com algumas{' '}
            <span className="text-green">operações</span>!
          </p>
          <div className="self-center">
            <ScrollDownButton />
          </div>
        </div>
      </div>

      <Image
        src={'/the-matrix-white.png'}
        width={240}
        height={140}
        quality={100}
        alt="The Matrix Logo"
      />
    </div>
  )
}
