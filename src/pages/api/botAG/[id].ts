import { Member, PrismaClient, QueueBot } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type Data = {
    success: boolean;
    message?: string;
    data?: any;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case 'GET':
            try {
                const queueBot: QueueBot | null = await prisma.queueBot.findUnique({
                    where: {
                        id: String(id),
                    },
                });

                if (!queueBot) {
                    return res.status(404).json({ success: false, message: 'Member not found' });
                }

                res.status(200).json({ success: true, data: queueBot });
            } catch (error) {

                res.status(500).json({ success: false, message: "An error occurred while fetching the queueBot" });
            }
            break;
        // case 'PUT':
        //     const { username, password, firstname, lastname, bankAccount, bank, phone, line, email } = req.body;
        //     try {
        //         const queueBot: QueueBot = await prisma.queueBot.update({
        //             where: { id: String(id) },
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

        //         res.status(200).json({ success: false, data: queueBot });
        //     } catch (error) {

        //         res.status(500).json({ success: false, message: 'An error occurred while updating the queueBot' });
        //     }
        //     break;
        case 'DELETE':
            try {
                const queueBot: QueueBot = await prisma.queueBot.delete({
                    where: { id: String(id) },
                });

                res.status(200).json({ success: false, message: 'Member deleted successfully', data: queueBot });
            } catch (error) {
                console.error("67 ", error);
                res.status(500).json({ success: false, message: 'An error occurred while deleting the queueBot' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
