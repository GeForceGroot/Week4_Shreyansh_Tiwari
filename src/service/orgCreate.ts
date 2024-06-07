import { Organiztion } from "../model/organiztion";

async function registorOrg(data: any) {
    try {
        const org = await Organiztion.create({
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
        })
        return org;
    }catch(error){
        console.error('Error in registor organization:', error);
        return error;
    }
}


export { registorOrg }
