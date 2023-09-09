import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();

type Data = {
    success: boolean;
    message?: string;
    data?: any;
    pagination?: Pagination
};

type Pagination = {
    page: number;
    pageSize: number;
    total: number;
}

interface RequestQuery {
    page?: string;
    pageSize?: string;
    keyword?: string;
    queueBot?: string;
}

// ... other imports ...

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const query: RequestQuery = req.query as RequestQuery;
                const page: number = parseInt(query.page || '1', 10);
                const pageSize: number = parseInt(query.pageSize || '10', 10);
                let queueBot: string = decodeURIComponent(query.queueBot || '');
                const searchCriteria: Prisma.PastAGWhereInput = {};
        
                if (queueBot) {
                    searchCriteria.queueBotId = {
                        contains: queueBot
                    };
                }

                console.log(searchCriteria);

                const pastAGs = await prisma.pastAG.findMany({
                    where: searchCriteria,
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalPartnersCount: number = await prisma.pastAG.count({
                    where: searchCriteria,
                });

                const totalPages: number = Math.ceil(totalPartnersCount / pageSize);

                res.status(200).json({ success: true, data: pastAGs, pagination: { total: totalPages, page: page, pageSize: pageSize } });
            } catch (error) {
                console.error("Error fetching data:", error); // Log the error for debugging
                res.status(500).json({ success: false, message: "An error occurred while fetching the QueueBots" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
