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
exports.genInvoice = void 0;
const genrateInvoiceServices_1 = require("../service/genrateInvoiceServices");
const genInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inovice = yield (0, genrateInvoiceServices_1.invoiceIngertaion)(req, res);
    res.send(inovice);
});
exports.genInvoice = genInvoice;
//# sourceMappingURL=genrateInvoiceController.js.map