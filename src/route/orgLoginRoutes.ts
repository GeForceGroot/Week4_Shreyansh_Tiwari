import express, { Request, Response, Router } from 'express';
import { loginOrganztion } from '../controller/orgLoginController'

const loginOrgRoute = Router()
loginOrgRoute.use(express.json())

loginOrgRoute.post('/', async (req: Request, res: Response) => {
    try {
        const loginOrg = await loginOrganztion(req, res);
        res.send(loginOrg);
    } catch (error) {
        console.error('Error in login organization:', error);
        res.status(500).send('Error in login organization');
    }
})


export default loginOrgRoute


