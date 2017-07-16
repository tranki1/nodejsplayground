var yargs = require('yargs');
var geocoding = require('./geocoding/geocoding');

const argv = yargs
  .options({
    address: {
      describe: 'Address to fetch weather',
      demand: true,
      alias: 'a',
      string: true
    }
  })
  .help()
  .alias('help', 'h').argv;

geocoding.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
