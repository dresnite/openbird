import express from 'express'
import User from '../../models/user.ts'

export const registerUserController = async (req: express.Request, res: express.Response) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    await user.save()

    res.status(201).send({ user })
}