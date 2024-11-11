import express from 'express'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.ts'
import './controllers/connect-database.ts'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(userRouter)

export default app