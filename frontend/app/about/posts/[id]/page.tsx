import { FC } from "react"
import { GetStaticPaths, GetStaticProps } from "next"

import { Post } from "@/types/Post"
import { User } from "@/types/User"

// This function runs at build time and generates static routes for each post.

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of posts from an API or some data source
  const posts = await fetch("https://.../posts").then((res) => res.json())

  // Generate an array of paths based on the post slugs
  const paths = posts.map((post: Post) => ({
    params: { id: post.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

// This function fetches data for a single post based on its slug and runs at build time.
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  // Fetch data for a single post based on its slug
  const post = await fetch(`https://.../posts/${id}`).then((res) => res.json())

  return {
    props: {
      post,
    },
  }
}

interface pageProps {
  post: {
    id: string
    createdAt: Date
    updatedAt: Date
    published: boolean
    title: string
    author: User
    authorId: string
  }
}

const page: FC<pageProps> = ({ post }) => {
  return <div>This is a post</div>
}

export default page
