export interface EtherscanBalanceMultiResponse {
  status: string;
  message: string;
  result: { account: string; balance: string }[] | string;
}
