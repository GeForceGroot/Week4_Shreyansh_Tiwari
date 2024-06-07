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
exports.getAllSOWPaymwntPlan = exports.addPaymentPlan = void 0;
const paymentPlanService_1 = require("../service/paymentPlanService");
const addPaymentPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const org = yield (0, paymentPlanService_1.paymentPlanCreation)(req, res);
    res.send(org);
});
exports.addPaymentPlan = addPaymentPlan;
const getAllSOWPaymwntPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, paymentPlanService_1.getAllSowPlan)();
    res.send(client);
});
exports.getAllSOWPaymwntPlan = getAllSOWPaymwntPlan;
//# sourceMappingURL=paymentPlanController.js.map