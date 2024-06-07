import { InvoiceLine } from '../model/inovationLine'
import { Request, Response } from "express";


async function invoiceIngertaion(req: Request, res: Response) {
    try {
        const invoive = await InvoiceLine.create({
            id: req.body.id,
            sowPaymentPlanId: req.body.sowPaymentPlanId,
            sowId: req.body.sowId,
            OrderId: req.body.orderId,
            Particular: req.body.particular,
            Rate: req.body.rate,
            Unit: req.body.unit,
            Total: req.body.total,  
        });
        return invoive;
    } catch (error) {
        console.error('Error in registor client:', error);
        return error;
    }
}


export { invoiceIngertaion }
