import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function Feed() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#01A8BC] bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500 gap-40">
      <Link
        className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        href={`/randomUrl`}
      >
        This is a {`randomUrl`}
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        href={`/tshimegabelmont`}
      >
        To root page of {`tshimegabelmont`}
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        href={`/tshimegamolefe`}
      >
        To root page of {`tshimegamolefe`}
      </Link>
    </div>
  )
}
