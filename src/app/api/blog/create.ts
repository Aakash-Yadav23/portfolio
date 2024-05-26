import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        const { title, body, thumbnail } = req.body;

        try {
            const newPost = await prisma.blog.create({
                data: { title, body, thumbnail }
            })
        } catch (error: any) {

        }

    }

}