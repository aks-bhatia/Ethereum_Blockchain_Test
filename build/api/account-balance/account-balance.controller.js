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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalBalanceMultiAddress = void 0;
const account_balance_service_1 = require("./account-balance.service");
/**
 * Controller for getting total balance for provided addresses.
 */
const getTotalBalanceMultiAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.addresses) || ((_b = req.body) === null || _b === void 0 ? void 0 : _b.addresses.length) == 0)
        return res.status(400).json({ message: "Address not provided" });
    if (req.body.addresses.length > 100) {
        return res.status(400).json({
            message: "Reached address limit. 100 addresses can only be added.",
        });
    }
    try {
        let axiosResp = yield (0, account_balance_service_1.getBalanceMultiAddress)(req.body.addresses);
        const etherscanResponse = axiosResp === null || axiosResp === void 0 ? void 0 : axiosResp.data;
        if (axiosResp.status != 200 || !axiosResp.data) {
            return res
                .status(axiosResp.status)
                .json({ status: axiosResp.status, message: axiosResp.statusText });
        }
        else if (etherscanResponse.status == "0" ||
            !etherscanResponse.result ||
            typeof etherscanResponse.result === "string") {
            return res.status(404).json({
                status: 404,
                message: etherscanResponse.message,
                result: etherscanResponse.result,
            });
        }
        else {
            return res
                .status(200)
                .send(generateTotalBalanceResponse(etherscanResponse.result));
        }
    }
    catch (e) {
        return res.status(400).send({ status: 400, message: e.message });
    }
});
exports.getTotalBalanceMultiAddress = getTotalBalanceMultiAddress;
/**
 * Function to map etherscan response to custom total addresses Response
 * @param accountBalances
 * @returns Total Balance Response containing each address balance and total balance.
 */
const generateTotalBalanceResponse = (accountBalances) => {
    var _a;
    let DataResponse = { addresses: [], totalBalance: 0 };
    for (let balance of accountBalances) {
        (_a = DataResponse.addresses) === null || _a === void 0 ? void 0 : _a.push({
            address: balance.account,
            balance: parseInt(balance.balance),
        });
        DataResponse.totalBalance += parseInt(balance.balance);
    }
    return DataResponse;
};
