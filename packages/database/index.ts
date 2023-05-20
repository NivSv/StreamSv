import { PrismaClient } from './node_modules/.prisma/client/index'

declare global {
    var prisma: PrismaClient | undefined
}

export const prisma =
    global.prisma ||
    new PrismaClient({
        log:
            process.env.NODE_ENV === 'development'
                ? ['query', 'error', 'warn']
                : ['error'],
    })

export { PrismaClient } from './node_modules/.prisma/client/index'

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma
}
