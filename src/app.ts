import express, { Request, Response } from 'express';
import route from './route/OrgRoutes';
import loginOrgRoute from './route/orgLoginRoutes';
import clientRegistration from './route/ClientReg';
import createSow from './route/createSow';
import paymnentPlan from './route/paymentPlan';
import mangeInvoiceRoute from './route/genrateInvouiceRoute';
import paymentgenration from './route/paymentgenRoute';
import paymentUpdate from './route/paymentStatusUpdate';
const app = express();
const port = 8080;


app.use(express.json());


// API to handle routes for organization registration
app.use('/Organization-Registration', route);

// API to handle routes for organization login
app.use('/Organiztion-login', loginOrgRoute);

// API to handle routes for client registration
app.use('/client-Registration', clientRegistration);

// API to handle routes for retrieving all clients
app.use('/getAllClient', clientRegistration);

// API to handle routes for creating Statement of Work (SOW)
app.use('/createSow', createSow);

// API to handle routes for SOW payment plans
app.use('/sow-paymentPlan', paymnentPlan);

// API to handle routes for retrieving all SOW payment plans
app.use('/getAllSowPaymentPlan', paymnentPlan);

// API to handle routes for managing invoices
app.use('/mangeInvoice', mangeInvoiceRoute);

// API to handle routes for generating invoices
app.use('/generateInvoice', paymentgenration);

// API to handle routes for updating payment status
app.use('/updatePaymentStatus', paymentUpdate);




app.listen(port, () => {
    console.log('server is listing at http://localhost:8080')
})


