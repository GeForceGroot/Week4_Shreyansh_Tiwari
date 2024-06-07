import express, { Request, Response, Router } from 'express';
import { addClientSow } from '../controller/createSowController'

const createSow = Router()
createSow.use(express.json())

createSow.post('/', async (req: Request, res: Response) => {
    try {
        const newSow = await addClientSow(req, res);
        res.send(newSow);
    } catch (error) {
        console.error('Error in genrating statement of work:', error);
        res.status(500).send('Error in genrating statement of work');
    }
})


export default createSow