import { ModalProvider } from "@/providers.tsx/modal-provider"

import Footer from "@/components/footer/footer"
import { SiteHeader } from "@/components/navbar/site-header"

export default async function FeedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
