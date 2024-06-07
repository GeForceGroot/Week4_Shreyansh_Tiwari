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
exports.getClient = exports.registorClient = void 0;
const customerManagement_1 = require("../model/customerManagement");
function registorClient(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield customerManagement_1.Customer.create({
                id: data.id,
                OrganizationId: data.orgId,
                MSAValidFrom: data.MSAValidFrom,
                MSAValidUpto: data.MSAValidUpto,
                legalName: data.LegalName,
                NDASignedOn: data.NDASignedOn,
                shortName: data.ShortName,
                NDAValidFrom: data.NDAValidFrom,
                NDAValidUpto: data.NDAValidUpto,
                adressId: data.AddressId,
                displayName: data.DisplayName,
                isNDASigned: data.IsNDASigned,
                isMSASigned: data.IsMSASigned,
                MSASugnedOn: data.MSASignedOn
            });
            return client;
        }
        catch (error) {
            console.error('Error in registor client:', error);
            return error;
        }
    });
}
exports.registorClient = registorClient;
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allClient = yield customerManagement_1.Customer.findAll();
            return allClient;
        }
        catch (error) {
            console.error('Error in getting clients:', error);
            return error;
        }
    });
}
exports.getClient = getClient;
//# sourceMappingURL=clinetRegistration.js.map