import { Request, Response } from "express";
import { invoiceGenService } from '../service/invoiceGenrating';

export const paymentGenartion = async (req: Request, res: Response)=>{
    const invoice: any = await invoiceGenService(req, res)
    return invoice
}