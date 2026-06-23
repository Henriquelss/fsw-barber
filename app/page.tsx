import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

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
          <Button className="flex cursor-pointer gap-2" variant="secondary">
            <Image src="/cabelo.svg" alt="Cabelo" width={16} height={16} />
            Cabelo
          </Button>

          <Button className="flex cursor-pointer gap-2" variant="secondary">
            <Image src="/barba.svg" alt="Barba" width={16} height={16} />
            Barba
          </Button>

          <Button className="flex cursor-pointer gap-2" variant="secondary">
            <Image
              src="/acabamento.svg"
              alt="Acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>

          <Button className="flex cursor-pointer gap-2" variant="secondary">
            <Image src="/cabelo.svg" alt="Cabelo" width={16} height={16} />
            Cabelo
          </Button>

          <Button className="flex cursor-pointer gap-2" variant="secondary">
            <Image src="/cabelo.svg" alt="Cabelo" width={16} height={16} />
            Cabelo
          </Button>
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
          <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
            Agendamentos
          </h2>

          <Card>
            <CardContent className="flex justify-between p-0">
              {/* Esquerda */}
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge>Confirmado</Badge>
                <h3 className="font-bold">Corte de cabelo</h3>

                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png" />
                  </Avatar>
                  <p className="text-sm">Vintage Barber</p>
                </div>
              </div>
              {/* Direita */}
              <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
                <p className="font-sm">Fevereiro</p>
                <p className="text-2xl">06</p>
                <p className="font-sm">09:45</p>
              </div>
            </CardContent>
          </Card>

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
