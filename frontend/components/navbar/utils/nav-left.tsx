"use client"

import { FC, useState } from "react"
import Link from "next/link"

interface NavLeftProps {
  main: string
  submain: string
  path: string
  path2: string
}

const NavLeft: FC<NavLeftProps> = ({ main, submain, path, path2 }) => {
  const [focus, setFocus] = useState<boolean>(false)
  return (
    <Link
      href={`/${main}`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className="flex cursor-pointer items-center space-x-3 py-3"
    >
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        version="1.1"
        width="24"
        data-view-component="true"
        className={` mr-3 transition duration-100 ease-in  ${
          focus ? "text-blue-600" : "text-primary"
        }`}
      >
        <path d={path}></path>
        <path d={path2}></path>
      </svg>
      <div
        className={`${
          focus ? "text-blue-600" : "text-primary/40"
        } text-[14px] transition duration-100 ease-in`}
      >
        <div
          className={`font-semibold transition duration-100 ease-in capitalize  ${
            focus ? "text-blue-600" : "text-primary"
          } text-base leading-5`}
        >
          {main}
        </div>
        {submain}
      </div>
    </Link>
  )
}

export default NavLeft
