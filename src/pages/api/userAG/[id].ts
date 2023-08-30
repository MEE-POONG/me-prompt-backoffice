import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { id } = req.query; // assuming id is passed as a query param
    try {
        switch (method) {

            case 'GET':

                const userAG = await prisma.userAG.findUnique({
                    where: { id: String(id) },
                });
                res.status(200).json(userAG);

                break;
                case 'PUT':
                    const { username, originAG, position, percent, commission, overdue, adjustPercentage, pay, customerCommission, recommender, memberId } = req.body;
                
                    // Initialize an empty object to hold the fields to update
                    const updateData: any = {};
                
                    // Conditionally add fields to updateData
                    if (username !== undefined) updateData.username = username;
                    if (originAG !== undefined) updateData.originAG = originAG;
                    if (position !== undefined) updateData.position = position;
                    if (percent !== undefined) {
                        const numericPercent = Number(percent); // Convert percent to number
                        if (isNaN(numericPercent)) {
                            res.status(400).json({ success: false, message: "Invalid percent value" });
                            return; // Exit the function to prevent further execution
                        }
                        updateData.percent = numericPercent;
                    }
                    if (commission !== undefined) updateData.commission = commission;
                    if (overdue !== undefined) updateData.overdue = overdue;
                    if (adjustPercentage !== undefined) updateData.adjustPercentage = adjustPercentage;
                    if (pay !== undefined) updateData.pay = pay;
                    if (customerCommission !== undefined) updateData.customerCommission = customerCommission;
                    if (recommender !== undefined) updateData.recommender = recommender;
                    if (memberId !== undefined) updateData.memberId = memberId;
                
                    // Perform the update
                    const updatedUserAG = await prisma.userAG.update({
                        where: { id: String(id) },
                        data: updateData,
                    });
                    res.status(200).json(updatedUserAG);
                
                    break;
            case 'DELETE':
                const deletedUserAG = await prisma.userAG.delete({
                    where: { id: String(id) },
                });
                res.status(200).json(deletedUserAG);

                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }

    } catch (error) {
        console.error("An unexpected error occurred:", error); // Log the actual error
        res.status(500).json({ success: false, message: "An unexpected error occurred" });
    }
}
