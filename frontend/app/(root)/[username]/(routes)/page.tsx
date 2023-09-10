import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function User() {
  return (
    <div className="flex flex-col gap-10 min-h-screen w-full items-center justify-center bg-red-600">
      <Link
        className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        href={`/tshimegamolefe/store/asdada`}
      >
        To {`tshimegamolefe`} store
      </Link>
    </div>
  )
}
