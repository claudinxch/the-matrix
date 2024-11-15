import { ThemeButton } from '@/components/core/theme-button'
import { UserAvatar } from '@/components/core/user-avatar'
import { MenuPages } from '../core/menu-pages'
import { NavLinks } from './nav-links'
import Image from 'next/image'
import Link from 'next/link'

export function NavBar() {
  return (
    <header className="flex justify-between px-4 py-3 md:px-10 lg:px-24 md:py-5 items-center border-b">
      <MenuPages className="md:hidden" />
      <Link href={'/'}>
        <div className="flex h-full items-center gap-4 dark:text-green">
          <Image
            src={'/the-matrix-white.png'}
            width={50}
            height={10}
            quality={100}
            alt="The Matrix Logo"
          />
          <p className="text-xl font-semibold">The Matrix</p>
        </div>
      </Link>

      <div className="flex gap-3">
        <NavLinks />

        <div className="hidden md:flex">
          <ThemeButton />
        </div>
        <UserAvatar />
      </div>
    </header>
  )
}
