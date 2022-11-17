"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const globalRouter = express.Router();
const address_balance_route_1 = __importDefault(require("../api/address-balance/address-balance.route"));
globalRouter.use("/balance", address_balance_route_1.default);
exports.default = globalRouter;
