"use client"

import { FC, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import CodeDemo from "./code-demo"
import CodeEditor from "./code-editor"
import CodeSpace from "./code-space"
import HoverCard from "./hover-card"

interface ProductSectionProps {}

const ProductSection: FC<ProductSectionProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    <section id="product-section" className="container">
      <div className="flex space-x-3 md:space-x-10 md:pl-10">
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layers"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span className="home-campaign-glowing-icon-glow-1 absolute left-0 top-0 z-[3] h-full w-full"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-7 h-full w-[3px] rounded-md bg-gradient-to-b from-[#733787] max-md:w-[2px]"
          ></motion.div>
        </div>
        <div className="mb-24 md:w-8/12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: false }}
            className="mb-7 text-[20px] font-medium md:text-2xl"
          >
            The Swift Stack
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: false }}
            className="mb-7 text-[28px] font-medium max-lg:leading-10 max-md:leading-8 md:text-[40px] lg:text-5xl"
          >
            <span className="text-[#763791]">Execute your vision.&nbsp;</span>
            Our team utilizes industry standard practices, with quality and
            scalable tooling.
          </motion.div>
        </div>
      </div>
      <CodeEditor />
      <CodeSpace />
      <div className="relative z-[1] ">
        <CodeDemo />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-between max-md:flex-col md:space-x-10">
          <HoverCard backgroundColor="#763791" direction="flex-col" left="0">
            <div className="flex-1 flex-col p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32 ">
              <p className=" mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
                <span className="font-semibold text-primary">
                  Join Our Team.
                </span>{" "}
                Change it, influence it, build your own things that other people
                can use.
              </p>
              <div>
                <a
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  href=""
                  className=" inline-block font-semibold text-primary md:text-xl"
                >
                  Explore Careers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={` mb-[3px] ml-3 inline-block text-primary transition duration-300 ease-in ${
                      hovered ? "translate-x-0 " : "-translate-x-1"
                    }`}
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      className={` text-primary transition duration-150 ease-in ${
                        hovered ? " opacity-100" : "opacity-0 "
                      }`}
                      stroke="currentColor"
                      d="M1.75 8H11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <div
                    className={` ${
                      hovered ? "w-11/12 scale-100" : "w-0 scale-0"
                    } h-[2.5px]  origin-left rounded-full bg-primary transition duration-300 ease-in`}
                  ></div>
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-s-lg">
              <Image
                className="js-build-in-item build-in-scale-fade build-in-animate h-auto w-full"
                width="500"
                height="890"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src="/afro.png"
              />
            </div>
          </HoverCard>
          <HoverCard
            backgroundColor="#763791"
            direction="flex-col"
            left="-400px"
          >
            <div className="flex-1 flex-col  p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32 ">
              <p className=" mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
                <span className="font-semibold text-primary">Swift Air</span>
                <br />
                Request private air travel, from any airport, at anytime.
              </p>
              <div>
                <a
                  onMouseEnter={() => setHovered1(true)}
                  onMouseLeave={() => setHovered1(false)}
                  href=""
                  className=" inline-block font-semibold text-primary md:text-xl"
                >
                  Try Swift Air
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={` mb-[3px] ml-3 inline-block text-primary transition duration-300 ease-in ${
                      hovered1 ? "translate-x-0 " : "-translate-x-1"
                    }`}
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      className={` text-primary transition duration-150 ease-in ${
                        hovered1 ? " opacity-100" : "opacity-0 "
                      }`}
                      stroke="currentColor"
                      d="M1.75 8H11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <div
                    className={` ${
                      hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"
                    } h-[2.5px]  origin-left rounded-full bg-primary transition duration-300 ease-in`}
                  ></div>
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-s-lg">
              <img
                className="h-auto  w-full"
                width="1208"
                height="764"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src="https://github.githubassets.com/images/modules/site/home-campaign/illu-mobile.png"
              />
            </div>
          </HoverCard>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
