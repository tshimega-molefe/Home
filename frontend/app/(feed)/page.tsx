import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function Feed() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500 items-center">
      {/* Row of filters */}

      <Tabs defaultValue="foryou" className="bg-red-300">
        <TabsList className="p-8">
          <TabsTrigger
            value="foryou"
            className="text-3xl md:text-4xl font-bold"
          >
            For You
          </TabsTrigger>
          <TabsTrigger
            value="trending"
            className="text-3xl md:text-4xl font-bold"
          >
            Trending
          </TabsTrigger>
          <TabsTrigger
            value="verified"
            className="text-3xl md:text-4xl font-bold"
          >
            Verified
          </TabsTrigger>
        </TabsList>
        <TabsContent value="foryou" className="min-w-max">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="trending" className="min-w-max">
          Change your password here.
        </TabsContent>
        <TabsContent value="verified" className="min-w-max">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  )
}
