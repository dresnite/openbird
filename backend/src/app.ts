import express from 'express'
import cookieParser from 'cookie-parser'
import './controllers/connect-database.ts'

const app = express()

app.use(express.json())
app.use(cookieParser())

export default app