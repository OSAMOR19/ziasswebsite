import Image from "next/image"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
  image: string
}

export default function TeamMember({ name, title, bio, image }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-electric-blue mb-4">{title}</p>
        <p className="text-charcoal/80">{bio}</p>
      </div>
    </div>
  )
}
