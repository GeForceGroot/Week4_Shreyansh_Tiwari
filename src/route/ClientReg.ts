import express, { Request, Response, Router } from 'express';
import { getAllClinet, addClient } from '../controller/clientRegController'

const clientRegistration = Router()
clientRegistration.use(express.json())

clientRegistration.post('/', async (req: Request, res: Response) => {
    try {
        const newClinet = await addClient(req, res);
        res.send(newClinet);
    } catch (error) {
        console.error('Client not registor successfully:', error);
        res.status(500).send('Error in client registration');
    }
})


clientRegistration.get('/',async (req: Request, res: Response)=>{
    try {
        const allClient = await getAllClinet(req, res);
        res.send(allClient);
    } catch (error) {
        console.error('Client not registor successfully:', error);
        res.status(500).send('Error in client registration');
    }
})


export default clientRegistration
