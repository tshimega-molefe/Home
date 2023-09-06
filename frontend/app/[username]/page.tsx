import { FC } from "react"
import { GetStaticPaths, GetStaticProps } from "next"

import { Booking } from "@/types/Booking"
import { Post } from "@/types/Post"
import { Service } from "@/types/Service"
import { Store } from "@/types/Store"
import { Role, User } from "@/types/User"

// This function runs at build time and generates static routes for each user.

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Fetch the list of users from an API or some data source
//   const users = await fetch("https://.../users").then((res) => res.json())

//   // Generate an array of paths based on the user usernames
//   const paths = users.map((user: User) => ({
//     params: { username: user.username },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// // This function fetches data for a single user based on their username and runs at build time.
// export const getStaticProps: GetStaticProps = async (context) => {
//   const username = context.params?.username
//   // Fetch data for a single user based on their username
//   const store = await fetch(`https://.../users/${username}`).then((res) =>
//     res.json()
//   )

//   return {
//     props: {
//       store,
//     },
//   }
// }

interface pageProps {
  user: {
    id: string
    createdAt: Date
    email: string
    username: string
    name: string
    role: Role
    posts: Post[]
    stores: Store[]
    bookings: Booking[]
    services: Service[]
  }
}

const page: FC<pageProps> = ({ user }) => {
  return <div>this is the user page</div>
}

export default page
