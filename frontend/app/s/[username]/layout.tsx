import { auth } from "@clerk/nextjs"

export default function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { username: string }
}) {
  const { user } = auth()
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#01A8BC] bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500">
      {children}
    </div>
  )
}
