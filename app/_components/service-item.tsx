import { BarbershopService } from "@/generated/prisma/browser"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface ServiceItemProps {
  service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-3">
        {/* IMAGE */}

        <div className="relative h-28 w-28">
          <Image
            src={service.imageUrl}
            fill
            alt={service.name}
            className="rounded-lg object-cover"
          />
        </div>

        {/* DIREITA */}

        <div className="flex-1 space-y-3">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          <div className="flex justify-between">
            <p className="text-primary text-sm font-bold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Button variant="secondary" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
