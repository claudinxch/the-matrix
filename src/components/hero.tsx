'use client'

import Link from 'next/link'
import { ScrollDownButton } from '@/components/ui/scrolldown-button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container flex flex-row"
    >
      <div className="flex flex-col gap-10">
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2 md:w-[63%]"
        >
          <motion.h1
            variants={itemVariants}
            className={'text-4xl text-dark-gray dark:text-light-gray'}
          >
            Bem-vindo a{' '}
            <span className="text-green font-semibold">The Matrix</span>.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-justify md:text-pretty text-dark-gray dark:text-light-gray"
          >
            <span className="text-green font-semibold">The Matrix</span> é uma
            plataforma que vai te ajudar a{' '}
            <span className="text-green">descomplicar matrizes</span>, onde você
            poderá fazer qualquer <span className="text-green">operação</span>{' '}
            que desejar, além de participar de um{' '}
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href={'/game'} className="text-green">
                mini-game
              </Link>
            </motion.span>{' '}
            de perguntas e respostas para treinar e aprimorar seus
            conhecimentos. E, caso esteja muito difícil, você pode revisar
            matrizes e suas propriedades{' '}
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/learn" className="text-green underline">
                aqui
              </Link>
            </motion.span>
            .
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-start flex-col gap-4 md:items-center md:flex-row"
        >
          <p className="text-lg text-dark-gray dark:text-light-gray">
            Comece brincando um pouco com algumas{' '}
            <span className="text-green">operações</span>!
          </p>
          <div className="self-center">
            <ScrollDownButton />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden w-[500px] md:block"
      >
        <Image
          src={'/the-matrix-white.png'}
          width={200}
          height={100}
          quality={100}
          alt="The Matrix Logo"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  )
}
