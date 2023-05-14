import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.event.findMany({});
                res.status(200).json(data)
            } catch (err) {
                res.status(400).json({
                    code: 400,
                    message: err
                })
            }
            break
            default:
            res.status(404).json({
                code: 404,
                message: 'no route'
            })
            break;
    }
}
