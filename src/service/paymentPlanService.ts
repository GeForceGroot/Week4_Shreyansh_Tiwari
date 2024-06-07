import { SWOPayment } from "../model/sowPayment";
import { Request, Response } from "express";

async function paymentPlanCreation(req: Request, res: Response) {
    try {
        const client = await SWOPayment.create({
            id: req.body.id,
            sowId: req.body.sowId,
            CustomerId: req.body.customerId,
            PlannedInvoiceDate: req.body.plannedInvoiceDate,
            TotalActualAmount: req.body.totalActualAmount
        });
        return client;
    } catch (error) {
        console.error('Error in registor client:', error);
        return error;
    }
}
async function getAllSowPlan() {
    try{
        const allSowPaymentPlan = await SWOPayment.findAll();
        return allSowPaymentPlan

    }catch(error){
        console.error('Error in getting sow plans:', error);
        return error;
    }
    
}


export { paymentPlanCreation, getAllSowPlan }
