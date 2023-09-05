import { Product } from "./Product"
import { Service } from "./Service"
import { User } from "./User"

export enum BookingType {
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
}

export interface Booking {
  id: string
  createdAt: Date
  updatedAt: Date
  bookingType: BookingType
  user: User
  userId: string
  product: Product
  productId: string
  service: Service
  serviceId: string
}
