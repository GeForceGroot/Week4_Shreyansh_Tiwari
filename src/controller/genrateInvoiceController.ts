import { Request, Response } from "express";
import { invoiceIngertaion } from '../service/genrateInvoiceServices';

export const genInvoice = async (req: Request, res: Response)=>{
    const inovice = await invoiceIngertaion(req, res)
    res.send(inovice)
}