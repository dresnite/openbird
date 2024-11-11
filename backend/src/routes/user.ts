import express from 'express'
import { normalizeErrors } from '../controllers/middleware/normalize-errors.ts'
import { registerUserController } from '../controllers/user/register-user.ts'

const router = express.Router()

router.post('/', normalizeErrors, registerUserController)

export default router