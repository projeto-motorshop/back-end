declare global {
    namespace Express {
        interface Request {
            user: {
                isAdm: boolean
                id: string
                isSeller: boolean
            }
        }
    }
}