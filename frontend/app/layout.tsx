import "@/styles/globals.css"
import { Metadata } from "next"
import { ModalProvider } from "@/providers.tsx/modal-provider"
import { ClerkProvider } from "@clerk/nextjs"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { Providers } from "@/lib/provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "relative min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">
                  <ModalProvider />
                  {children}
                </div>
              </div>
            </ThemeProvider>
          </Providers>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
