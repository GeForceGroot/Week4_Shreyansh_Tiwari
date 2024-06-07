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
exports.registorOrg = void 0;
const organiztion_1 = require("../model/organiztion");
function registorOrg(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const org = yield organiztion_1.Organiztion.create({
                id: data.id,
                gstNo: data.gstNo,
                panNo: data.panNo,
                legalOrganizationName: data.legalOrganizationName,
                invoiceTemplateId: data.invoiceTemplateId,
                shortName: data.shortName,
                contactName: data.contactName,
                displayName: data.displayName,
                email: data.email,
                addressId: data.addressId,
                phone: data.phone,
            });
            return org;
        }
        catch (error) {
            console.error('Error in registor organization:', error);
            return error;
        }
    });
}
exports.registorOrg = registorOrg;
//# sourceMappingURL=orgCreate.js.map