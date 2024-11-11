import express from 'express'
import { DEBUG_LEVEL } from '../../utils/config.ts'

export const normalizeErrors = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        await next()
    } catch(err) {
        res.status(500).send({
            message: 'Something went wrong',
            stack: (DEBUG_LEVEL > 0) ? err.stack : undefined
        })
    }
}