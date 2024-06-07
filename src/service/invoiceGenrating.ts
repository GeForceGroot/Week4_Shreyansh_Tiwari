import { InvoiceLine } from '../model/inovationLine'
import { invoiceMangement } from '../model/invoiceManagement'
import { StatemnetOfWork } from '../model/statemnetOfWork'
import { SWOPayment } from '../model/sowPayment'
import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';


async function invoiceGenService(req: Request, res: Response) {
    try {
        console.log(req.params)
        const client = await SWOPayment.findAll({
            where: {
                CustomerId: req.body.customerId
            }
        })
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${year}-${month}-${day}`;
        let fixDate = '2024-10-10'
        console.log(currentDate);
        const invoice = await matchDateIvoice(client, fixDate);
        res.send(invoice);
    } catch (error) {
        console.error('Error in genrate invoice:', error);
        return error;
    }
}

async function matchDateIvoice(client: any, date: any) {
    const invoices = [];

    for (const element of client) {
        if (element.PlannedInvoiceDate === date) {
            const invoice = await invoiceMangement.create({
                id: uuidv4(),
                totalInvoiceValue: element.TotalActualAmount,
                SOWID: element.sowId,
                Status: 'Drafted',
                invoiceSentOn: element.PlannedInvoiceDate,
                customerId: element.CustomerId,
            });
            invoices.push(invoice.dataValues);
        }
    }

    return invoices;

}


export { invoiceGenService }
