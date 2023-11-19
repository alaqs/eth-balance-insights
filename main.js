import { getAddressInArg } from "./get-address-in-arg.js";
import { BitQueryClient } from "./bq-client.js";

const main = async () => {
  // const address = getAddressInArg();

  const client = new BitQueryClient();
  await client.getAddressInsights("0xc43db41aa6649ddda4ef0ef20fd4f16be43144f7");

}

void main();