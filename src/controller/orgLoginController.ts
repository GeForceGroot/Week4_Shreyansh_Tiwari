import { Request, Response } from "express";
import { loginOrg } from '../service/loginService';

export const loginOrganztion = async (req: Request, res: Response)=>{
    const org = await loginOrg(req, res)
    res.send(org)
}