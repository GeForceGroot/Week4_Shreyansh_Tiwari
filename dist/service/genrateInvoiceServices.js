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
exports.invoiceIngertaion = void 0;
const inovationLine_1 = require("../model/inovationLine");
function invoiceIngertaion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoive = yield inovationLine_1.InvoiceLine.create({
                id: req.body.id,
                sowPaymentPlanId: req.body.sowPaymentPlanId,
                sowId: req.body.sowId,
                OrderId: req.body.orderId,
                Particular: req.body.particular,
                Rate: req.body.rate,
                Unit: req.body.unit,
                Total: req.body.total,
            });
            return invoive;
        }
        catch (error) {
            console.error('Error in registor client:', error);
            return error;
        }
    });
}
exports.invoiceIngertaion = invoiceIngertaion;
//# sourceMappingURL=genrateInvoiceServices.js.map