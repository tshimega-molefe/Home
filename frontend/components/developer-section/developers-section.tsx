"use client"

import { FC, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Post } from "@/types/Post"
import Blog from "@/components/developer-section/blog"
import Portals from "@/components/developer-section/portals"
import { Icons } from "@/components/icons"
import HoverCard from "@/components/product-section/hover-card"

interface DevelopersSectionProps {}

const DevelopersSection: FC<DevelopersSectionProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    <div
      id="developers"
      className="home-campaign-productivity container overflow-hidden px-4 pt-8"
    >
      <div className="flex space-x-3 md:space-x-10 md:pl-7">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <Icons.developers className="h-6 w-6" />
            <span className="home-campaign-glowing-icon-glow-2 z-3 absolute left-0 top-0 h-full w-full"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className=" mt-7 h-full w-[3px] rounded-md bg-gradient-to-b from-[#ffd6cc] via-[#ec6547] to-transparent"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="mb-24 md:w-10/12"
        >
          <h2
            className="js-build-in-item build-in-slideX-left build-in-animate mb-7 text-[20px] font-medium text-primary md:text-2xl"
            style={{ transitionDelay: "200ms" }}
          >
            Developers
          </h2>
          <h3
            className="js-build-in-item build-in-slideX-left build-in-animate mb-7 text-[28px] font-medium text-primary max-lg:leading-10 max-md:leading-8 md:text-[40px] lg:text-5xl"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#ffa28b]">Latest&nbsp;</span>
            news.
          </h3>
        </motion.div>
      </div>
      <Blog />
      <Portals />
      <div className="flex items-center justify-between">
        <div className="flex justify-between max-md:flex-col md:space-x-10">
          <HoverCard
            backgroundColor="#ffa28b"
            direction="flex-col"
            left="-400px"
          >
            <div className="flex-1 flex-col  p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32 ">
              <p className=" mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
                <span className="font-semibold text-primary">Developers</span>
                <br />
                <br />
                Let&apos;s build something smart together.
              </p>
              <div>
                <Link
                  onMouseEnter={() => setHovered1(true)}
                  onMouseLeave={() => setHovered1(false)}
                  href="/portal"
                  className=" inline-block font-semibold text-primary md:text-xl"
                >
                  Developer Portal
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
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-s-lg">
              <Image
                className="h-auto  w-full"
                width="900"
                height="800"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src="/man.png"
              />
            </div>
          </HoverCard>
          <HoverCard backgroundColor="#939aff" direction="flex-col" left="0">
            <div className="flex-1 flex-col p-8 sm:p-10 md:flex lg:py-16 lg:pl-16 lg:pr-32 ">
              <p className=" mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
                <span className="font-semibold text-primary">Investors</span>
                <br />
                <br />
                Help us create amazing things.
              </p>
              <div>
                <Link
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  href="/relations"
                  className=" inline-block font-semibold text-primary md:text-xl"
                >
                  Become a partner
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
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-s-lg">
              <Image
                className="js-build-in-item build-in-scale-fade build-in-animate h-auto w-full"
                width="900"
                height="1000"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src="/doc.png"
              />
            </div>
          </HoverCard>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "240px" }}
        transition={{ delay: 0.2 }}
        className=" ml-3 mt-[-20px] h-[240px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff] md:ml-10"
      ></motion.div>
    </div>
  )
}

export default DevelopersSection
