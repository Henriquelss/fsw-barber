import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany()
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
    take: 5,
  })
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="fonte-bold text-xl">Olá, Henrique</h2>
        <p>Quarta-feira, 10 de junho.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* Busca rápida */}
        <div className="mt-6 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="cursor-pointer gap-2"
              variant="secondary"
              key={option.title}
            >
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-37.5 w-full">
          <Image
            src="/banner01.svg"
            loading="eager"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com fsw "
          />
        </div>

        <div>
          {/* Agendamento */}
          <BookingItem />

          <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
            Recomendados
          </h2>

          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>

          <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
            Populares
          </h2>

          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
