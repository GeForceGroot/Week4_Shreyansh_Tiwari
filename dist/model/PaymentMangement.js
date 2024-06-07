"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMangement = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
class PaymentMangement extends sequelize_1.Model {
}
exports.PaymentMangement = PaymentMangement;
PaymentMangement.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    PaymentDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ForExAmount: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    InvoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    IndianAmount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    isFullPayment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    BankPayment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Details: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize: db_1.default,
    tableName: 'PaymentMangement',
});
//# sourceMappingURL=PaymentMangement.js.map