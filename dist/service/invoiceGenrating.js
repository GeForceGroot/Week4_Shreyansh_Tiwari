"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceGenService = void 0;
const invoiceManagement_1 = require("../model/invoiceManagement");
const sowPayment_1 = require("../model/sowPayment");
const uuid_1 = require("uuid");
function invoiceGenService(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.params);
            const client = yield sowPayment_1.SWOPayment.findAll({
                where: {
                    CustomerId: req.body.customerId
                }
            });
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = `${year}-${month}-${day}`;
            let fixDate = '2024-10-10';
            console.log(currentDate);
            const invoice = yield matchDateIvoice(client, fixDate);
            res.send(invoice);
        }
        catch (error) {
            console.error('Error in genrate invoice:', error);
            return error;
        }
    });
}
exports.invoiceGenService = invoiceGenService;
function matchDateIvoice(client, date) {
    return __awaiter(this, void 0, void 0, function* () {
        const invoices = [];
        for (const element of client) {
            if (element.PlannedInvoiceDate === date) {
                const invoice = yield invoiceManagement_1.invoiceMangement.create({
                    id: (0, uuid_1.v4)(),
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
    });
}
//# sourceMappingURL=invoiceGenrating.js.map