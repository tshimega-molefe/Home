export default function FeedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#01A8BC]">
      {children}
    </div>
  )
}
