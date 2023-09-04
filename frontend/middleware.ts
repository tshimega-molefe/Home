import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/", "/dashboard"],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
