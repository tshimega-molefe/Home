import FeedNavBar from "@/components/feed/feed-nav-bar"

export default async function FeedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen pt-12 antialiased">
      <FeedNavBar />
      <div className="container max-w-7xl mx-auto h-full pt-12">{children}</div>
    </div>
  )
}
