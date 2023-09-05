"use client"

import { FC, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import HoverCard from "./hover-card"

interface CodeDemoProps {}

const CodeDemo: FC<CodeDemoProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [showPy, setShowPy] = useState<boolean>(true)
  const [showJs, setShowJs] = useState<boolean>(false)
  const [showGo, setShowGo] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "tween" } },
  }

  return (
    <HoverCard backgroundColor="#763791" direction="" left="0">
      <div className="flex-1 flex-col justify-between p-8 sm:p-10 md:flex md:space-y-20 lg:py-16 lg:pl-16 lg:pr-32 ">
        <p className=" mb-6 text-xl font-medium text-[#7d8590] md:text-2xl">
          <span className="font-medium text-primary">Script.Ed</span>
          <br />
          Authors, Comedians, Filmmakers, Poets, Youtubers.
          <br />
          Use AI to bring your story to life 50X faster.
        </p>
        <div>
          <Link
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            href="script-ed"
            className=" inline-block font-semibold text-primary md:text-xl"
          >
            Learn More
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
      <div className="shadow-3xl z-[1] flex-1 overflow-hidden rounded-s-lg">
        <div className="box-shadow-card-mktg mx-3 mb-16 rounded-lg border-[0.5px] border-[#30363d] bg-[#161b22] text-left text-[#161b22] sm:mx-10 md:ml-0 md:mt-10">
          <div className="">
            <div className="mb-0 overflow-x-auto border-b-[0.5px] border-[#30363d] px-2 pt-2 ">
              <div className="tab-nav flex items-center bg-[#161b22] text-[#7d8590]">
                <button
                  onClick={() => {
                    setShowPy(true)
                    setShowGo(false)
                    setShowJs(false)
                  }}
                  type="button"
                  className={`flex items-center  px-4 py-2 ${
                    showPy
                      ? "rounded-t-md border-[0.5px] border-b-[0] border-[#30363d] bg-[#0d1117] text-white"
                      : ""
                  }  `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="octicon mr-2"
                    height="16"
                    width="16"
                  >
                    <title>Python</title>
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                  </svg>
                  <span>forrest_gump.py</span>
                </button>
                <button
                  onClick={() => {
                    setShowPy(false)
                    setShowGo(false)
                    setShowJs(true)
                  }}
                  type="button"
                  className={`flex items-center px-4 py-2 ${
                    showJs
                      ? "rounded-t-md border-[0.5px] border-b-[0] border-[#30363d] bg-[#0d1117] text-white"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="octicon mr-2"
                    height="16"
                    width="16"
                  >
                    <title>Python</title>
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                  </svg>

                  <span>inception.py</span>
                </button>
                <button
                  onClick={() => {
                    setShowPy(false)
                    setShowGo(true)
                    setShowJs(false)
                  }}
                  type="button"
                  className={`flex items-center px-4 py-2 ${
                    showGo
                      ? "rounded-t-md border-[0.5px] border-b-[0] border-[#30363d] bg-[#0d1117] text-white"
                      : ""
                  } `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="octicon mr-2"
                    height="16"
                    width="16"
                  >
                    <title>Python</title>
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                  </svg>
                  <span>dave_chapelle.py</span>
                </button>
                <button></button>
              </div>
            </div>
            <div
              className={`relative bg-[#0d1117] p-4 ${showPy ? "" : "hidden"}`}
            >
              <div className="flex">
                <div className="text-right text-[#6e7681]">
                  {Array.from({ length: 8 }, (_, index) => (
                    <div className="pr-2" key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div
                  key={count}
                  className="flex-1 overflow-x-auto rounded-b-md text-white "
                >
                  <pre className="">
                    <span className="code-editor-line-mktg">
                      <span className="pl-k">EXT</span>.{" "}
                      <span className="pl-s1">A NEW ORLEANS STREET</span>,
                      <span className="pl-s1"> THE PRESENT - DAY</span>{" "}
                    </span>
                  </pre>
                  <pre className="">
                    <span className="code-editor-line-mktg"></span>
                  </pre>
                  <pre className="">
                    <motion.span
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      className="code-editor-line-mktg"
                    >
                      <motion.span
                        variants={item}
                        className="pl-s1 js-type-letters"
                      >
                        And
                      </motion.span>
                      <motion.span variants={item} className="js-type-letters">
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className="pl-s1 js-type-letters"
                      >
                        we see a man, sitting on a Bus bench,
                      </motion.span>
                    </motion.span>
                  </pre>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, type: "just" }}
                  >
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">reach to pick it up</span>.{" "}
                        <span className="pl-s1">In his forties</span>,
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">
                          he looks like he smells like fish
                        </span>
                        .
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">
                          Dirty clothes, work boots, a shopping bag filled with
                        </span>
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">
                          a conglomeration of his things alongside him
                        </span>
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">
                          from the faceless homeless we see everywhere, in his
                          eyes.
                        </span>
                      </span>
                    </pre>
                    <div className="color-fg-on-emphasis  js-type-row f5 row-is-visible absolute flex items-center rounded-md rounded-tl-none bg-[#763791] p-2 font-bold">
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
                        className="lucide lucide-feather mr-1"
                      >
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                        <line x1="16" x2="2" y1="8" y2="22" />
                        <line x1="17.5" x2="9" y1="15" y2="15" />
                      </svg>
                      Script.Ed
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute bottom-[-60px] left-0  z-[1] mb-5 flex w-full items-center justify-center">
                <button
                  onClick={() => setCount(count + 1)}
                  type="button"
                  className="group flex items-center justify-between text-primary transition-transform duration-150 active:scale-95"
                >
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    fill="currentColor"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-sync mr-2 group-hover:animate-spin"
                  >
                    <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                  </svg>
                  Replay
                </button>
              </div>
            </div>
            <div
              className={`relative bg-[#0d1117] p-4 ${showJs ? "" : "hidden"}`}
            >
              <div className="flex">
                <div className="text-right text-[#6e7681]">
                  {Array.from({ length: 7 }, (_, index) => (
                    <div className="pr-2" key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div
                  key={count}
                  className="flex-1 overflow-x-auto rounded-b-md text-white"
                >
                  <pre className="">
                    <span className="code-editor-line-mktg d-inline-block">
                      <span className="pl-k">ARTHUR</span>:
                    </span>
                  </pre>
                  <pre className="">
                    <motion.span
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      className="code-editor-line-mktg d-inline-block"
                    >
                      <motion.span
                        variants={item}
                        className="js-type-letters"
                      ></motion.span>
                      <motion.span
                        variants={item}
                        className="pl-s1 js-type-letters"
                      >
                        Saito knows.
                      </motion.span>
                      <motion.span variants={item} className="js-type-letters">
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className="pl-s1 js-type-letters"
                      >
                        He&apos;s
                      </motion.span>
                      <motion.span variants={item} className="js-type-letters">
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className="pl-s1 js-type-letters"
                      >
                        playing
                      </motion.span>
                      <motion.span variants={item} className="js-type-letters">
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className="pl-s1 js-type-letters"
                      >
                        with
                      </motion.span>
                      <motion.span variants={item} className="js-type-letters">
                        {" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className="pl-s1 js-type-letters"
                      >
                        us.
                      </motion.span>
                    </motion.span>
                  </pre>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, type: "just" }}
                  >
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-k">COBB</span>:
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">
                          I can get it here. The information&apos;s in the safe-{" "}
                        </span>
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">
                          he looked right at it when I mentioned secrets.
                        </span>
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">
                          Arthur Nods. Then spots someone over Cobb&apos;s
                        </span>
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">shoulder.</span>
                      </span>
                    </pre>
                    <div className="color-fg-on-emphasis  js-type-row f5 row-is-visible absolute flex items-center rounded-md rounded-tl-none bg-[#763791] p-2 font-bold">
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
                        className="lucide lucide-feather mr-1"
                      >
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                        <line x1="16" x2="2" y1="8" y2="22" />
                        <line x1="17.5" x2="9" y1="15" y2="15" />
                      </svg>
                      Script.Ed
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute bottom-[-60px] left-0  z-[1] mb-5 flex w-full items-center justify-center ">
                <button
                  onClick={() => setCount(count + 1)}
                  type="button"
                  className="group flex items-center justify-between text-primary transition-transform duration-150 active:scale-95"
                >
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    fill="currentColor"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-sync mr-2 group-hover:animate-spin"
                  >
                    <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                  </svg>
                  Replay
                </button>
              </div>
            </div>
            <div
              className={`relative bg-[#0d1117] p-4 ${showGo ? "" : "hidden"}`}
            >
              <div className="flex">
                <div className="text-right text-[#6e7681]">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div className="pr-2" key={index + 1}>
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div
                  key={count}
                  className="flex-1 overflow-x-auto rounded-b-md text-white"
                >
                  <pre className="">
                    <span className="code-editor-line-mktg d-inline-block">
                      <span className="pl-k">CONT.</span> He just pulled up in
                      front of an old
                    </span>
                  </pre>
                  <pre className="">
                    <motion.span
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      className="code-editor-line-mktg d-inline-block"
                    >
                      <motion.span
                        variants={item}
                        className="js-type-letters"
                      ></motion.span>
                      <motion.span variants={item} className=" js-type-letters">
                        rickety
                      </motion.span>
                      <motion.span variants={item} className="js-type-letters">
                        {" "}
                      </motion.span>
                      <motion.span variants={item} className="js-type-letters">
                        building{" "}
                      </motion.span>
                      <motion.span variants={item} className="js-type-letters">
                        that looked{" "}
                      </motion.span>
                      <motion.span
                        variants={item}
                        className="pl-s1 js-type-letters"
                      >
                        like a project.
                      </motion.span>
                    </motion.span>
                  </pre>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, type: "just" }}
                  >
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">
                          Now, I&apos;ve never been there before, I&apos;m not
                          sure
                        </span>
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="">
                          if it <span className="italic">was</span> a project
                          but, it <span className="italic">certainly</span> had
                          all
                        </span>
                      </span>
                    </pre>
                    <pre className=" bg-[#388bfd1a]">
                      <span>
                        <span className="pl-s1">
                          the familiar <span className="italic">symptoms</span>{" "}
                          of a project...
                        </span>
                      </span>
                    </pre>

                    <div className="color-fg-on-emphasis js-type-row f5 row-is-visible absolute flex items-center rounded-md rounded-tl-none bg-[#763791] p-2 font-bold">
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
                        className="lucide lucide-feather mr-1"
                      >
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                        <line x1="16" x2="2" y1="8" y2="22" />
                        <line x1="17.5" x2="9" y1="15" y2="15" />
                      </svg>
                      Script.Ed
                    </div>
                  </motion.div>
                </div>
                <div
                  onClick={() => setCount(count + 1)}
                  className="absolute bottom-[-60px] left-0  z-[1] mb-5 flex w-full items-center justify-center "
                >
                  <button
                    type="button"
                    className="group flex items-center justify-between text-primary transition-transform duration-150 active:scale-95"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      fill="currentColor"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-sync mr-2 group-hover:animate-spin"
                    >
                      <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                    </svg>
                    Replay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HoverCard>
  )
}

export default CodeDemo
