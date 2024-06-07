import { registorOrg } from '../service/orgCreate';
import { Request, Response } from "express";

export const addOrgantion = async (req: Request, res: Response)=>{
    const org = await registorOrg(req.body)
    res.send(org)
}

