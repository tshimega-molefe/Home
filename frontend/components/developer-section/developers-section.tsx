"use client"

import { FC, useState } from "react"
import { motion } from "framer-motion"

import Blog from "@/components/developer-section/blog"
import Portals from "@/components/developer-section/portals"
import { Icons } from "@/components/icons"
import HoverCard from "@/components/product-section/hover-card"

import CodeSpace from "../product-section/code-space"

interface DevelopersSectionProps {}

const DevelopersSection: FC<DevelopersSectionProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered1, setHovered1] = useState<boolean>(false)
  const [hovered2, setHovered2] = useState<boolean>(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  }
  return (
    <div
      id="developers"
      className="container home-campaign-productivity px-4 pt-8 overflow-hidden"
    >
      <div className="flex md:pl-7 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <Icons.developers className="h-6 w-6" />
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ffd6cc] via-[#ec6547] to-transparent"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-24"
        >
          <h2
            className="text-[20px] md:text-2xl mb-7 font-medium text-primary js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Developers
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-primary js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#ffa28b]">Latest&nbsp;</span>
            blog posts.
          </h3>
        </motion.div>
      </div>
      <Blog />
      <Portals />
      {/* <CodeSpace /> */}
    </div>
  )
}

export default DevelopersSection
