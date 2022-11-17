const express = require("express");
const globalRouter = express.Router();
import EthereumBalanceRouter from "../api/address-balance/address-balance.route";

globalRouter.use("/balance", EthereumBalanceRouter);

export default globalRouter;
