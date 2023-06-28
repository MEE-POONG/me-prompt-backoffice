import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const page: number = Number(req.query.page) || 1;
                const pageSize: number = Number(req.query.pageSize) || 10;

                const partners = await prisma.partner.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalPartnersCount = await prisma.partner.count();
                const totalPages = Math.ceil(totalPartnersCount / pageSize);

                res.status(200).json({ partners, pagination: { page, pageSize, totalPages } });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "An error occurred while fetching the partners" });
            }
            break;
        case 'POST':
            const { userAG, originAG, percent, commission, overdue, adjustPercentage, pay, customerCommission, recommender } = req.body;
            try {
                const newPartner = await prisma.partner.create({
                    data: {
                        userAG,
                        originAG,
                        percent,
                        commission,
                        overdue,
                        adjustPercentage,
                        pay,
                        customerCommission,
                        recommender
                    },
                });
                res.status(201).json(newPartner);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "An error occurred while creating the partner" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
