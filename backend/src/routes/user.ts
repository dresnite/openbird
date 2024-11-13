import express from 'express'
import { normalizeErrors } from '../controllers/middleware/normalize-errors.ts'
import { registerUserController } from '../controllers/user/register-user.ts'
import { getUserController } from '../controllers/user/get-user.ts'

const router = express.Router()

router.get('/:userId', normalizeErrors, getUserController)
router.post('/', normalizeErrors, registerUserController)

export default router