import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'input'> {
  label: string
}

export function NumberInput({ label, ...props }: Props) {
  return (
    <div>
      <Label htmlFor={`${label}`} className="capitalize">
        {label}
      </Label>
      <Input
        {...props}
        id={`${label}`}
        name={`${label}`}
        type="number"
        placeholder={`Número de ${label.split(' ')[0].toLowerCase()}`}
        className="mt-2 active:ring-green focus-visible:ring-green"
      />
    </div>
  )
}
