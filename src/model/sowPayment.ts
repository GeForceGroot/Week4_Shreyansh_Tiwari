import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';


interface SOWPaymenteAttributes {
    id: string,
    sowId: string,
    CustomerId: string,
    PlannedInvoiceDate: string,
    TotalActualAmount: number,

}

class SWOPayment extends Model<SOWPaymenteAttributes> implements SOWPaymenteAttributes {
    public id !: string
    public sowId !: string
    public CustomerId !: string
    public PlannedInvoiceDate !: string
    public TotalActualAmount !: number
}


SWOPayment.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    sowId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CustomerId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PlannedInvoiceDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TotalActualAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

},
    {
        sequelize,
        tableName: 'SowPayment',
    }
)


export {
    SWOPayment
}