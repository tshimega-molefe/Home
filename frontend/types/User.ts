import { Booking } from "./Booking"
import { Post } from "./Post"
import { Service } from "./Service"
import { Store } from "./Store"

export enum Role {
  ADMIN = "ADMIN",
  ENTERPRISE = "ENTERPRISE",
  USER = "USER",
}

export interface User {
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
