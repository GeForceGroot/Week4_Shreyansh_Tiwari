import { registorClient, getClient } from '../service/clinetRegistration';
import { Request, Response } from "express";

export const addClient = async (req: Request, res: Response)=>{
    const client = await registorClient(req.body)
    res.send(client)
}
export const getAllClinet = async (req: Request, res: Response)=>{
    const client = await getClient()
    res.send(client)
}
