"use client"

import { FC, useState } from "react"
import { motion } from "framer-motion"

import CodeEditor from "./code-editor"

interface ProductSectionProps {}

const ProductSection: FC<ProductSectionProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    <section id="product-section" className="container">
      <div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-layers"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-[3]"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="h-full w-[3px] max-md:w-[2px] mt-7 rounded-md bg-gradient-to-b from-[#733787]"
          ></motion.div>
        </div>
        <div className="md:w-8/12 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-[20px] md:text-2xl mb-7 font-medium"
          >
            The Swift Stack
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium"
          >
            <span className="text-[#763791]">Execute your vision.&nbsp;</span>
            Our team utilizes industry standard practices, with quality and
            scalable tooling.
          </motion.div>
        </div>
      </div>
      <CodeEditor />
    </section>
  )
}

export default ProductSection
