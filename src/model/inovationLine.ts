import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';


interface INvoiceLineAttributes {
    id: string,
    sowPaymentPlanId: string,
    sowId: string,
    OrderId: string,
    Particular: string,
    Rate: number,
    Unit: number,
    Total: number,
}

class InvoiceLine extends Model<INvoiceLineAttributes> implements INvoiceLineAttributes {
    public id !: string
    public sowPaymentPlanId !: string
    public sowId !: string
    public OrderId !: string
    public Particular !: string
    public Rate !: number
    public Unit !: number
    public Total !: number
}


InvoiceLine.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    sowPaymentPlanId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sowId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    OrderId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Particular: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Unit: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: 'InvoiceLine',
    }
)


export {
    InvoiceLine
}