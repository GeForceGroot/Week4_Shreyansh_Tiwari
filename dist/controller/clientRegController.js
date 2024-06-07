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
exports.getAllClinet = exports.addClient = void 0;
const clinetRegistration_1 = require("../service/clinetRegistration");
const addClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, clinetRegistration_1.registorClient)(req.body);
    res.send(client);
});
exports.addClient = addClient;
const getAllClinet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, clinetRegistration_1.getClient)();
    res.send(client);
});
exports.getAllClinet = getAllClinet;
//# sourceMappingURL=clientRegController.js.map