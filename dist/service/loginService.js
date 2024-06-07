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
exports.loginOrg = void 0;
const organiztion_1 = require("../model/organiztion");
function loginOrg(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const org = yield organiztion_1.Organiztion.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (org) {
                if (req.body.panNo === org.panNo) {
                    res.send('login succesfully');
                }
                else {
                    res.send('pan no. does not match');
                }
            }
            else {
                res.send('No organiztion Found');
            }
        }
        catch (error) {
            res.send('Error during login into organiztion');
        }
    });
}
exports.loginOrg = loginOrg;
//# sourceMappingURL=loginService.js.map