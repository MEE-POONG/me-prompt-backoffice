

export const warnCheckEditLogData = [
    { id: '1', title: 'a', tagLink: 'news', detail: 'แก้ฟิล title จาก มองบน เป็น มองบนฟ้า', firstname: 'งง', lastname: 'งง', memberId: '1', workingsId: '1', packagePriceId: '', newsId: '', aboutID: '' },
];

export const warnAudienceRecordData = [
    { id: '1', title: 'ผู้เข้าชมเว็บประจำวัน 3 พ.ค. 2565', detail: '185' },
];



import type { NextApiRequest, NextApiResponse } from 'next'

type Error = {
    code: number;
    message: any;
}
type Data = {
    id: string;
    title: string;
    detail: string;
    firstname: string;
    lastname: string;
    memberId: string;
    workingsId: string;
    packagePriceId: string;
    newsId: string;
    aboutID: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[] | Error>) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {

                const data = [
                    { id: '1', title: 'c', detail: 'แก้ฟิล facebookแก้ฟิล ', firstname: 'งง', lastname: 'งง', memberId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
                    { id: '1', title: 'c', detail: 'แก้ฟิล facebookแก้ฟิล ', firstname: 'งง', lastname: 'งง', memberId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
                    { id: '1', title: 'c', detail: 'แก้ฟิล facebookแก้ฟิล ', firstname: 'งง', lastname: 'งง', memberId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
                    { id: '1', title: 'c', detail: 'แก้ฟิล facebookแก้ฟิล ', firstname: 'งง', lastname: 'งง', memberId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
                    { id: '1', title: 'c', detail: 'แก้ฟิล facebookแก้ฟิล ', firstname: 'งง', lastname: 'งง', memberId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
                    { id: '1', title: 'c', detail: 'แก้ฟิล facebookแก้ฟิล ', firstname: 'งง', lastname: 'งง', memberId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
                    { id: '1', title: 'c', detail: 'แก้ฟิล facebookแก้ฟิล ', firstname: 'งง', lastname: 'งง', memberId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
                    { id: '1', title: 'c', detail: 'แก้ฟิล facebookแก้ฟิล ', firstname: 'งง', lastname: 'งง', memberId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
                ];
                
                res.status(200).json(data)
            } catch (err) {
                res.status(400).json({
                    code: 400,
                    message: err
                })
            }
            break;

        case 'POST':
            try {

                // Someting function

                res.status(201)
            } catch (err) {
                res.status(400).json({
                    code: 400,
                    message: err
                })
            }
            break;

        case 'PUT':
            try {

                // Someting function

                res.status(201)
            } catch (err) {
                res.status(400).json({
                    code: 400,
                    message: err
                })
            }
            break;

        case 'DELETE':
            try {

                // Someting function

                res.status(204)
            } catch (err) {
                res.status(400).json({
                    code: 400,
                    message: err
                })
            }
            break;

        default:
            res.status(404).json({
                code: 404,
                message: 'no route'
            })
            break;
    }
}

