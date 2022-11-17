import axios from "axios";
export const getBalanceMultiAddress = async (addressesArray: string[]) => {
  const Addresses = addressesArray.toString();
  const URL =
    "https://api-goerli.etherscan.io//api?module=account&action=balancemulti" +
    "&address=" +
    Addresses +
    "&tag=latest" +
    "&apikey=" +
    "KCYDTS1KA2VCREPECI13YEE9S35PK5WIVQ";
  try {
    return await axios({ method: "get", url: URL });
  } catch (error) {
    throw Error("Error while fetching response from etherscan");
  }
};
