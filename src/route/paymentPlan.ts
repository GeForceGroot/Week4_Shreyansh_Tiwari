import express, { Request, Response, Router } from 'express';
import { addPaymentPlan, getAllSOWPaymwntPlan } from '../controller/paymentPlanController'
const paymnentPlan = Router()
paymnentPlan.use(express.json())

paymnentPlan.post('/', async (req: Request, res: Response) => {

    try {
        const paymentPlan = await addPaymentPlan(req, res)
        console.log('Payment Plan created succesfully')
        res.send(paymentPlan);
    } catch (err) {
        console.error('Error in Payment Plan creation', err);
        res.status(500).send('Error in Payment Plan creation');
    }

})
paymnentPlan.get('/',async (req: Request, res: Response)=>{
    try {
        const allClient = await getAllSOWPaymwntPlan(req, res);
        res.send(allClient);
    } catch (error) {
        console.error('Client not registor successfully:', error);
        res.status(500).send('Error in client registration');
    }
})


export default paymnentPlan