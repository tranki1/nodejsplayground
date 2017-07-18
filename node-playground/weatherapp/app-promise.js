const yargs = require('yargs');
const axios = require('axios');

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

const apikey = 'AIzaSyBZ5KQfftvMwR-ClrhGmXKcyYQj_sIltbY';
let encodedAdress = encodeURIComponent(argv.address);

let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${apikey}&address=${encodedAdress}`;

axios
  .get(geocodeUrl)
  .then(res => {
    if (res.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address');
    } else {
      let lat = res.data.results[0].geometry.location.lat;
      let lng = res.data.results[0].geometry.location.lng;
      let weatherUrl = `https://api.darksky.net/forecast/088f05b2a9cd568104d9cf346213563a/${lat},${lng}`;
      console.log(res.data.results[0].formatted_address);
      return axios.get(weatherUrl);
    }
  })
  .then(res => {
    let temperature = res.data.currently.temperature;
    let apparentTemperature = res.data.currently.apparentTemperature;
    console.log(
      `It's currently ${temperature}. It fell like ${apparentTemperature}`
    );
  })

  .catch(e => {
    if (e.response && e.response.status === 404) {
      console.log('unable to connect to google server');
    } else if ((e.code = 'ENOTFOUND')) {
      console.log('unable to connect to forecast server');
    } else {
      console.log(e.message);
    }
  });
