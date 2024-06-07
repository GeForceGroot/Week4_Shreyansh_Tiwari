import { Request, Response } from "express";
import { paymentStatusUPdate } from '../service/paymentStatusService';


export const paymentStatusUpdate = async (req: Request, res: Response)=>{
    const invoice: any = await paymentStatusUPdate(req, res)
    return invoice
}