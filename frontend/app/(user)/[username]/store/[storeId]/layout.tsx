export default function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#01A8BC] bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500">
      {children}
    </div>
  )
}
