// import { auth } from '@/auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
// import { logOut } from '@/lib/actions'
import Link from 'next/link'

export async function UserAvatar() {
  //   const session = await auth()

  //   let image: string | undefined
  //   if (session?.user?.image) {
  //     image = session.user.image || undefined
  //   }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full" size="icon">
          <Avatar>
            <AvatarImage
              //   src={image}
              alt="User Avatar"
              className="rounded-full object-cover overflow-hidden"
            />
            {/* <AvatarFallback>{session?.user?.name}</AvatarFallback> */}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/dashboard">
          <DropdownMenuItem className="cursor-pointer">Perfil</DropdownMenuItem>
        </Link>
        <Link href="/settings">
          <DropdownMenuItem className="cursor-pointer">
            Configurações
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {/* <form action={logOut}> */}
          <form>
            <button type="submit" className="w-[102px] text-start">
              Sair
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
