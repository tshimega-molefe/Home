import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function Feed() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500 items-center overflow-x-hidden">
      <Tabs defaultValue="foryou" className="max-sm:max-w-xs">
        <TabsList className="md:py-6 max-md:py-6 max-md:px-2 md:px-2">
          <TabsTrigger value="foryou" className="text-xl md:text-2xl font-bold">
            For You
          </TabsTrigger>
          <TabsTrigger
            value="trending"
            className="text-xl md:text-2xl font-bold"
          >
            Discover
          </TabsTrigger>
          <TabsTrigger
            value="verified"
            className="text-xl md:text-2xl font-bold"
          >
            Verified
          </TabsTrigger>
        </TabsList>
        <TabsContent value="foryou" className="max-sm:max-w-xs">
          Feed relevant to you
        </TabsContent>
        <TabsContent value="trending" className="max-sm:max-w-xs">
          Discover new people
        </TabsContent>
        <TabsContent value="verified" className="max-sm:max-w-xs">
          Feed recommended for you
        </TabsContent>
      </Tabs>
    </div>
  )
}
