import { clientSow } from '../service/clientSowService';
import { Request, Response } from "express";

export const addClientSow = async (req: Request, res: Response)=>{
    const client = await clientSow(req.body)
    res.send(client)
}
