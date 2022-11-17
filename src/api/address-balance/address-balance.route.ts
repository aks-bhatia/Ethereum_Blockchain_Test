import express from "express";
import { getTotalBalanceMultiAddress } from "./address-balance.controller";
const EthereumBalanceRouter = express.Router();

EthereumBalanceRouter.post(
  "/getTotalBalance_MultiAddress",
  getTotalBalanceMultiAddress
);

export default EthereumBalanceRouter;
