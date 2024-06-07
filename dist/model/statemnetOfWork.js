"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatemnetOfWork = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
const sowPayment_1 = require("./sowPayment");
class StatemnetOfWork extends sequelize_1.Model {
}
exports.StatemnetOfWork = StatemnetOfWork;
StatemnetOfWork.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
    },
    InvoiceEmailAddresses: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    CustomerID: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    CustomerPONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    CustomerSONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ValidityFrom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ValidityUpto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    TotalValue: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'Sow',
});
StatemnetOfWork.hasMany(sowPayment_1.SWOPayment, {
    foreignKey: 'sowId'
});
//# sourceMappingURL=statemnetOfWork.js.map