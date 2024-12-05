import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

interface Props {
  className?: string
}

export function MenuPages({ className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>The Matrix</DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <Link href={'/'}>
          <DropdownMenuItem>Operações</DropdownMenuItem>
        </Link>
        <Link href={'/game'}>
          <DropdownMenuItem>Jogo</DropdownMenuItem>
        </Link>
        <Link href={'/learn'}>
          <DropdownMenuItem>Aprenda mais</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
