import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const Home = () => {
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
        <div className="relative mt-6 h-37.5 w-full">
          <Image
            src="/banner01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com fsw "
          />
        </div>
        <div>
          <Card className="mt-6">
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
                <p className="font-bold">06</p>
                <p className="font-sm">09:45</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home
