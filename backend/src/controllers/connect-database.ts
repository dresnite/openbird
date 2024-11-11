import mongoose from 'mongoose'
import { MONGODB_URI } from '../utils/config'

try {
    await mongoose.connect(MONGODB_URI)
} catch (err) {
    console.log('Failed to connect to the database')
    process.exit()
}