import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-dark py-4 px-6 flex justify-between items-center">
      {/* Lado esquerdo: logo folha */}
      <div className="w-16 flex items-center justify-start">
        <div className="relative w-16 h-16">
          <Image src="https://thelimaleo.github.io/Prototipo_site_PI/imgs/folhas.svg" alt="Green Leaf Logo" fill className="object-contain" />
        </div>
      </div>
      {/* Centro: logo AXIS */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-16 h-16">
          <Image src="https://thelimaleo.github.io/Prototipo_site_PI/assets/logos/AXIS.svg" alt="AXIS Logo" fill className="object-contain" />
        </div>
      </div>
      {/* Navegação: lado direito */}
      <nav className="w-16 flex items-center justify-end">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-primary hover:underline">
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="text-primary hover:underline">
              Equipe
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
