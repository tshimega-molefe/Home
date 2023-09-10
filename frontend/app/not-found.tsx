import Link from "next/link"
import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Footer from "@/components/footer/footer"
import { SiteHeader } from "@/components/navbar/site-header"

const options = [
  {
    title: "Lets us know which page you tried to visit",
    description: "Your personal data remains protected",
  },
  {
    title: "Lets us know which page you came from",
    description: "Your personal data remains protected",
  },
  {
    title: "Lets us know how often this happens",
    description: "We only note the request from your username",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export default function NotFound({ className, ...props }: CardProps) {
  return (
    <div className="relative flex w-full flex-1 flex-col">
      <SiteHeader />
      <div className="flex min-h-screen flex-col items-center justify-center gap-14">
        <h1 className="text-5xl font-extrabold tracking-tighter">
          Oops!! 404 Error :(
        </h1>
        <Card className={cn("w-[440px]", className)} {...props}>
          <CardHeader>
            <CardTitle>This page does not exist.</CardTitle>
            <CardDescription>Help us find out why</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notification
                </p>
                <p className="text-sm text-muted-foreground">
                  Notify Swift when this happens
                </p>
              </div>
              <Switch />
            </div>
            <div>
              {options.map((option, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {option.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href="/"
              passHref
              className={`${cn(
                buttonVariants({ variant: "default", size: "lg" })
              )} w-full`}
            >
              <Check className="mr-2 h-4 w-4" /> Return to previous page
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
