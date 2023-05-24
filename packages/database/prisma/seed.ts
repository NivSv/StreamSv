import { PrismaClient } from '../node_modules/.prisma/client/index'
const prisma = new PrismaClient()

async function main() {
    const niv = await prisma.user.upsert({
        where: { email: 'nivsvb@gmail.com' },
        update: {},
        create: {
            email: 'nivsvb@gmail.com',
            name: 'NivSv',
            password: '123456',
            streamToken: 'test',
        },
    })
    console.log({ niv })
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
