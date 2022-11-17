export interface TotalBalanceResponse {
  addresses: addressBalance[];
  totalBalance: number;
}

interface addressBalance {
  address: string;
  balance: number;
}
