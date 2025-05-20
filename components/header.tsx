import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-dark py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="relative w-16 h-16">
          <Image src="/placeholder.svg?height=64&width=64" alt="Green Leaf Logo" fill className="object-contain" />
          <span className="text-xs text-center block mt-1">Green Leaf</span>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <h1 className="text-5xl font-bold tracking-wider">AXIS</h1>
      </div>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-primary hover:underline">
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="text-primary hover:underline">
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link href="/cadastro" className="text-primary hover:underline">
              Cadastro
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
