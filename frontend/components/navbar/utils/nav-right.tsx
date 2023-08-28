"use client"

import { FC, useState } from "react"
import Link from "next/link"

interface NavRightProps {
  main: string
  path: string
}

const NavRight: FC<NavRightProps> = ({ main, path }) => {
  const [focus, setFocus] = useState<boolean>(false)
  return (
    <Link
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      href={`/${main}`}
      className={`flex items-center  capitalize ${
        focus ? "text-blue-600" : "text-primary/50"
      }`}
    >
      {main}
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        version="1.1"
        width="16"
        data-view-component="true"
        className={`octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle ml-2 transition duration-150 ease-in ${
          focus
            ? " translate-x-0 text-blue-500 opacity-100"
            : " -translate-x-3 opacity-0"
        }`}
      >
        <path d={path}></path>
      </svg>
    </Link>
  )
}

export default NavRight
