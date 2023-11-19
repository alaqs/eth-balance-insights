import parseArgs from "minimist";

const HELP_LOG = `E.g. invocation: "node main.js --address=<ethereum address>"`;

const getAddressInArg = () => {
  const {help, address} = parseArgs(process.argv);
  
  if (help) {
    console.log(HELP_LOG);
    process.exit();
  }

  if (!address) {
    console.error("Missing error argument.", HELP_LOG)
    process.exit();
  }
  
  console.log(`processing address: ${address}`);
  return address;
}
