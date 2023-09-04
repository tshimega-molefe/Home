import { FC } from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"

interface PartnersSectionProps {}

const PartnersSection: FC<PartnersSectionProps> = ({}) => {
  return (
    <section
      id="our-Partners"
      className="container relative mb-52 w-full max-lg:mt-40 md:mb-96"
    >
      <p className="text-base leading-6 text-muted-foreground">
        The technology behind your stack account ↘︎
      </p>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Link
          href="https://athena-io.com/"
          target="_blank"
          passHref
          className="transition-all duration-75 active:scale-90"
        >
          <Icons.athena className="my-3 h-7 w-20" />
        </Link>
        <Link
          href="https://www.lsavi.com/"
          target="_blank"
          passHref
          className="transition-all duration-75 active:scale-90"
        >
          <Icons.aviation className="w-26 my-3 h-12" />
        </Link>
        <Link
          href="https://nextjs.org/"
          target="_blank"
          passHref
          className="transition-all duration-75 active:scale-90"
        >
          <Icons.nextjs className="my-3 h-20 w-auto" />
        </Link>
        {/* <Link
          href="http://103.125.218.26/"
          target="_blank"
          passHref
          className="transition-all duration-75 active:scale-90"
        >
          <Icons.scout className="my-3 h-8 w-auto" />
        </Link> */}
        <Link
          href="https://stripe.com/"
          target="_blank"
          passHref
          className="transition-all duration-75 active:scale-90"
        >
          <Icons.stripe className="my-3 h-16 w-auto" />
        </Link>

        {/* <Link
          href="https://usurpa.africa/"
          target="_blank"
          passHref
          className="transition-all duration-75 active:scale-90"
        >
          <Icons.usurpa className="my-3 h-fit w-28" />
        </Link> */}
        <Link
          href="https://vercel.com/"
          target="_blank"
          passHref
          className="transition-all duration-75 active:scale-90"
        >
          <Icons.vercel className="my-3 h-9 w-24" />
        </Link>
      </div>
    </section>
  )
}

export default PartnersSection
