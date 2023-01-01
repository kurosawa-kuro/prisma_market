import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            password: 'password',
            posts: {
                create: [{ title: 'Hello World' }, { title: 'Hello World2' }]
            },
            profile: {
                create: {
                    address: 'すすきの',
                    phone: '011-598-7894',
                    mobile_phone: '080-6074-5153',
                    bio: 'I like turtles',
                },
            },
        },
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    })
    console.dir(allUsers, { depth: null })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })