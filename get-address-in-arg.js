import parseArgs from "minimist";

const HELP_LOG = `E.g. invocation: "node main.js <ethereum-address>"`;
const ADDRESS_IDX = 2;

export const getAddressInArg = () => {
  const args = parseArgs(process.argv);
  
  if (args.help) {
    console.log(HELP_LOG);
    process.exit();
  }

  const address = args["_"][ADDRESS_IDX];

  if (!address) {
    console.error("Missing error argument.", HELP_LOG)
    process.exit();
  }
  
  console.log(`processing address: ${address}`);
  return address;
}
