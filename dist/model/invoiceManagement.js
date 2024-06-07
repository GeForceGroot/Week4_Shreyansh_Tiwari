"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceMangement = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
class invoiceMangement extends sequelize_1.Model {
}
exports.invoiceMangement = invoiceMangement;
invoiceMangement.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    totalInvoiceValue: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    SOWID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    invoiceSentOn: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'InvoiceMangement',
});
//# sourceMappingURL=invoiceManagement.js.map