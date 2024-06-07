import express, { Request, Response, Router } from 'express';
import { paymentStatusUpdate } from '../controller/paymentStatusController'
const paymentUpdate = Router()
paymentUpdate.use(express.json())

paymentUpdate.post('/', async (req: Request, res: Response) => {

    try {
        const invoice = await paymentStatusUpdate(req, res)
        console.log('Paymnent updated  succesfully')
        res.send(invoice);
    } catch (err) {
        console.error('Error in Payment updation', err);
        res.status(500).send('Error in Payment updation');
    }

})


export default paymentUpdate