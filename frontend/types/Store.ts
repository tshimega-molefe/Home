import { Product } from "./Product"
import { User } from "./User"

export interface Store {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  owner: User
  ownerId: string
  products: Product[]
}
