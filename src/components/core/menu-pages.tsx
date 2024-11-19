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
        <DropdownMenuItem>Operações</DropdownMenuItem>
        <DropdownMenuItem>Jogo</DropdownMenuItem>
        <DropdownMenuItem>Aprenda mais</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
