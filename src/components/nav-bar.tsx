import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'

export default function NavBar() {
  return (
    <header className="flex justify-between px-24 py-3 items-center border-b">
      <div className="flex gap-3">
        <p>logo</p>
        The Matrix
      </div>

      <div>
        <Avatar>
          <AvatarImage src="/vercel.svg" alt="profile-pic"></AvatarImage>
          <AvatarFallback>Jensen</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
