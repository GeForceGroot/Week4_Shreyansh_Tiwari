"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayementPlan = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
class PayementPlan extends sequelize_1.Model {
}
exports.PayementPlan = PayementPlan;
PayementPlan.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    sowId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    SOWPaymentPlanId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    OrderId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Particular: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Rate: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'PaymentPlan',
});
//# sourceMappingURL=paymentPlan.js.map