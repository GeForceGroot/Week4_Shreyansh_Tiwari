import { Customer } from "../model/customerManagement";

async function registorClient(data: any) {
    try {
        const client = await Customer.create({
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
    }catch(error){
        console.error('Error in registor client:', error);
        return error;
    }
}
async function getClient() {
    try{
        const allClient = await Customer.findAll();
        return allClient

    }catch(error){
        console.error('Error in getting clients:', error);
        return error;
    }
    
}


export { registorClient, getClient }
