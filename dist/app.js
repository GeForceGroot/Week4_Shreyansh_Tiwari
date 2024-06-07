"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrgRoutes_1 = __importDefault(require("./route/OrgRoutes"));
const orgLoginRoutes_1 = __importDefault(require("./route/orgLoginRoutes"));
const ClientReg_1 = __importDefault(require("./route/ClientReg"));
const createSow_1 = __importDefault(require("./route/createSow"));
const paymentPlan_1 = __importDefault(require("./route/paymentPlan"));
const genrateInvouiceRoute_1 = __importDefault(require("./route/genrateInvouiceRoute"));
const paymentgenRoute_1 = __importDefault(require("./route/paymentgenRoute"));
const paymentStatusUpdate_1 = __importDefault(require("./route/paymentStatusUpdate"));
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
// API to handle routes for organization registration
app.use('/Organization-Registration', OrgRoutes_1.default);
// API to handle routes for organization login
app.use('/Organiztion-login', orgLoginRoutes_1.default);
// API to handle routes for client registration
app.use('/client-Registration', ClientReg_1.default);
// API to handle routes for retrieving all clients
app.use('/getAllClient', ClientReg_1.default);
// API to handle routes for creating Statement of Work (SOW)
app.use('/createSow', createSow_1.default);
// API to handle routes for SOW payment plans
app.use('/sow-paymentPlan', paymentPlan_1.default);
// API to handle routes for retrieving all SOW payment plans
app.use('/getAllSowPaymentPlan', paymentPlan_1.default);
// API to handle routes for managing invoices
app.use('/mangeInvoice', genrateInvouiceRoute_1.default);
// API to handle routes for generating invoices
app.use('/generateInvoice', paymentgenRoute_1.default);
// API to handle routes for updating payment status
app.use('/updatePaymentStatus', paymentStatusUpdate_1.default);
app.listen(port, () => {
    console.log('server is listing at http://localhost:8080');
});
//# sourceMappingURL=app.js.map