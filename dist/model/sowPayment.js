"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWOPayment = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
class SWOPayment extends sequelize_1.Model {
}
exports.SWOPayment = SWOPayment;
SWOPayment.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    CustomerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    PlannedInvoiceDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    TotalActualAmount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'SowPayment',
});
//# sourceMappingURL=sowPayment.js.map