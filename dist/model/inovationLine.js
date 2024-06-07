"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceLine = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
class InvoiceLine extends sequelize_1.Model {
}
exports.InvoiceLine = InvoiceLine;
InvoiceLine.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    OrderId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Particular: {
        type: sequelize_1.DataTypes.STRING,
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
    tableName: 'InvoiceLine',
});
//# sourceMappingURL=inovationLine.js.map