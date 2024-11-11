export const PORT = process.env.PORT || 3000

export const MONGODB_URI: string = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
    throw new Error('The MONGODB_URI environment variable is not set')
}