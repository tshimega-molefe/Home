import { FC } from "react"
import Link from "next/link"

import { Icons } from "@/components/icons"

interface PartnersSectionProps {}

const PartnersSection: FC<PartnersSectionProps> = ({}) => {
  return (
    <section
      id="our-Partners"
      className="container relative w-full md:mb-96 mb-52 max-lg:mt-40"
    >
      <p className="text-base leading-6 lg:text-[#f8fafc]/60 max-lg:text-muted-foreground">
        A reliable partner for the world&apos;s foremost companies ↘︎
      </p>
      <div className="flex flex-wrap justify-between items-center gap-4 pt-2">
        <Link
          href="https://athena-io.com/"
          target="_blank"
          passHref
          className="active:scale-90 transition-all duration-75"
        >
          <Icons.athena className="my-3 h-7 w-20" />
        </Link>
        <Link
          href="https://www.lsavi.com/"
          target="_blank"
          passHref
          className="active:scale-90 transition-all duration-75"
        >
          <Icons.aviation className="my-3 h-12 w-26" />
        </Link>
        <Link
          href="https://nextjs.org/"
          target="_blank"
          passHref
          className="active:scale-90 transition-all duration-75"
        >
          <Icons.nextjs className="my-3 h-20 w-auto" />
        </Link>
        <Link
          href="http://103.125.218.26/"
          target="_blank"
          passHref
          className="active:scale-90 transition-all duration-75"
        >
          <Icons.scout className="my-3 h-8 w-auto" />
        </Link>
        <Link
          href="https://stripe.com/"
          target="_blank"
          passHref
          className="active:scale-90 transition-all duration-75"
        >
          <Icons.stripe className="my-3 h-16 w-auto" />
        </Link>

        <Link
          href="https://usurpa.africa/"
          target="_blank"
          passHref
          className="active:scale-90 transition-all duration-75"
        >
          <Icons.usurpa className="my-3 w-28 h-fit" />
        </Link>
        <Link
          href="https://vercel.com/"
          target="_blank"
          passHref
          className="active:scale-90 transition-all duration-75"
        >
          <Icons.vercel className="my-3 h-9 w-24" />
        </Link>
      </div>
    </section>
  )
}

export default PartnersSection
