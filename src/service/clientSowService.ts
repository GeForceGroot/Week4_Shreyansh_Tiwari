import { StatemnetOfWork } from "../model/statemnetOfWork";

async function clientSow(data: any) {
    try {
        const client = await StatemnetOfWork.create({
            id: data.id,
            InvoiceEmailAddresses: data.invoiceEmailAddresses,
            CustomerID: data.customerId,
            CustomerPONumber: data.customerPONumber,
            Title: data.title,
            CustomerSONumber: data.customerSONumber,
            ValidityFrom: data.validityPeriod.validFrom,
            ValidityUpto: data.validityPeriod.validUpto,
            TotalValue: data.totalValue,
            Currency: data.currency,
        });
        return client;
    }catch(error){
        console.error('Error in genrating statement of work:', error);
        return error;
    }
}


export { clientSow }
