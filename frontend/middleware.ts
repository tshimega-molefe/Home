import { NextResponse } from "next/server"
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs"

export default authMiddleware({
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }
    // redirect them to organization selection page
    if (
      auth.userId &&
      !auth.orgId &&
      req.nextUrl.pathname !== "/org-selection"
    ) {
      const orgSelection = new URL("/org-selection", req.url)
      return NextResponse.redirect(orgSelection)
    }
  },
})
