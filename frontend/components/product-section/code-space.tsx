"use client"

import { FC, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface CodeSpaceProps {}

const CodeSpace: FC<CodeSpaceProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)

  const lineVariant = {
    hidden: { height: 0 },
    show: { height: "100%" },
  }
  return (
    <div className="relative flex md:pl-10">
      <img
        alt="The Universe"
        aria-hidden="true"
        width="2712"
        height="2712"
        className="pointer-events-none absolute right-0 top-0 h-auto"
        loading="lazy"
        decoding="async"
        src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
      />
      <div className="relative flex flex-row items-center">
        <motion.div
          variants={lineVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          className="increase h-full w-[3px] origin-top"
        ></motion.div>
        <img
          alt=""
          aria-hidden="true"
          width="81"
          height="485"
          style={{
            left: "calc(50% - 2px)",
            height: "auto",
            maxWidth: "9vw",
            transitionDelay: "100ms",
          }}
          className="absolute bottom-4 left-0 hidden md:block"
          loading="lazy"
          decoding="async"
          src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-productivity.svg"
        />
      </div>
      <div className="pl-6 md:pl-16 lg:pl-24">
        <div className="my-8 flex items-center pb-6 max-md:flex-col-reverse sm:my-12 md:my-16 md:flex-row md:pb-20 lg:gap-x-5">
          <div className="mb-2 w-full py-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="md:pr-6"
            >
              <h2 className="mb-4 w-full text-2xl text-[#7d8590] max-lg:text-[20px] max-md:w-10/12 lg:w-full">
                <span className="font-semibold text-primary">
                  Swift Shopping:
                </span>{" "}
                Allow people to easily shop your own products you list for sale.
                The easiest e-store to set up in the world.
              </h2>
              <Link
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                href="/"
                className="inline-block py-1 text-xl font-semibold text-primary"
              >
                Create your store
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` mb-[2px] ml-3 inline-block text-primary transition duration-300 ease-in  ${
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
            </motion.div>
          </div>
          <div className="w-full px-6 py-4">
            <div className="relative">
              <div className="relative flex flex-row">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "tween" }}
                  className="right-[7.4rem] top-[-540px] z-[1] shadow-2xl sm:absolute"
                >
                  <img
                    src="/picq.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className=" h-auto w-[300px] rounded-md max-md:hidden"
                  />
                  <img
                    src="https://github.githubassets.com/images/modules/site/codespaces/illo-cursor.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="js-build-in-item build-in-slideX-left build-in-animate absolute h-auto max-lg:hidden"
                    width="60"
                    height="96"
                    style={{
                      right: "20%",
                      bottom: "23%",
                      width: "30px",
                      transitionDelay: "200ms",
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: "tween", delay: 0.1 }}
                  className=" build-in-animate relative bottom-0 hidden max-w-[373px] overflow-hidden rounded-md sm:block"
                >
                  <Image
                    src="/world.png"
                    loading="lazy"
                    width={746}
                    height={368}
                    alt=""
                    decoding="async"
                    className="width-full d-block h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", delay: 0.1 }}
          className="mb-10 pb-4 md:mb-32 "
        >
          <div className="md:-mt-28 lg:-mt-36">
            <Image
              src="/rocket.png"
              alt="world"
              width={300}
              height={300}
              className="max-md:hidden"
            />

            <h3 className="mb-2 mt-3 text-3xl font-medium text-[#3ba244] md:text-5xl lg:text-6xl">
              Upcoming launches
            </h3>
            <p className="mb-3 text-base font-medium text-primary md:text-xl">
              Exciting new features in development
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CodeSpace
