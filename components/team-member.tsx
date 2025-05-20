import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  description: string
  imageUrl: string
}

export default function TeamMember({ name, role, description, imageUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center max-w-xs mx-auto">
      <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-primary">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="font-semibold text-primary mb-2">{role}</p>
      <p className="text-center text-sm">{description}</p>
    </div>
  )
}
