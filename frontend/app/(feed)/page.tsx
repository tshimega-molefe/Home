import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function Feed() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500 items-center overflow-x-hidden">
      <Tabs defaultValue="foryou" className="max-md:w-auto">
        <TabsList className="md:py-6 md:px-2">
          <TabsTrigger value="foryou" className="md:text-2xl font-bold">
            For You
          </TabsTrigger>
          <TabsTrigger value="trending" className="md:text-2xl font-bold">
            Discover
          </TabsTrigger>
          <TabsTrigger value="verified" className="md:text-2xl font-bold">
            Verified
          </TabsTrigger>
        </TabsList>
        <TabsContent value="foryou" className="max-sm:max-w-xs">
          People and businesses relevant to you
        </TabsContent>
        <TabsContent value="trending" className="max-sm:max-w-xs">
          Discover new people and businesses
        </TabsContent>
        <TabsContent value="verified" className="max-sm:max-w-xs">
          Verified people and businesses
        </TabsContent>
      </Tabs>
    </div>
  )
}
