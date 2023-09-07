import { PrismaClient, Role } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      username: "user1",
      firstName: "user1Name",
      lastName: "user2Name",
      role: Role.USER,
      externalId: "user_2Uzqy6eURDQkbxv8lkWdhcVsppA",
    },
  })

  const store1 = await prisma.store.create({
    data: {
      name: "Store-1",
      ownerId: user1.id,
    },
  })

  const store2 = await prisma.store.create({
    data: {
      name: "Store-2",
      ownerId: user1.id,
    },
  })

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
        title: "Third Post by User One",
        authorId: user1.id,
        published: true,
      },
      {
        title: "Fourth Post by User One",
        authorId: user1.id,
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
