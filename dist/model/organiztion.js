"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organiztion = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
const customerManagement_1 = require("../model/customerManagement");
class Organiztion extends sequelize_1.Model {
}
exports.Organiztion = Organiztion;
Organiztion.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    gstNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    panNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    legalOrganizationName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    invoiceTemplateId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    contactName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'Organization',
});
//  one to many for org and client
Organiztion.hasMany(customerManagement_1.Customer, {
    foreignKey: 'OrganizationId'
});
//# sourceMappingURL=organiztion.js.map