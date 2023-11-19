import parseArgs from "minimist";

const HELP_LOG = `E.g. invocation: "node main.js --address=<ethereum-address>"`;

export const getAddressInArg = () => {
  const args = parseArgs(process.argv, {string: ["address"]});
  
  if (args.help) {
    console.log(HELP_LOG);
    process.exit();
  }

  const address = args.address;

  if (!address) {
    console.error("Missing error argument.", HELP_LOG)
    process.exit();
  }
  
  console.log(`Processing address: ${address}`);
  return address;
}
