import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      username: "Alice",
      name: "Alice",
      posts: {
        create: {
          title: "Check out Prisma with Next.js",
          featured: true,
          published: true,
        },
      },
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      username: "Bob",
      name: "Bob",
      posts: {
        create: [
          {
            title: "Follow Prisma on Twitter",
            featured: true,
            published: true,
          },
          {
            title: "Follow Nexus on Twitter",
            featured: true,
            published: true,
          },
        ],
      },
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
