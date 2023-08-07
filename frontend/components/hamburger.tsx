"use client"

import { FC } from "react"
import { closeNav, openNav, selectNavState } from "@/features/nav/nav"

import { useAppDispatch, useAppSelector } from "../lib/hooks"

interface HamburgerProps {}

const Hamburger: FC<HamburgerProps> = ({}) => {
  const dispatch = useAppDispatch()
  const showNav = useAppSelector(selectNavState)

  const handleNavToggle = () => {
    if (showNav == true) {
      dispatch(openNav(false))
    } else {
      dispatch(closeNav(true))
    }
  }
  return (
    <button
      type="button"
      onClick={handleNavToggle}
      className="cursor-pointer lg:hidden"
    >
      <div
        className={`h-[2px] w-[34px] bg-primary transition duration-150 ease-in ${
          showNav ? "mb-0 translate-y-[1px] rotate-45" : "mb-3 rotate-0"
        }`}
      />
      <div
        className={`h-[2px] w-[34px] transition duration-150 ease-in ${
          showNav ? "mb-0 hidden" : "mb-3 bg-primary/90"
        }`}
      />
      <div
        className={`h-[2px] w-[34px]  transition duration-150 ease-in ${
          showNav ? "mb-0 -rotate-45 bg-primary" : "rotate-0 bg-primary/80"
        }`}
      />
    </button>
  )
}

export default Hamburger
