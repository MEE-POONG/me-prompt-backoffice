import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const pastAGs = await prisma.pastAG.findMany();
                res.status(200).json({ success: true, data: pastAGs });
            } catch (error) {
                res.status(500).json({ success: false, message: "An error occurred while fetching the pastAGs" });
            }
            break;

        case 'POST':
            try {

                const { Account, Contact, Cur, Amount, ValidAmount, MemberCount, StakeCount, GrossCom, MemberWL, MemberCom, MemberWLCom, SuperProfitValid, SuperProfitWL, SuperProfitCom, SuperProfitWLCom, CompanyValid, CompanyWL, CompanyCom, CompanyWLCom, position, pastAGID, } = req.body;
                const newQueueBot = await prisma.pastAG.create({
                    data: {
                        Account, Contact, Cur, Amount, ValidAmount, MemberCount, StakeCount, GrossCom, MemberWL, MemberCom, MemberWLCom, SuperProfitValid, SuperProfitWL, SuperProfitCom, SuperProfitWLCom, CompanyValid, CompanyWL, CompanyCom, CompanyWLCom, position, pastAGID,
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
