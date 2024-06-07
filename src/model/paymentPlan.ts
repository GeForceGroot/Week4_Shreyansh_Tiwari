import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';


interface PaymentPlanAttributes {
    id: number,
    SOWPaymentPlanId: number,
    sowId: number,
    OrderId: number,
    Particular: number,
    Rate: number,
    Unit: number,
    Total: number,

}

class PayementPlan extends Model<PaymentPlanAttributes> implements PaymentPlanAttributes {
    public id !: number
    public SOWPaymentPlanId !: number
    public sowId !: number
    public OrderId !: number
    public Particular !: number
    public Rate !: number
    public Unit !: number
    public Total !: number
}


PayementPlan.init({
    id: {
        type: DataTypes.INTEGER,
    },
    sowId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    SOWPaymentPlanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    OrderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Particular: {
        type: DataTypes.INTEGER,
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
        tableName: 'PaymentPlan',
    }
)


export {
    PayementPlan
}