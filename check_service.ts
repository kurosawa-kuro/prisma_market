import { PrismaClient } from '@prisma/client'
// import { read } from './app/services/user'
import { UserService } from './app/services/UserService'
const prisma = new PrismaClient()

async function main() {
    const userService = new UserService();
    const res = await userService.getHello();

    console.dir(res, { depth: null })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })