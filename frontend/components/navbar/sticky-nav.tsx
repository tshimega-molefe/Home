"use client"

import { FC, useEffect, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"

interface StickyNavProps {}

const StickyNav: FC<StickyNavProps> = ({}) => {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const [product, setProduct] = useState<boolean>(false)
  const [developers, setDevelopers] = useState<boolean>(false)
  const [consultation, setConsultation] = useState<boolean>(false)
  const [product1, setProduct1] = useState<boolean>(false)
  const [developers1, setDevelopers1] = useState<boolean>(false)
  const [consultation1, setConsultation1] = useState<boolean>(false)
  const [smallNav, setSmallNav] = useState<boolean>(false)
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered1, setHovered1] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // console.log('Hello World');
      }
      const element = document.getElementById("nav")
      const topCoordinate = element?.getBoundingClientRect().top
      const Product = document.getElementById("products")
      const topProduct = Product?.getBoundingClientRect().top
      const Developers = document.getElementById("developers")
      const topDevelopers = Developers?.getBoundingClientRect().top
      const Consultation = document.getElementById("consultation")
      const topConsultation = Consultation?.getBoundingClientRect().top
      if (topCoordinate && topCoordinate < 0) {
        setIsSticky(true)
      }
      if (topCoordinate && topCoordinate < -20) {
        setIsFixed(true)
      }
      if (topCoordinate && topCoordinate > -20) {
        setIsFixed(false)
      }
      if (topCoordinate && topCoordinate > 0) {
        setIsSticky(false)
      }
      if (topProduct && topProduct < 10) {
        setProduct(true)
        setDevelopers(false)
        setConsultation(false)
      }
      if (topDevelopers && topDevelopers < 10) {
        setProduct(false)
        setDevelopers(true)
        setConsultation(false)
      }
      if (topConsultation && topConsultation < 10) {
        setProduct(false)
        setDevelopers(false)
        setConsultation(true)
      }
      // console.log(topCoordinate);
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      id="nav"
      className={`absolute z-[3] h-[100px] transition duration-150 ease-in ${
        isSticky ? "visible" : "invisible"
      }`}
    >
      <div className=""></div>
      <div
        className={`w-screen ${
          isFixed ? "fixed" : "sticky"
        }  top-0 bg-white py-2 shadow-md shadow-slate-300 dark:bg-[#0d1117] dark:shadow-black `}
      >
        <div className="relative mx-auto flex max-w-[1280px] items-center px-12 pb-2 pt-1 max-lg:flex-col lg:px-3 lg:pb-3">
          <button
            onClick={() => setSmallNav(!smallNav)}
            className="absolute right-12 top-4 lg:hidden"
          >
            <svg
              aria-hidden="true"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              version="1.1"
              width="24"
              data-view-component="true"
              className={` text-primary ${smallNav ? "hidden" : ""}`}
            >
              <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path>
            </svg>
            <svg
              aria-hidden="true"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              version="1.1"
              width="24"
              data-view-component="true"
              className={` text-primary ${smallNav ? "" : "hidden"}`}
            >
              <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
            </svg>
          </button>
          <div className="flex flex-auto flex-col justify-start text-[16px] text-primary max-lg:w-full lg:flex-row  lg:space-x-4">
            <Link
              href="#products"
              onClick={() => setSmallNav(false)}
              onMouseEnter={() => setProduct1(true)}
              onMouseLeave={() => setProduct1(false)}
              className={` max-lg:pt-2  ${
                product1 ? "lg:text-[#733787]" : ""
              }  ${
                product || smallNav
                  ? "max-lg:pb-6 lg:text-[#733787]"
                  : "max-lg:hidden"
              } `}
            >
              Products{" "}
              <div
                className={`mx-auto mt-1 h-[1px] w-10/12 scale-0 bg-primary transition duration-200 ease-in max-lg:hidden ${
                  product1 ? "scale-100 bg-primary" : ""
                } ${product ? "scale-100 bg-[#733787]" : ""}`}
              ></div>
            </Link>
            <Link
              href="#developers"
              onClick={() => setSmallNav(false)}
              onMouseEnter={() => setDevelopers1(true)}
              onMouseLeave={() => setDevelopers1(false)}
              className={` max-lg:pt-2 ${
                developers1 ? "lg:text-[#733787]" : ""
              } ${
                developers || smallNav
                  ? "max-lg:pb-6 lg:text-[#733787]"
                  : "max-lg:hidden"
              } `}
            >
              Developers
              <div
                className={`mx-auto mt-1 h-[1px] w-10/12 scale-0 bg-primary transition duration-100 ease-in max-lg:hidden ${
                  developers1 ? "scale-100 bg-primary" : ""
                } ${developers ? "scale-100 bg-[#733787]" : ""}`}
              ></div>
            </Link>
            <Link
              href="#consultation"
              onClick={() => setSmallNav(false)}
              onMouseEnter={() => setConsultation1(true)}
              onMouseLeave={() => setConsultation1(false)}
              className={` max-lg:pt-2 ${
                consultation1 ? "lg:text-[#733787]" : ""
              } ${
                consultation || smallNav
                  ? "lg:text-[#733787] "
                  : "max-lg:hidden"
              } `}
            >
              Consultation
              <div
                className={`mx-auto mt-1 h-[1px] w-10/12 scale-0 bg-primary transition duration-100 ease-in max-lg:hidden ${
                  consultation1 ? "scale-100 bg-primary" : ""
                } ${consultation ? "scale-100 bg-[#733787]" : ""}`}
              ></div>
            </Link>
          </div>
          <div
            className={`flex items-center max-lg:mt-5 max-lg:w-full max-lg:flex-col max-lg:space-y-3 lg:ml-5 lg:space-x-5 ${
              smallNav ? "" : "max-lg:hidden"
            }`}
          >
            <Link
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href="#consultation"
              className={`space-x-2 max-lg:w-full ${cn(
                buttonVariants({ variant: "default", size: "lg" })
              )}`}
            >
              Book a product demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` ml-2 transition duration-150 ease-in ${
                  hovered ? "translate-x-2 " : "-translate-x-0"
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
                  className={`  transition duration-150 ease-in ${
                    hovered ? " opacity-100" : "opacity-0 "
                  }`}
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </Link>
            <Link
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
              href="/onboarding"
              className={`space-x-2 py-[1.40rem] max-lg:w-full ${cn(
                buttonVariants({ variant: "outline", size: "lg" })
              )}`}
            >
              Create an account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` ml-2 transition duration-150 ease-in ${
                  hovered1 ? "translate-x-2 " : "-translate-x-0"
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
                  className={` origin-right text-primary transition duration-150 ease-in ${
                    hovered1 ? " opacity-100" : "opacity-0 "
                  }`}
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyNav
