import express, { Request, Response, Router } from 'express';
import { addOrgantion } from '../controller/orgController'
const route = Router()
route.use(express.json())

route.post('/', async (req: Request, res: Response) => {

    try {
        const orgRegistor = await addOrgantion(req, res)
        console.log('Organztion registor succesfully')
        res.send(orgRegistor);
    } catch (err) {
        console.error('Error in registor organization:', err);
        res.status(500).send('Error in registor organization');
    }

})


export default route