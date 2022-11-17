import { TotalBalanceResponse } from "../interfaces/balance-response";
import { EtherscanBalanceMultiResponse } from "../interfaces/etherscan-balance-response.interface";
import { getBalanceMultiAddress } from "./address-balance.service";

/**
 * Controller for getting total balance for provided addresses.
 */
export const getTotalBalanceMultiAddress = async (req: any, res: any) => {
  if (!req.body?.addresses || req.body?.addresses.length == 0)
    return res.status(400).json({ message: "Address not provided" });
  if (req.body.addresses.length > 100) {
    return res.status(400).json({
      message: "Reached address limit. 100 addresses can only be added.",
    });
  }
  try {
    const AxiosResp = await getBalanceMultiAddress(req.body.addresses);
    const EtherscanResponse: EtherscanBalanceMultiResponse = AxiosResp?.data;
    if (AxiosResp.status != 200 || !AxiosResp.data) {
      return res
        .status(AxiosResp.status)
        .json({ status: AxiosResp.status, message: AxiosResp.statusText });
    } else if (
      EtherscanResponse.status == "0" ||
      !EtherscanResponse.result ||
      typeof EtherscanResponse.result === "string"
    ) {
      return res.status(404).json({
        status: 404,
        message: EtherscanResponse.message,
        result: EtherscanResponse.result,
      });
    } else {
      return res
        .status(200)
        .send(generateTotalBalanceResponse(EtherscanResponse.result));
    }
  } catch (e: any) {
    //improvement - logs can be  stored in redis.
    return res.status(400).send({ status: 400, message: e.message });
  }
};

/**
 * Function to map etherscan response to custom total addresses Response
 * @param accountBalances
 * @returns Total Balance Response containing each address balance and total balance.
 */
const generateTotalBalanceResponse = (
  accountBalances: { account: string; balance: string }[]
): TotalBalanceResponse => {
  let DataResponse: TotalBalanceResponse = { addresses: [], totalBalance: 0 };
  for (let accountDetail of accountBalances) {
    DataResponse.addresses?.push({
      address: accountDetail.account,
      balance: parseFloat(accountDetail.balance),
    });
    DataResponse.totalBalance += parseFloat(accountDetail.balance);
  }
  return DataResponse;
};
