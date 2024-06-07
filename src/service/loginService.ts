import express,{ Request, Response } from "express";
import { Organiztion } from "../model/organiztion";


async function loginOrg(req: Request, res: Response) {
    try {

        const org = await Organiztion.findOne({
            where: {
                email: req.body.email
            }
        }
        )
        if (org) {

            if(req.body.panNo === org.panNo){
                res.send('login succesfully')
            }else{
                res.send('pan no. does not match')
            }
        } else {
            res.send('No organiztion Found')
        }
    }catch(error){
        res.send('Error during login into organiztion')
    }
    
}


export { loginOrg }