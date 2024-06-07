"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
class Customer extends sequelize_1.Model {
}
exports.Customer = Customer;
Customer.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    OrganizationId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    MSAValidFrom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    MSAValidUpto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    legalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NDASignedOn: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NDAValidFrom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NDAValidUpto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    adressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isNDASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    isMSASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    MSASugnedOn: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'CustomerData',
});
//# sourceMappingURL=customerManagement.js.map