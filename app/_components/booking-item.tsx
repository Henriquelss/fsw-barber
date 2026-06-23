import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

// TODO: Receber agendamento como prop
const BookingItems = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItems
