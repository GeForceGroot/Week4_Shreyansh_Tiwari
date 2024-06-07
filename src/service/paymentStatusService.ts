
import { Request, Response } from "express";
import { invoiceMangement } from '../model/invoiceManagement'
import { PaymentMangement } from '../model/PaymentMangement'
import { v4 as uuidv4 } from 'uuid';


async function paymentStatusUPdate(req: Request, res: Response) {
    try {
        const invoiceId = req.body.invoiceId;
        const invoiceData = await invoiceMangement.findOne({
            where: {
                id: invoiceId
            }
        })
        const updatedpaymentinvoice =await updatePayment(invoiceData);
        console.log(updatedpaymentinvoice)
        res.json(updatedpaymentinvoice)
    } catch (error) {
        console.error('Error in update payment:', error);
        return error;
    }
}


async function updatePayment(data: any) {
    try {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        console.log('month is ' + month);
        let currentDate = `${year}-${month}-${day}`;
        const updatePaymentInvoice = await PaymentMangement.create({
            id: uuidv4(),
            PaymentDate: currentDate,
            ForExAmount: data.totalInvoiceValue,
            IndianAmount: data.totalInvoiceValue,
            InvoiceId: data.id,
            isFullPayment: "Done",
            BankPayment: "" ,
            Details: "",
        })
        return updatePaymentInvoice
    } catch (error) {
        console.error('Error in update payment:', error);
        return error;
    }
}

export { paymentStatusUPdate }