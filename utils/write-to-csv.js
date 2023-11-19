import { stringify } from 'csv-stringify/sync';
import { promises as fs} from 'fs';

export const createBalanceCsv = async (address, insights, tokenBalancesFile, balanceFile) => {
  const columns = { 
    address: "address", 
    balance: "balance", 
    activeCurrencies: "active currencies",
    tokenBalanceFile: "currencies file name"
  };
  const data = [[address, insights.balance, insights.balances.length, tokenBalancesFile]];

  const content = stringify(data, { header: true, columns });

  await fs.writeFile(balanceFile, content);
  console.log("balances saved in", balanceFile);
}

export const createTokenBalancesCsv = async (address, insights, tokenBalancesFile) => {
  const columns = { 
    name: "currencyName", 
    symbol: "symbol", 
    balance: "value", 
    token: "tokenType", 
    address: "address"
  };
  const data = [];
  for (const { currency, value } of insights.balances) {
    const { symbol, name, tokenType, address } = currency;
    data.push([name, symbol, value, tokenType, address]);
  }

  const content = await stringify(data, { header: true, columns: columns });

  await fs.writeFile(tokenBalancesFile, content);
  console.log("token balances saved in", tokenBalancesFile);
}