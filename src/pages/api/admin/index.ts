import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const page: number = Number(req.query.page) || 1;
        const pageSize: number = Number(req.query.pageSize) || 10;

        const admin = await prisma.admin.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize
        });

        const totaladmin = await prisma.admin.count();
        const totalPage: number = Math.ceil(totaladmin / pageSize);
        res.status(200).json({ admin });
      } catch (error) {
        res
          .status(500)
          .json({ error: "An error occurred while fetching the admin" });
      }
      break;

    case "POST":
      try {
        const newadmin = await prisma.admin.create({
          data: req.body
        });

        res.status(201).json(newadmin);
      } catch (error) {
        res
          .status(500)
          .json({ error: "An error occurred while creating the admin" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
