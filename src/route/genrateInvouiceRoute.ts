import express, { Request, Response, Router } from 'express';
import { genInvoice } from '../controller/genrateInvoiceController'
const mangeInvoiceRoute = Router()
mangeInvoiceRoute.use(express.json())

mangeInvoiceRoute.post('/', async (req: Request, res: Response) => {

    try {
        const invoice = await genInvoice(req, res)
        console.log('Paymnent Invoice genrated succesfully')
        res.send(invoice);
    } catch (err) {
        console.error('Error in Payment invoice genration', err);
        res.status(500).send('Error in Payment invoice genration');
    }

})


export default mangeInvoiceRoute