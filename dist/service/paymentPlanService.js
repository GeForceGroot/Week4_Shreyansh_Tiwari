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
exports.getAllSowPlan = exports.paymentPlanCreation = void 0;
const sowPayment_1 = require("../model/sowPayment");
function paymentPlanCreation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield sowPayment_1.SWOPayment.create({
                id: req.body.id,
                sowId: req.body.sowId,
                CustomerId: req.body.customerId,
                PlannedInvoiceDate: req.body.plannedInvoiceDate,
                TotalActualAmount: req.body.totalActualAmount
            });
            return client;
        }
        catch (error) {
            console.error('Error in registor client:', error);
            return error;
        }
    });
}
exports.paymentPlanCreation = paymentPlanCreation;
function getAllSowPlan() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allSowPaymentPlan = yield sowPayment_1.SWOPayment.findAll();
            return allSowPaymentPlan;
        }
        catch (error) {
            console.error('Error in getting sow plans:', error);
            return error;
        }
    });
}
exports.getAllSowPlan = getAllSowPlan;
//# sourceMappingURL=paymentPlanService.js.map