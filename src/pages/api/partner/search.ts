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
    searchTerm?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const query: RequestQuery = req.query as unknown as RequestQuery;
                const page: number = parseInt(query.page || '1', 10);
                const pageSize: number = parseInt(query.pageSize || '10', 10);
                let searchTerm: string = decodeURIComponent(query.searchTerm || '');
        
                const searchName: Prisma.PartnerWhereInput = {
                    userAG: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                };
        
                const partners = await prisma.partner.findMany({
                    where: searchName,
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });
        
                const totalPartnersCount: number = await prisma.partner.count({
                    where: searchName,
                });
        
                const totalPages: number = Math.ceil(totalPartnersCount / pageSize);
        
                res.status(200).json({ success: true, data: partners, pagination: { total: totalPages, page: page, pageSize: pageSize } });
            } catch (error) {
                res.status(500).json({ success: false, message: "An error occurred while fetching the partners" });
            }
            break;

        // case 'POST':
        //     try {
        //         const { username, password, firstname, lastname, bankAccount, bank, phone, line, email } = req.body;

        //         if (!username || !password || !firstname || !lastname || !bankAccount || !bank || !phone || !line) {
        //             return res.status(400).json({ success: false, message: "All fields are required" });
        //         }
        //         const newPartner = await prisma.partner.create({
        //             data: {
        //                 username,
        //                 password,
        //                 firstname,
        //                 lastname,
        //                 bankAccount,
        //                 bank,
        //                 phone,
        //                 line,
        //                 email,
        //             },
        //         });

        //         res.status(201).json({ success: true, data: newPartner });
        //     } catch (error) {
        //         res.status(500).json({ success: true, message: "An error occurred while creating the partner" });
        //     }
        //     break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
