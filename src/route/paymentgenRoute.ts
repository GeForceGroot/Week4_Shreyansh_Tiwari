import express, { Request, Response, Router } from 'express';
import { paymentGenartion } from '../controller/paymnetGenInvoice'
const paymentgenration = Router()
paymentgenration.use(express.json())

paymentgenration.post('/', async (req: Request, res: Response) => {

    try {
        const invoice = await paymentGenartion(req, res)
        console.log('Paymnent Invoice genrated succesfully')
        res.send(invoice);
    } catch (err) {
        console.error('Error in Payment invoice genration', err);
        res.status(500).send('Error in Payment invoice genration');
    }

})


export default paymentgenration