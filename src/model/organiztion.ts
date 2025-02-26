import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';
import {Customer} from '../model/customerManagement'


interface OrganizationAttributes {
    id: string,
    gstNo: string,
    panNo: string,
    legalOrganizationName: string,
    invoiceTemplateId: string,
    shortName: string,
    contactName: string,
    displayName: string,
    email: string,
    addressId: string,
    phone: number,
}

class Organiztion extends Model<OrganizationAttributes> implements OrganizationAttributes {
    public id !: string
    public gstNo !: string
    public panNo !: string
    public legalOrganizationName !: string
    public invoiceTemplateId !: string
    public shortName !: string
    public contactName !: string
    public displayName !: string
    public email !: string
    public addressId !: string
    public phone !: number
}


Organiztion.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    gstNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    panNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    legalOrganizationName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    invoiceTemplateId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contactName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    addressId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        sequelize,
        tableName: 'Organization',
    }
)

//  one to many for org and client
Organiztion.hasMany(Customer, {
    foreignKey:'OrganizationId'
})


export {
    Organiztion
}