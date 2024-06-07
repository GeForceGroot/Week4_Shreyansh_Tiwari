import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';


interface invoiceMangementAttributes {
    id: string,
    totalInvoiceValue: number,
    SOWID: string,
    Status: string,
    invoiceSentOn: string,
    customerId : string,

}

class invoiceMangement extends Model<invoiceMangementAttributes> implements invoiceMangementAttributes {
    public id !: string
    public totalInvoiceValue !: number
    public SOWID !: string
    public Status !: string
    public invoiceSentOn !: string
    public customerId !: string
}


invoiceMangement.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    totalInvoiceValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    SOWID: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    invoiceSentOn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    customerId: {
        type: DataTypes.STRING,
        allowNull: false,
    }

},
    {
        sequelize,
        tableName: 'InvoiceMangement',
    }
)


export {
    invoiceMangement
}