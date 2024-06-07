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
exports.clientSow = void 0;
const statemnetOfWork_1 = require("../model/statemnetOfWork");
function clientSow(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield statemnetOfWork_1.StatemnetOfWork.create({
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
        }
        catch (error) {
            console.error('Error in genrating statement of work:', error);
            return error;
        }
    });
}
exports.clientSow = clientSow;
//# sourceMappingURL=clientSowService.js.map