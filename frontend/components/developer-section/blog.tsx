"use client"

import { FC, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { business } from "@/assets"
import { getFeaturedPosts } from "@/server/utils"

import { Post } from "@/types/Post"
import HoverCard from "@/components/product-section/hover-card"

interface BlogProps {}

export default function Blog() {
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    // <div className="flex w-full flex-col">
    //   {featuredPosts && featuredPosts.length > 0 ? (
    //     featuredPosts.map((post) => (
    //       <HoverCard backgroundColor="#ffa28b" direction="" left="0">
    //         <div className="flex-1 flex-col justify-between p-8 sm:p-10 md:flex md:space-y-20 lg:py-16 lg:pl-16 lg:pr-32 ">
    //           <div className=" mb-6 space-y-2 text-sm font-light text-muted-foreground md:text-base">
    //             <span className="text-xl font-medium text-primary md:text-3xl">
    //               {post.title}
    //             </span>
    //             <div className="flex flex-row items-center space-x-2">
    //               <Link
    //                 href={`/${post.author.username}`}
    //                 className="hover:underline"
    //               >
    //                 {post.author.name}
    //               </Link>
    //               <p>{post.createdAt.getDate()}</p>
    //             </div>
    //           </div>
    //           <div>
    //             <Link
    //               onMouseEnter={() => setHovered(true)}
    //               onMouseLeave={() => setHovered(false)}
    //               href={`${post.author.username}/posts/${post.id}`}
    //               className=" inline-block font-semibold text-primary md:text-xl"
    //             >
    //               Read More
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className={` mb-[3px] ml-3 inline-block text-primary transition duration-300 ease-in ${
    //                   hovered ? "translate-x-0 " : "-translate-x-1"
    //                 }`}
    //                 width="20"
    //                 height="20"
    //                 viewBox="0 0 16 16"
    //                 fill="none"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
    //                 ></path>
    //                 <path
    //                   className={` text-primary transition duration-150 ease-in ${
    //                     hovered ? " opacity-100" : "opacity-0 "
    //                   }`}
    //                   stroke="currentColor"
    //                   d="M1.75 8H11"
    //                   strokeWidth="1.5"
    //                   strokeLinecap="round"
    //                 ></path>
    //               </svg>
    //               <div
    //                 className={` ${
    //                   hovered ? "w-11/12 scale-100" : "w-0 scale-0"
    //                 } h-[2.5px]  origin-left rounded-full bg-primary transition duration-300 ease-in`}
    //               ></div>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="shadow-3xl z-[1] flex-1 overflow-hidden rounded-s-lg">
    //           <div className="box-shadow-card-mktg mx-3 rounded-lg bg-transparent max-sm:mb-4 sm:mx-10 sm:mb-12 md:mb-8 md:ml-0 md:mt-10">
    //             <div className="">
    //               <div className="mb-0 overflow-x-auto p-2 ">
    //                 <Link
    //                   href={`${post}/posts/${post.id}`}
    //                   passHref
    //                   className="relative flex items-center overflow-hidden rounded-lg transition-transform duration-100 active:scale-95 max-sm:h-[60vw] sm:h-96 md:h-80"
    //                 >
    //                   {/* <Image
    //                     src={business}
    //                     alt="blog-image"
    //                     className="object-cover"
    //                     fill
    //                   /> */}
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </HoverCard>
    //     ))
    //   ) : (
    //     <h1>There are currently no featured posts</h1>
    //   )}
    // </div>
    <div>nothing to see here</div>
  )
}
