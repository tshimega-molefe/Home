import { FC } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Icon, Icons } from "../icons"
import { buttonVariants } from "../ui/button"

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="footer relative pt-14 break-words ">
      <div className="max-w-[1280px] mx-auto relative z-[2] overflow-hidden">
        <div className="flex flex-col lg:flex-row py-10 mb-8 space-x-6 px-4">
          <div className="mb-12 px-2">
            <Link
              href="/"
              data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
              className="color-fg-default d-inline-block"
              aria-label="Go to GitHub homepage"
            >
              <Icons.logo className="h-10 w-40 transition-all max-lg:hidden max-lg:h-10 max-lg:w-28 max-md:active:scale-95" />
              <Icons.icon className="h-10 w-10 transition-all max-md:active:scale-95 lg:hidden" />
            </Link>
            <div className="text-primary">
              <h2 className="mt-6 font-semibold">
                Subscribe to our newsletter
              </h2>
              <p className="text-[14px] text-[#7d8590] mb-6 ">
                Get product updates, company news, and more.
              </p>
              <Link
                href="/newsletter"
                className={`${cn(
                  buttonVariants({ variant: "default", size: "lg" })
                )} active:scale-95 transition-transform duration-75`}
              >
                Subscribe
              </Link>
            </div>
          </div>
          <div className="lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-6">
            <div className="text-muted-foreground">
              <h2 className="font-medium mb-4 font-mono">Products</h2>
              <ul className="text-[14px]">
                <li className="mb-4">
                  <Link
                    href="/products"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    All products
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/teams"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Teams
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/enterprise"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Enterprise
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/startups"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Startups
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/feedback"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Feedback
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/pricing"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/roadmap"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-muted-foreground">
              <h2 className="font-medium mb-4 font-mono">Developers</h2>
              <ul className="text-[14px]">
                <li className="mb-4">
                  <Link
                    href="/access"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Swift APIs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/documentation"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Documentation
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/open-source"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Open Source Projects
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/excalidraw"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Excalidraw
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/discord"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Discord
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/notion"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Notion
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-muted-foreground">
              <h2 className="font-medium mb-4 font-mono">Investor Relations</h2>
              <ul className="text-[14px]">
                <li className="mb-4">
                  <Link
                    href="/investor-relations"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Partners
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/discovery"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Discovery
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/investor-relations/reports"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Annual Reports
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-muted-foreground">
              <h2 className="font-medium mb-4 font-mono">Company</h2>
              <ul className="text-[14px]">
                <li className="mb-4">
                  <Link
                    href="/about"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/blog"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/careers"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Careers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/press"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Press
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/diversity"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Diversity
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/store"
                    className={`${cn(
                      buttonVariants({ variant: "link", size: "sm" })
                    )} active:scale-95`}
                  >
                    Store
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4">
          <ul className="flex items-center max-md:mb-4">
            <li className="mr-4 text-secondary-foreground">
              <Link href="https://instagram.com/swiftstack">
                <Icons.instagram />
              </Link>
            </li>
            <li className="mr-4 text-secondary-foreground">
              <Link href="https://linkedin.com/">
                <Icons.linkedin />
              </Link>
            </li>
            <li className="mr-4 text-secondary-foreground">
              <Link href="https://twitter.com/">
                <Icons.twitter />
              </Link>
            </li>
            <li className="mr-4 text-secondary-foreground">
              <Link href="https://facebook.com/">
                <Icons.facebook />
              </Link>
            </li>
          </ul>
          <ul className="flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap">
            <li className="mr-3 ">© 2023 Swift Stack, Inc.</li>
            <li className="mr-3 ">
              <Link href="/terms-and-conditions">Terms</Link>
            </li>
            <li className="mr-3 ">
              <Link href="/privacy-policy">Privacy Policy (Updated TBA)</Link>
            </li>
            <li className="mr-3 ">
              <Link href="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
