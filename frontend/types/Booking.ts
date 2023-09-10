import { Product } from "./Product"
import { Service } from "./Service"
import { User } from "./User"

export enum BookingType {
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
}

export enum BookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

export interface Booking {
  id: string
  createdAt: Date
  updatedAt: Date
  bookingType: BookingType
  bookingStatus: BookingStatus
  user: User
  userId: string
  product: Product
  productId: string
  service: Service
  serviceId: string
}
