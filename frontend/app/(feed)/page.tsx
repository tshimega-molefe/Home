import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function Feed() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500 items-center">
      {/* Row of filters */}

      <Tabs defaultValue="foryou">
        <TabsList className="py-7 max-md:px-12 md:px-10">
          <TabsTrigger
            value="foryou"
            className="text-2xl md:text-3xl font-bold"
          >
            For You
          </TabsTrigger>
          <TabsTrigger
            value="trending"
            className="text-2xl md:text-3xl font-bold"
          >
            Trending
          </TabsTrigger>
          <TabsTrigger
            value="verified"
            className="text-2xl md:text-3xl font-bold"
          >
            Verified
          </TabsTrigger>
        </TabsList>
        <TabsContent value="foryou" className="min-w-max">
          Feed of users/enterprises relevant to you
        </TabsContent>
        <TabsContent value="trending" className="min-w-max">
          Feed of users/enterprises you might want to know about
        </TabsContent>
        <TabsContent value="verified" className="min-w-max">
          Feed of verified users/enterprises recommened by stack
        </TabsContent>
      </Tabs>
    </div>
  )
}
