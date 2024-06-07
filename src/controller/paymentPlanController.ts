import { Request, Response } from "express";
import { paymentPlanCreation, getAllSowPlan } from '../service/paymentPlanService';

export const addPaymentPlan = async (req: Request, res: Response)=>{
    const org = await paymentPlanCreation(req, res)
    res.send(org)
}
export const getAllSOWPaymwntPlan = async (req: Request, res: Response)=>{
    const client = await getAllSowPlan()
    res.send(client)
}