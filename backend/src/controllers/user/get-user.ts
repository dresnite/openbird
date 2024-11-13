import express from 'express'
import User from '../../models/user.ts'

export const getUserController = async (req: express.Request, res: express.Response) => {
    const userId = req.params.userId

    const user = await User.findById(userId)

    if (user) {
        res.status(200).send({ user })
    } else {
        res.status(404).send({
            message: 'User not found'
        })
    }
} 