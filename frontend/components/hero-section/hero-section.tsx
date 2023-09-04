import { FC } from "react"
import Image from "next/image"
import { swift, swiftSvg } from "@/assets"

import HeroOverlay from "./hero-overlay"

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section
      id="hero-section"
      className="hero-fade relative -mb-[20rem] h-[150vh] w-full"
    >
      {/* <Image
        src={swiftSvg}
        alt="hero-image"
        style={{ objectFit: "cover", objectPosition: "50% 1%" }}
        className="h-full w-full opacity-100 dark:opacity-30 dark:transition-opacity dark:duration-500"
      /> */}
      <div
        className={`container absolute inset-0 items-start justify-end overflow-hidden`}
      >
        <HeroOverlay />
      </div>
    </section>
  )
}

export default HeroSection
