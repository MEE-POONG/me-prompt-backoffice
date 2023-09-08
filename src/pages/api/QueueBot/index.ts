import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const queueBots = await prisma.queueBot.findMany();
                res.status(200).json({ success: true, data: queueBots });
            } catch (error) {
                res.status(500).json({ success: false, message: "An error occurred while fetching the queueBots" });
            }
            break;

        case 'POST':
            try {
                const { title, username, position, startDate, endDate } = req.body;
                const newQueueBot = await prisma.queueBot.create({
                    data: {
                        title,
                        username,
                        position,
                        startDate,
                        endDate,
                    },
                });
                res.status(201).json({ success: true, data: newQueueBot });
            } catch (error) {
                res.status(500).json({ success: true, message: error });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
