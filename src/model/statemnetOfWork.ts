import { DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';
import {SWOPayment} from './sowPayment'


interface StatmentOfWorkAttributes {
    id: string,
    InvoiceEmailAddresses: string[],
    CustomerID: string,
    CustomerPONumber: string,
    Title: string,
    CustomerSONumber: string,
    ValidityFrom: string,
    ValidityUpto: string,
    TotalValue: number,
    Currency: string,

}

class StatemnetOfWork extends Model<StatmentOfWorkAttributes> implements StatmentOfWorkAttributes {
    public id !: string
    public InvoiceEmailAddresses !: string[]
    public CustomerID !: string
    public CustomerPONumber !: string
    public Title !: string
    public CustomerSONumber !: string
    public ValidityFrom !: string
    public ValidityUpto !: string
    public TotalValue !: number
    public Currency !: string
}


StatemnetOfWork.init({
    id: {
        type: DataTypes.STRING,
        
    },
    InvoiceEmailAddresses: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    CustomerID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    CustomerPONumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CustomerSONumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ValidityFrom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ValidityUpto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TotalValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Currency: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: 'Sow',
    }
)

StatemnetOfWork.hasMany(SWOPayment, {
    foreignKey: 'sowId'
})




export {
    StatemnetOfWork
}