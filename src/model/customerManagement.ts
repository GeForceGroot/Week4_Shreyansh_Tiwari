import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';
import {Organiztion} from '../model/organiztion'
import {StatemnetOfWork} from '../model/statemnetOfWork'


interface CustomerAttributes {
    id: string,
    OrganizationId: string,
    MSAValidFrom: string,
    MSAValidUpto: string,
    legalName: string,
    NDASignedOn: string,
    shortName: string,
    NDAValidFrom: string,
    NDAValidUpto: string,
    adressId: string,
    displayName: string,
    isNDASigned: boolean,
    isMSASigned: boolean,
    MSASugnedOn: string

}

class Customer extends Model<CustomerAttributes> implements CustomerAttributes {
    public id !: string
    public OrganizationId !: string
    public MSAValidFrom !: string
    public MSAValidUpto !: string
    public legalName !: string
    public NDASignedOn !: string
    public shortName !: string
    public NDAValidFrom !: string
    public NDAValidUpto !: string
    public adressId !: string
    public displayName !: string
    public isNDASigned !: boolean
    public isMSASigned !: boolean
    public MSASugnedOn !: string

}


Customer.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    OrganizationId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MSAValidFrom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MSAValidUpto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    legalName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NDASignedOn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NDAValidFrom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NDAValidUpto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adressId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isNDASigned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isMSASigned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    MSASugnedOn:{
        type: DataTypes.STRING,
        allowNull: false,
    }

},
    {
        sequelize,
        tableName: 'CustomerData',
    }
)




export {
    Customer
}