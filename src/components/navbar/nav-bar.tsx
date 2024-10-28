import { ThemeButton } from '@/components/core/theme-button'
import { UserAvatar } from '@/components/core/user-avatar'
import { Separator } from '@/components/ui/separator'
import { MenuPages } from '../core/menu-pages'
import { NavLinks } from './nav-links'

export function NavBar() {
  return (
    <header className="flex justify-between px-4 py-3 md:px-10 lg:px-24 md:py-5 items-center border-b">
      <MenuPages className="md:hidden" />
      <div className="flex h-full items-center gap-4 dark:text-yellow">
        <p>logo</p>
        <Separator
          orientation="horizontal"
          className="bg-black dark:bg-yellow -rotate-[77deg] w-7"
        />
        <p>The Matrix</p>
      </div>

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
