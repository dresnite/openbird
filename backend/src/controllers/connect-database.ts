import mongoose from 'mongoose'
import { DEBUG_LEVEL, MONGODB_URI } from '../utils/config.ts'

try {
    await mongoose.connect(MONGODB_URI)

    if (DEBUG_LEVEL !== -1) {
        console.log('Successfully connected to the database')
    }
} catch (err) {
    console.log('Failed to connect to the database')
    process.exit()
}