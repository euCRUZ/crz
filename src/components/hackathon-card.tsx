import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

interface Props {
  title: string
  description: string
  dates: string
  location: string
  image?: string
  links?: readonly {
    icon: React.ReactNode
    title: string
    href: string
  }[]
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-16 py-4">
      {" "}
      {/* Ajuste o espaçamento lateral */}
      <div className="absolute -left-20 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border w-16 h-16 m-auto">
          {" "}
          {/* Aumente o tamanho do Avatar */}
          <AvatarImage src={image} alt={title} className="object-cover" />{" "}
          {/* Use object-cover */}
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none flex items-center gap-1">
          {title}
          <Image src="/verified.svg" alt="verified" width={18} height={18} />
        </h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  )
}
