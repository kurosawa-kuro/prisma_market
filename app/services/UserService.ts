import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';

// const prisma = new PrismaClient()
// export const read = async () => {
//     const allUsers = await prisma.user.findMany({
//         include: {
//             posts: true,
//             profile: true,
//         },
//     })
//     // console.dir(allUsers, { depth: null })
//     return allUsers
// }

export class UserService {
    getHello(): string {
        return 'Hello World!';
    }
}