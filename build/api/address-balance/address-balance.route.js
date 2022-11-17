"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const address_balance_controller_1 = require("./address-balance.controller");
const EthereumBalanceRouter = express_1.default.Router();
EthereumBalanceRouter.post("/getTotalBalance_MultiAddress", address_balance_controller_1.getTotalBalanceMultiAddress);
exports.default = EthereumBalanceRouter;
