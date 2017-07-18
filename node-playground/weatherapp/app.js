const yargs = require('yargs');
const geocoding = require('./geocoding/geocoding');
const weather = require('./weather/getweather');

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
    console.log(results.address);
    weather.getweather(
      results.longitute,
      results.latitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(
            `It's currently ${weatherResults.temperature} but feel like ${
              weatherResults.apparentTemperature
            }`
          );
        }
      }
    );
  }
});
