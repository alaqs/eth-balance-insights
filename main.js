import { 
  getAddressInArg, 
  BitQueryClient, 
  createBalanceCsv, 
  createTokenBalancesCsv, 
  buildOutputFileNames 
} from "./utils/index.js";


const main = async () => {
  const address = getAddressInArg();
  const { balanceFile, tokenBalancesFile } = buildOutputFileNames(address);

  const client = new BitQueryClient();
  const insights = await client.getAddressInsights("0xc43db41aa6649ddda4ef0ef20fd4f16be43144f7");

  await createBalanceCsv(address, insights, tokenBalancesFile, balanceFile);
  await createTokenBalancesCsv(address, insights, tokenBalancesFile);
}

void main();