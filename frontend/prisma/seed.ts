import { PrismaClient, Role } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create two users
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      username: "user1",
      name: "User One",
      role: Role.USER,
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      username: "user2",
      name: "User Two",
      role: Role.USER,
    },
  })

  // Create a store for each user (without products)
  const store1 = await prisma.store.create({
    data: {
      name: "Store 1",
      ownerId: user1.id,
    },
  })

  const store2 = await prisma.store.create({
    data: {
      name: "Store 2",
      ownerId: user2.id,
    },
  })

  // Create two posts for each user
  await prisma.post.createMany({
    data: [
      {
        title: "First Post by User One",
        authorId: user1.id,
        published: true,
      },
      {
        title: "Second Post by User One",
        authorId: user1.id,
        published: true,
      },
      {
        title: "First Post by User Two",
        authorId: user2.id,
        published: true,
      },
      {
        title: "Second Post by User Two",
        authorId: user2.id,
        published: true,
      },
    ],
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
