import Link from 'next/link'

interface EyebrowProps {
  text: string
}

export function Eyebrow({ text }: EyebrowProps) {
  return <div className="mb-4 uppercase text-inherit opacity-70">{text}</div>
}

interface BtnMainProps {
  link: string
  text: string
}

export function BtnMain({ link, text }: BtnMainProps) {
  return (
    <Link
      className="relative max-w-full cursor-pointer overflow-hidden rounded-sm bg-white px-8 py-3 text-xl text-orange-400"
      href={link}
    >
      {text}
    </Link>
  )
}

interface LinkMainProps {
  link: string
  text: string
}

export function LinkMain({ link, text }: LinkMainProps) {
  return (
    <Link
      href={link}
      className="relative inline-block max-w-full cursor-pointer overflow-hidden text-xl text-orange-400"
    >
      {text}
    </Link>
  )
}
