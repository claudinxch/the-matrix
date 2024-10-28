import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex items-center justify-center py-5 border-t">
      <p className="font-light text-base text-light-gray">
        Feito por <b className="font-semibold">The Matrix</b>. Código-fonte está
        liberado no{' '}
        <Link
          href={'https://github.com/claudinxch/the-matrix'}
          target="_blank"
          className="font-semibold underline"
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  )
}
