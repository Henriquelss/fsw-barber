import Image from "next/image"
import { Barbershop } from "../../generated/prisma/client"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { StarIcon } from "lucide-react"
import { Badge } from "./ui/badge"
import Link from "next/link"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-41.75 rounded-2xl p-0">
      <CardContent className="p-0 px-1 pt-1">
        {/* Imagem */}
        <div className="relative h-39.75 w-full">
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            sizes="true"
            className="rounded-2xl object-cover"
          />

          <Badge
            className="absolute top-2 left-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="font-semi bold text-xs">5.0</p>
          </Badge>
        </div>
        {/* Texto */}
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>

          <Link href={`/barbershops/${barbershop.id}`}>
            <Button variant="secondary" className="mt-3 w-full">
              Reservar
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
