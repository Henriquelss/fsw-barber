import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="-5p flex flex-row items-center justify-between">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={18}
          style={{ width: "auto", height: "auto" }}
        />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
