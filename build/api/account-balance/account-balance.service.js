"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalanceMultiAddress = void 0;
const axios_1 = __importDefault(require("axios"));
const getBalanceMultiAddress = (addressesArray) => __awaiter(void 0, void 0, void 0, function* () {
    const addresses = addressesArray.toString();
    const url = "https://api-goerli.etherscan.io//api?module=account&action=balancemulti" +
        "&address=" +
        addresses +
        "&tag=latest" +
        "&apikey=" +
        "KCYDTS1KA2VCREPECI13YEE9S35PK5WIVQ";
    try {
        return yield (0, axios_1.default)({ method: "get", url: url });
    }
    catch (error) {
        throw Error("Error while fetching response from etherscan");
    }
});
exports.getBalanceMultiAddress = getBalanceMultiAddress;
