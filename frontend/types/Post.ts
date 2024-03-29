import { User } from "./User"

export interface Post {
  id: string
  createdAt: Date
  updatedAt: Date
  published: boolean
  featured: boolean
  title: string
  author: User
  authorId: string
}
